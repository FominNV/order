import styled from "styled-components";

export const PanelStyled = styled.div`
  width: fit-content;
  height: 230px;
  position: relative;
  display: flex;
  column-gap: 4px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding:  0 30px;
  background-size: 100%;
  z-index: 2;
`;

export const ImageBack = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
