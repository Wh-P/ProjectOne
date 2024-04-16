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
  border: 1px solid red;
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
