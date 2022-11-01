import { FC, useCallback, useMemo } from "react";
import { DragDropContainer } from "react-drag-drop-container";
import {
  BodyItemStyled, BodyItemWrap, ImageWrap, ItemDecorImage, ItemImage, ItemText,
} from "./styled";
import { IBodyItemProps } from "./types";

const BodyItem: FC<IBodyItemProps> = ({
  id,
  img,
  value,
  top,
  left,
  fullfield,
  dropItem,
  decorImg,
}) => {
  const dragEnd = useCallback<VoidFunc<void>>(() => {
    const dragItem: NodeListOf<HTMLDivElement> =      document.querySelectorAll(".ddcontainerghost");
    if (dragItem) {
      setTimeout(() => {
        dragItem[id].style.top = top;
        dragItem[id].style.left = left;
      }, 100);
    }
  }, [id, left, top]);

  const onDrop = useCallback<VoidFunc<void>>(() => {
    dropItem(value);
  }, [value, dropItem]);

  const decorImage = useMemo(
    () => decorImg && (
    <ItemDecorImage
      src={decorImg.src}
      alt="decor"
      top={decorImg.top}
      left={decorImg.left}
    />
    ),
    [decorImg],
  );

  return (
    <BodyItemWrap
      top={top}
      left={left}
      hidden={fullfield}
    >
      {decorImage}
      <DragDropContainer
        onDrop={onDrop}
        onDragEnd={dragEnd}
        noDragging={fullfield}
        targetKey={`order_${value}`}
      >
        <BodyItemStyled img={img}>
          <ImageWrap>
            <ItemImage
              src={img}
              alt="back"
            />
          </ImageWrap>
          <ItemText>{value}</ItemText>
        </BodyItemStyled>
      </DragDropContainer>
    </BodyItemWrap>
  );
};

export default BodyItem;
