import {
  FC, useState, useCallback, useEffect, MouseEvent,
} from "react";
import Menu from "components/Menu";
import WinPopup from "components/WinPopup";
import Body from "components/Body";
import { getRandomInt } from "common";
import { ThemeProvider } from "styled-components";
import { coin } from "styles/themes/coin";
import { ny } from "styles/themes/ny";
import { sweet } from "styles/themes/sweet";
import { green } from "styles/themes/green";
import { IGameTheme } from "styles/themes/types";
import { GameWrap } from "./styled";
import {
  IGameItem, GameMode, CreateKeysType, CheckResultType,
} from "./types";
import { keysSchema, letters } from "./data";

const Game: FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showBody, setShowBody] = useState<boolean>(false);
  const [countItem, setCountItem] = useState<string>("2");
  const [valueRange, setValueRange] = useState<string>("A");
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.INCREASE);
  const [gameItemsData, setGameItemsData] = useState<Nullable<IGameItem[]>>(null);
  const [bodyItemsData, setBodyItemsData] = useState<IGameItem[]>([]);
  const [panelItemsData, setPanelItemsData] = useState<IGameItem[]>([]);
  const [currentTheme, setCurrentTheme] = useState<IGameTheme>(coin);

  const setRandomTheme = useCallback(() => {
    const themeArray = [coin, ny, sweet, green];
    setCurrentTheme(themeArray[getRandomInt(0, 4)] || green);
  }, []);

  const createGameData = useCallback<VoidFunc<string[]>>(
    (keys) => {
      const gameData: IGameItem[] = [];
      let sortedKeys: string[] = [];
      if (gameMode === GameMode.INCREASE) {
        sortedKeys = keys.sort((a, b) => a.localeCompare(b));
      } else {
        sortedKeys = keys.sort((a, b) => b.localeCompare(a));
      }

      keys.map((elem, i) => {
        gameData.push({
          id: i,
          fullfield: elem === sortedKeys[0],
          value: elem,
        });
        setGameItemsData(gameData);
      });
    },
    [gameMode],
  );

  const createBodyData = useCallback<VoidFunc<IGameItem[]>>(
    (data) => {
      let sortedData: IGameItem[] = [];
      if (gameMode === GameMode.INCREASE) {
        sortedData = data.sort((a, b) => a.value.localeCompare(b.value));
      } else {
        sortedData = data.sort((a, b) => b.value.localeCompare(a.value));
      }
      setPanelItemsData(sortedData);

      const filteredData = data.filter((elem) => elem.id !== sortedData[0].id);
      setBodyItemsData(filteredData);
    },
    [gameMode],
  );

  const createKeys = useCallback<CreateKeysType>((count, value) => {
    switch (Number.isNaN(Number(value))) {
      case true: {
        const result: string[] = [];

        while (result.length <= count) {
          const key = letters[getRandomInt(0, 32)];
          if (!result.includes(key)) {
            result.push(key);
          }
        }

        return result;
      }

      case false: {
        const result: string[] = [];

        while (result.length <= count) {
          const key = getRandomInt(
            keysSchema[value].min,
            keysSchema[value].max,
          ).toString();
          if (!result.includes(key)) {
            result.push(key);
          }
        }

        return result;
      }

      default:
        return [];
    }
  }, []);

  const dropItem = useCallback<VoidFunc<string>>(
    (value) => {
      if (gameItemsData) {
        const changedGameItemsData = gameItemsData.map((elem) => {
          if (elem.value === value) {
            return { ...elem, fullfield: true };
          }
          return elem;
        });
        setGameItemsData(changedGameItemsData);
      }
    },
    [gameItemsData],
  );

  const startGame = useCallback<EventFunc<MouseEvent>>(() => {
    setRandomTheme();
    createGameData(createKeys(Number(countItem), valueRange));
    setShowMenu(false);
    setShowBody(true);
  }, [countItem, valueRange, setRandomTheme, createGameData, createKeys]);

  const goToMenu = useCallback<EventFunc<MouseEvent>>(() => {
    setGameItemsData(null);
    setBodyItemsData([]);
    setPanelItemsData([]);
    setShowBody(false);
    setShowMenu(true);
    setShowPopup(false);
  }, []);

  const checkResult = useCallback<CheckResultType>(
    (data) => data.every((elem) => elem.fullfield),
    [],
  );

  useEffect(() => {
    if (gameItemsData) {
      createBodyData(gameItemsData);
    }
  }, [gameItemsData, createBodyData]);

  useEffect(() => {
    if (gameItemsData && checkResult(gameItemsData)) {
      setShowPopup(true);
    }
  }, [gameItemsData, checkResult]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GameWrap>
        <Menu
          showMenu={showMenu}
          gameMode={gameMode}
          setCountItem={setCountItem}
          setValueRange={setValueRange}
          setGameMode={setGameMode}
          startGame={startGame}
        />
        <Body
          dataBody={bodyItemsData}
          dataPanel={panelItemsData}
          showBody={showBody}
          dropItem={dropItem}
        />
        <WinPopup
          showPopup={showPopup}
          goToMenu={goToMenu}
        />
      </GameWrap>
    </ThemeProvider>
  );
};

export default Game;
