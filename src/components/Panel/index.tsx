import PanelSlot from "components/PanelSlot";
import { FC, useMemo, ReactNode } from "react";
import { useTheme } from "styled-components";
import { ImageBack, PanelStyled } from "./styled";
import { IPanelProps } from "./types";

const Panel: FC<IPanelProps> = ({ data }) => {
  const theme = useTheme();

  const panelSlots = useMemo<ReactNode>(
    () => data.map((elem, i) => (
      <PanelSlot
        key={`panel_slot_${i}`}
        fullfield={elem.fullfield}
        value={elem.value}
      />
    )),
    [data],
  );

  return (
    <PanelStyled>
      <ImageBack
        src={theme.panel.bg}
        alt="back"
      />
      {panelSlots}
    </PanelStyled>
  );
};

export default Panel;
