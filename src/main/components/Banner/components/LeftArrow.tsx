import React from "react";
import styled from "styled-components";

const LeftArrow: React.FC<{ index: number; onClick: any }> = (props) => {
  return (
    <LeftArrowWrap onClick={props.onClick}>
      <img
        src="https://holaworld.io/images/banner/banner-arrowLeft.png"
        alt="left-arrow"
      />
      <div>{props.index}</div>
    </LeftArrowWrap>
  );
};

export default LeftArrow;

export const LeftArrowWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  img {
    width: 16px;
    height: 16px;
  }
`;
