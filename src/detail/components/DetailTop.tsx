import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Arrow from "./Arrow";

interface DetailTopProps {
  title: string;
  writerImg: string;
  writerName: string;
  writeDate: string;
}

const DetailTop: React.FC<DetailTopProps> = ({
  title,
  writerImg,
  writerName,
  writeDate,
}) => {
  return (
    <DetailTopWrap>
      <BtnBack to={"/"}>
        <Arrow />
      </BtnBack>
      <h1>{title}</h1>
      <WriterInfo>
        <img src={writerImg} alt={writerName} />
        <WriterName>{writerName}</WriterName>
        <WriterDate>{writeDate}</WriterDate>
      </WriterInfo>
    </DetailTopWrap>
  );
};
const DetailTopWrap = styled.div`
  padding: 20px 0;
  border-bottom: 3px solid #f2f2f2;
  h1 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 36px;
    line-height: 126.5%;
    letter-spacing: -0.005em;
    color: #000;
    overflow-wrap: break-word;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    border: none;
    background: rgb(249, 249, 249);
    h1 {
      margin-top: 20px;
      font-size: 20px;
      margin-bottom: 8px;
      text-align: center;
    }
  }
`;

const BtnBack = styled(Link)`
  width: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 12px;
  img {
    width: 40px;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
    gap: 0 5px;
    img {
      width: 30px;
    }
  }
`;

const WriterName = styled.span`
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const WriterDate = styled.span`
  font-size: 18px;
  color: #717171;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export default DetailTop;
