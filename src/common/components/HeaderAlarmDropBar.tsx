import React from "react";
import styled from "styled-components";

const HeaderAlarmDropBar: React.FC = () => {
  return (
    <AlarmDropBarWrap>
      <AlarmDropBarHeader>
        <div>읽지 않은 알림 (0)</div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </AlarmDropBarHeader>
      <AlarmDropBarContent>알림함이 비어있습니다.</AlarmDropBarContent>
    </AlarmDropBarWrap>
  );
};

export default HeaderAlarmDropBar;

const AlarmDropBarWrap = styled.div`
  cursor: default;
  width: 360px;
  min-height: 480px;
  max-height: 480px;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  margin-top: 16px;
  right: 12px;
  top: 100%;
`;

const AlarmDropBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  font-weight: 400;
  color: #000;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 0;
  border-bottom: 1px solid #d7e2eb;
`;

const AlarmDropBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #4a5275;
`;
