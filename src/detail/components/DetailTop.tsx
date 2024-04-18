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
`;

const BtnBack = styled(Link)`
  width: 30px;
`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 12px;
  img {
    width: 40px;
  }
`;

const WriterName = styled.span`
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
`;

const WriterDate = styled.span`
  font-size: 18px;
  color: #717171;
`;

export default DetailTop;
