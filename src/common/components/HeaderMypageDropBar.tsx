import React from "react";
import styled from "styled-components";

const HeaderMypageDropBar: React.FC = () => {
  const myPageText = ["내 작성글", "내 관심글", "설정", "로그아웃"];

  return (
    <MypageDropBarWrap>
      <MypageDropBarUl>
        {myPageText.map((text) => (
          <MypageDropBarList>{text}</MypageDropBarList>
        ))}
      </MypageDropBarUl>
    </MypageDropBarWrap>
  );
};

export default HeaderMypageDropBar;

const MypageDropBarWrap = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  right: 0;
`;

const MypageDropBarUl = styled.div`
  position: relative;
  z-index: 7;
  width: 12rem;
  background: #fff;
  border: 0.5px solid rgba(37, 53, 98, 0.1);
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  list-style: none;
`;

const MypageDropBarList = styled.div`
  padding: 0.75rem 1rem;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
`;
