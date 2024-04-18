import React from "react";
import styled from "styled-components";

const RightArrow: React.FC<{ index: number; onClick: any }> = (props) => {
  const rightArrowNumHandler = (num: number) => {
    if (num === 3) {
      return num;
    } else {
      return num + 1;
    }
  };

  return (
    <RightArrowWrap onClick={props.onClick}>
      <div>{rightArrowNumHandler(props.index)}</div>
      <img
        src="https://holaworld.io/images/banner/banner-arrowRight.png"
        alt="right-arrow"
      />
    </RightArrowWrap>
  );
};

export default RightArrow;

export const RightArrowWrap = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  img {
    width: 16px;
    height: 16px;
  }
`;
