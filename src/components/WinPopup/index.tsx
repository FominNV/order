import { FC, useMemo } from "react";
import win from "assets/images/win.png";
import star from "assets/images/star.png";
import Image from "next/image";
import {
  StarImage,
  WinPopupBackground, WinPopupButton, WinPopupContent, WinPopupText, WinPopupWrap,
} from "./styled";
import { IWinPopupProps } from "./types";
import { dataStarImages } from "./data";

const WinPopup: FC<IWinPopupProps> = ({ showPopup, goToMenu }) => {
  const stars = useMemo(
    () => dataStarImages.map((elem, i) => (
      <StarImage
        key={`popup_star_image_${i}`}
        src={star.src}
        alt="star"
        width={elem.width}
        top={elem.top}
        right={elem.right}
        bottom={elem.bottom}
        left={elem.left}
      />
    )),
    [],
  );

  return (
    <WinPopupBackground showPopup={showPopup}>
      <WinPopupWrap>
        <WinPopupContent>
          <Image
            src={win}
            alt="win"
          />
          <WinPopupText>Молодец! Ты успешно справился с заданием!</WinPopupText>
          <WinPopupButton onClick={goToMenu}>Заново</WinPopupButton>
        </WinPopupContent>
        {stars}
      </WinPopupWrap>
    </WinPopupBackground>
  );
};

export default WinPopup;
