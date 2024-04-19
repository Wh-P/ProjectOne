import React from "react";
import styled from "styled-components";

const MainHeader: React.FC = () => {
  const DownArrow = (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#cccccc"
        d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
      ></path>
    </svg>
  );
  return (
    <MainHeaderWrap>
      <MainCatagory>
        <div className="Select">전체</div>
        <div>프로젝트</div>
        <div>스터디</div>
      </MainCatagory>
      <MainFilter>
        <MainState>
          <MainStateDropFilter>
            <div>기술스택</div>
            {DownArrow}
          </MainStateDropFilter>
          <MainStateDropFilter>
            <div>포지션</div>
            {DownArrow}
          </MainStateDropFilter>
          <MainStateDropFilter>
            <div>진행방식</div>
            {DownArrow}
          </MainStateDropFilter>
          <MainStateButtonFilter>👋 내 북마크 보기</MainStateButtonFilter>
          <MainStateButtonFilter>👀 모집 중만 보기</MainStateButtonFilter>
        </MainState>
        <MainSearch>
          <img src="https://holaworld.io/images/info/search.png" />
          <input placeholder="제목, 글 내용을 검색해보세요." />
        </MainSearch>
      </MainFilter>
    </MainHeaderWrap>
  );
};

export default MainHeader;

const MainHeaderWrap = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  padding: 0px 20px;
`;

const MainCatagory = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  color: #868e96;
  div {
    margin-left: 0.5rem;
    margin-right: 1.5rem;
  }
  .Select {
    color: #444;
  }
`;

const MainFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainState = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MainStateDropFilter = styled.button`
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 10px;
  width: 140px;
  height: 38px;
  border: 1px solid rgb(227, 227, 227);
  color: rgb(100, 100, 100);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  border-radius: 36px;
  cursor: pointer;
`;

const MainStateButtonFilter = styled.button`
  display: flex;
  height: 38px;
  padding: 0px 22px;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  border: 1px solid rgb(227, 227, 227);
  color: rgb(100, 100, 100);
  background: rgb(255, 255, 255);
  font-weight: 500;
  cursor: pointer;
`;

const MainSearch = styled.div`
  display: flex;
  width: 300px;
  height: 34px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  border-radius: 36px;
  background: #f5f5f5;
  border: none;
  img {
    display: block;
    width: 18px;
    height: 18px;
  }
  input {
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    font-weight: 550;
    font-size: 16px;
    width: 100%;
  }
`;
