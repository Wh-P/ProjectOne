import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderNavBarIcon from "./components/HeaderNavBarIcon";
import HeaderNavBarAlarm from "./components/HeaderNavBarAlarm";

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
        <HeaderNavBarAlarm
          alarmDropBar={alarmDropBar}
          setAlarmDropBar={setalarmDropBar}
          setMypageDropBar={setmypageDropBar}
        />
        <HeaderNavBarIcon
          mypageDropBar={mypageDropBar}
          setAlarmDropBar={setalarmDropBar}
          setMypageDropBar={setmypageDropBar}
        />
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
  height: 85px;
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
  font-weight: 800;
  font-size: 1.125rem;
  gap: 30px;
  button {
    cursor: pointer;
  }
`;
