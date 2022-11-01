import styled from "styled-components";
import img from "assets/images/game-background.jpg";

export const GameWrap = styled.main`
  width: 100%;
  min-width: 980px;
  height: 100vh;
  min-height: 710px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img.src});
  background-size: cover;
`;
