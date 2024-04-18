import React from "react";
import styled from "styled-components";

const DetailComments: React.FC = () => {
  return (
    <DetailCommentsWrap>
      <Top>
        <strong>댓글</strong> <span>0</span>
      </Top>
      <Content>
        <img src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" />
        <textarea name="" id="" cols={10} rows={10}></textarea>
      </Content>
      <Bottom>
        <BtnWrite>댓글등록</BtnWrite>
      </Bottom>
    </DetailCommentsWrap>
  );
};

const DetailCommentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 50px;
  }
`;

const Top = styled.div`
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  strong {
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  grid-gap: 15px;
  gap: 15px;
  > img {
    display: block;
    width: 44px;
    height: 44px;
    @media screen and (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
  > textarea {
    border-radius: 30px;
    border: 3px solid #f2f2f2;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 2px solid #e1e1e1;
    width: 100%;
    min-height: 100px;
    margin-bottom: 10px;
    resize: none;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0 24px;
  @media screen and (max-width: 768px) {
    margin: 8px 0 12px;
  }
`;
const BtnWrite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  background: #333;
  border-radius: 50px;
  font-weight: 700;
  color: #fff;
  font-size: 1.25rem;
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
    font-size: 0.8rem;
  }
`;
export default DetailComments;
