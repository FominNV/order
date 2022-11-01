import { FC, ReactNode, useMemo } from "react";
import Panel from "components/Panel";
import BodyItem from "components/BodyItem";
import { useTheme } from "styled-components";
import { BodyWrap, ImageDecorLeft, ImageDecorRight } from "./styled";
import { IBodyProps } from "./types";
import { dataBodyItems } from "./data";

const Body: FC<IBodyProps> = ({
  showBody, dataBody, dataPanel, dropItem,
}) => {
  const theme = useTheme() as IGameTheme;

  const bodyItems = useMemo<ReactNode>(
    () => dataBody.map((elem, i) => (
      <BodyItem
        key={`body_item_${i}`}
        id={i}
        img={theme.body.items[i]}
        value={elem.value}
        top={dataBodyItems[i].top}
        left={dataBodyItems[i].left}
        fullfield={elem.fullfield}
        dropItem={dropItem}
        decorImg={theme.itemsDecor && Object.values(theme.itemsDecor)[i]}
      />
    )),
    [dataBody, theme.body.items, theme.itemsDecor, dropItem],
  );

  return (
    <BodyWrap showBody={showBody}>
      <ImageDecorLeft
        src={theme.body.decor.left}
        alt="decor"
      />
      <ImageDecorRight
        src={theme.body.decor.right}
        alt="decor"
      />
      {bodyItems}
      <Panel data={dataPanel} />
    </BodyWrap>
  );
};

export default Body;
