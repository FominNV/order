import {
  FC, useMemo, useCallback, ReactNode,
} from "react";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "styles/components/Range.module.scss";
import {
  MenuRangeTitle,
  MenuRangeWrap,
  handleStyle,
  MarkItem,
  MarksWrap,
  railStyle,
  RangeWrap,
  trackStyle,
} from "./styled";
import { IMenuRangeProps, OnChangeRangeType } from "./types";

const MenuRange: FC<IMenuRangeProps> = ({
  title, width, dotCount, dataMarks, setState,
}) => {
  const marks = useMemo<ReactNode>(() => (
    dataMarks.map((elem, i) => <MarkItem key={`mark_iten_${i}`}>{elem}</MarkItem>)
  ), [dataMarks]);

  const onChangeRange = useCallback<OnChangeRangeType>(
    (value) => {
      if (typeof value === "number") {
        setState(dataMarks[value - 1]);
      }
    },
    [dataMarks, setState],
  );

  return (
    <MenuRangeWrap>
      <MenuRangeTitle>{title}</MenuRangeTitle>
      <MarksWrap width={width}>{marks}</MarksWrap>
      <RangeWrap width={width}>
        <Range
          className={styles.Range}
          min={1}
          max={dotCount}
          step={1}
          defaultValue={1}
          trackStyle={trackStyle}
          railStyle={railStyle}
          handleStyle={handleStyle}
          onChange={onChangeRange}
        />
      </RangeWrap>
    </MenuRangeWrap>
  );
};

export default MenuRange;
