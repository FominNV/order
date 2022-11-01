import { FC, useMemo, ReactNode } from "react";
import MenuRange from "components/MenuRange";
import MenuButton from "components/MenuButton";
import {
  MenuContent,
  MenuWrap,
  MenuRangesWrap,
  MenuButtonsWrap,
  GameStartButton,
} from "./styled";
import { dataMenuButtons, dataMenuRanges } from "./data";
import { IMenuProps } from "./types";

const Menu: FC<IMenuProps> = ({
  showMenu,
  gameMode,
  setCountItem,
  setValueRange,
  setGameMode,
  startGame,
}) => {
  const menuRanges = useMemo<ReactNode>(() => {
    const setStatesArray = [setCountItem, setValueRange];

    return dataMenuRanges.map((elem, i) => (
      <MenuRange
        key={`menu_range_${i}`}
        title={elem.title}
        dotCount={elem.dotCount}
        dataMarks={elem.dataMarks}
        width={elem.width}
        setState={setStatesArray[i]}
      />
    ));
  }, [setCountItem, setValueRange]);

  const menuButtons = useMemo(
    () => dataMenuButtons.map((elem, i) => (
      <MenuButton
        key={`menu_button_${i}`}
        name={elem.name}
        gameMode={elem.gameMode}
        active={elem.gameMode === gameMode}
        setState={setGameMode}
      />
    )),
    [gameMode, setGameMode],
  );

  return (
    <MenuWrap showMenu={showMenu}>
      <MenuContent>
        <MenuRangesWrap>{menuRanges}</MenuRangesWrap>
        <MenuButtonsWrap>{menuButtons}</MenuButtonsWrap>
        <GameStartButton onClick={startGame}>Играть</GameStartButton>
      </MenuContent>
    </MenuWrap>
  );
};

export default Menu;
