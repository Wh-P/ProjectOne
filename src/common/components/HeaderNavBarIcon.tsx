import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import HeaderMypageDropBar from "./HeaderMypageDropBar";

type MypageDropBarProps = {
  mypageDropBar: boolean;
  setAlarmDropBar: Dispatch<SetStateAction<boolean>>;
  setMypageDropBar: Dispatch<SetStateAction<boolean>>;
};

const HeaderNavBarIcon: React.FC<MypageDropBarProps> = (props) => {
  return (
    <HeaderNavBarIconWrap
      onClick={() => {
        props.setMypageDropBar(!props.mypageDropBar);
        props.setAlarmDropBar(false);
      }}
    >
      <img src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" />
      <svg
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="16px"
        width="16px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10l5 5 5-5z"></path>
      </svg>
      {props.mypageDropBar && <HeaderMypageDropBar />}
    </HeaderNavBarIconWrap>
  );
};

export default HeaderNavBarIcon;

const HeaderNavBarIconWrap = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  > img {
    width: 32px;
    height: 32px;
  }
`;
