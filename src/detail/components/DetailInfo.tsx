import React from "react";
import styled from "styled-components";

const SampleInfoData = [
  {
    category: "모집 구분",
    value: "프로젝트",
  },
  {
    category: "진행 방식",
    value: "전체",
  },
  {
    category: "모집 인원",
    value: "1명",
  },
  {
    category: "시작 예정",
    value: "2024.04.25",
  },
  {
    category: "연락 방법",
    value: "오픈톡",
  },
  {
    category: "예상 기간",
    value: "기간 미정",
  },
  {
    category: "모집 분야",
    value: "프론트엔드",
  },
  {
    category: "사용 언어",
    value: "react",
  },
];

const DetailInfo: React.FC = () => {
  return (
    <InfoItemWrap>
      <InfoItemInner>
        {SampleInfoData.map((item, index) => (
          <InfoItem key={index}>
            <Category>{item.category}:</Category>
            <CategoryInfo>{item.value}</CategoryInfo>
          </InfoItem>
        ))}
      </InfoItemInner>
    </InfoItemWrap>
  );
};

const InfoItemWrap = styled.div`
  margin: 60px auto;
  @media screen and (max-width: 768px) {
    background: rgb(249, 249, 249);
    margin: auto;
    padding: 16px;
  }
`;

const InfoItemInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  row-gap: 24px;
  @media screen and (max-width: 768px) {
    width: 90%;

    row-gap: 8px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    background: #fff;
  }
`;

const InfoItem = styled.div`
  width: 50%;
  flex: 0 0 50%;
  display: flex;
`;

const Category = styled.strong`
  font-size: 1.2rem;
  color: #717171;
  margin-right: 36px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 10px;
  }
`;

const CategoryInfo = styled.strong`
  font-size: 1.2rem;
  color: #333;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default DetailInfo;
