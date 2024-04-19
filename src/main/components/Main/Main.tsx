import React from "react";
import styled from "styled-components";
import MainHeader from "./components/MainHeader";
import MainContents from "./components/MainContents";

const Main: React.FC = () => {
  return (
    <MainWrap>
      <MainHeader />
      <MainContents />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  min-height: 60rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
