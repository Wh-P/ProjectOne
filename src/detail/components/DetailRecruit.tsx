import React from "react";
import styled from "styled-components";

const DetailRecruit: React.FC = () => {
  return (
    <DetailRecruitWrap>
      <Subject>
        <h2>프로젝트 소개</h2>
      </Subject>
      <Description>
        사이드 프로젝트로 시작해서 현재는 서비스 단계에 있습니다! <br />{" "}
        (이용했던 인원 1000명 이상, 실제 이용중인 인원 300여명) 이번에 인프라
        담당 할 개발자분이 합류하고, <br /> 프론트도 2명이 더 합류하면서
        백엔드로 참여할 인원도 한분 더 모집하려고 합니다. <br /> 커뮤니팅 성격을
        띄고 있는 서비스입니다. 어려움도 있겠지만 포폴용으로도 좋은 기회가 될 수
        있을거라고 생각해요.
        <br /> 프로젝트 경험이 있어야 하고, express로 진행합니다. 더 궁금하신
        내용은 오픈 톡방에서 설명드리겠습니다.
        <br /> <br /> <br />
        https://open.kakao.com/o/sCtGRvlg
      </Description>
    </DetailRecruitWrap>
  );
};

const DetailRecruitWrap = styled.div`
  @media screen and (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Subject = styled.div`
  h2 {
    margin: 0;
    color: #333;
    font-size: 26px;
    font-weight: 700;
    padding-bottom: 24px;
    border-bottom: 3px solid #f2f2f2;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      padding-bottom: 0;
      border: none;
    }
  }
`;

const Description = styled.p`
  width: 100%;
  margin: 40px auto 0;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.6;
  @media screen and (max-width: 768px) {
    font-weight: normal;
    font-size: 0.8rem;
    margin: 20px auto;
  }
`;

export default DetailRecruit;
