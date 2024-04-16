import React from "react";
import styled from "styled-components";

import Header from "../common/Header";
import DetailTop from "./components/DetailTop";

const Detail: React.FC = () => {
  const DetailTopProps = {
    title: "[React]프로젝트 백엔드 팀원 한분 모집합니다!",
    writerImg:
      "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG",
    writerName: "캐럿",
    writeDate: "2024.04.11",
  };

  return (
    <>
      <Header />
      <DetailWrap>
        <DetailTop {...DetailTopProps} />
      </DetailWrap>
    </>
  );
};

const DetailWrap = styled.div`
  max-width: 852px;
  margin: 0 auto;
`;
export default Detail;
