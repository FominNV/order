import { FC } from "react";
import { DropTarget } from "react-drag-drop-container";
import { useTheme } from "styled-components";
import {
  ImageWrap,
  ItemImage,
  ItemText,
  PanelSlotItem,
  PanelSlotStyled,
} from "./styled";
import { IPanelSlotProps } from "./types";

const PanelSlot: FC<IPanelSlotProps> = ({ fullfield, value }) => {
  const theme = useTheme();

  return (
    <DropTarget targetKey={`order_${value}`}>
      <PanelSlotStyled>
        <PanelSlotItem fullfield={fullfield}>
          <ImageWrap>
            <ItemImage
              src={theme.panel.slot}
              alt="back"
            />
          </ImageWrap>
          <ItemText>{value}</ItemText>
        </PanelSlotItem>
      </PanelSlotStyled>
    </DropTarget>
  );
};

export default PanelSlot;
