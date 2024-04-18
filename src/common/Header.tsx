import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AlarmDropBar from "./AlarmDropBar";
import MypageDropBar from "./MypageDropBar";

const Header: React.FC = () => {
  const [alarmDropBar, setalarmDropBar] = useState(false);
  const [mypageDropBar, setmypageDropBar] = useState(false);

  return (
    <HeaderWrap>
      <Logo>
        <Link to="/">
          <img src="https://holaworld.io/images/logo/new-logo.png" />
        </Link>
      </Logo>
      <NavBar>
        
        <Link to="/register">
          <button>새 글 쓰기</button>
        </Link>
        <NavBarAlarm
          onClick={() => {
            setalarmDropBar(!alarmDropBar);
            setmypageDropBar(false);
          }}
        >
          <img src="https://holaworld.io/images/info/notification.svg" />
          {alarmDropBar && <AlarmDropBar />}
        </NavBarAlarm>
        <NavBarIcon
          onClick={() => {
            setmypageDropBar(!mypageDropBar);
            setalarmDropBar(false);
          }}
        >
          <img src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" />
          <svg
            stroke-width="0"
            viewBox="0 0 24 24"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
          {mypageDropBar && <MypageDropBar />}
        </NavBarIcon>
      </NavBar>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  margin: auto;
  max-width: 1281px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 105px;
  img {
    width: 100%;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.125rem;
  gap: 30px;
  button {
    cursor: pointer;
  }
`;

const NavBarAlarm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const NavBarIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  > img {
    width: 32px;
    height: 32px;
  }
`;
