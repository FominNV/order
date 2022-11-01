import { FC, useCallback } from "react";
import { MenuButtonStyled } from "./styled";
import { IMenuButtonProps, SetGameMode } from "./types";

const MenuButton: FC<IMenuButtonProps> = ({
  name,
  gameMode,
  active,
  setState,
}) => {
  const onClickHandler = useCallback<SetGameMode>(() => {
    setState(gameMode);
  }, [gameMode, setState]);

  return (
    <MenuButtonStyled
      active={active}
      onClick={onClickHandler}
    >
      {name}
    </MenuButtonStyled>
  );
};

export default MenuButton;
