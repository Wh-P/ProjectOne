import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import HeaderAlarmDropBar from "./HeaderAlarmDropBar";

type AlarmDropBarProps = {
  alarmDropBar: boolean;
  setAlarmDropBar: Dispatch<SetStateAction<boolean>>;
  setMypageDropBar: Dispatch<SetStateAction<boolean>>;
};

const HeaderNavBarAlarm: React.FC<AlarmDropBarProps> = (props) => {
  return (
    <HeaderNavBarAlarmWrap
      onClick={() => {
        props.setAlarmDropBar(!props.alarmDropBar);
        props.setMypageDropBar(false);
      }}
    >
      <img src="https://holaworld.io/images/info/notification.svg" />
      {props.alarmDropBar && <HeaderAlarmDropBar />}
    </HeaderNavBarAlarmWrap>
  );
};

export default HeaderNavBarAlarm;

const HeaderNavBarAlarmWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
