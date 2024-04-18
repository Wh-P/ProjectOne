import React, { useState } from "react";
import styled from "styled-components";
import SelectComponent from "./Select";
import Datepicker from "./Datepicker";

const Register = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <RegisterDiv>
      <RegisterSectionOne>
        <SpanSectionOne>1</SpanSectionOne>
        <FontSectionOne>프로젝트 기본 정보를 입력해주세요.</FontSectionOne>
      </RegisterSectionOne>
      <RegisterDivs>
        <SelectComponent
          options={options}
          title={"스터디"}
          label={"모집 구분"}
        />
        <SelectComponent
          options={options}
          title={"스터디"}
          label={"모집 인원"}
        />
      </RegisterDivs>
      <RegisterDivs>
        <SelectComponent
          options={options}
          title={"스터디"}
          label={"진행 방식"}
        />
        <SelectComponent
          options={options}
          title={"스터디"}
          label={"진행 기간"}
        />
      </RegisterDivs>
      <RegisterDivs>
        <SelectComponent
          options={options}
          title={"스터디"}
          label={"기술 스택"}
        />
        <Datepicker />
      </RegisterDivs>
      <RegisterDivs>
        <SelectComponent
          options={options}
          title={"스터디"}
          label={"모집 포지션"}
        />
        
          <SelectComponent
            options={options}
            title={"스터디"}
            label={"연락 방법"}
          />
          <StyledInput type="text" placeholder="오픈 카톡방 링크" />
        
      </RegisterDivs>

      <RegisterSectionTwo>
        <SpanSectionOne>2</SpanSectionOne>
        <FontSectionOne>프로젝트 기본 정보를 입력해주세요.</FontSectionOne>
      </RegisterSectionTwo>
      <DraftSection>
        <DraftSectionLabel>제목</DraftSectionLabel>
        <DraftSectionInput type="text" placeholder="글 제목을 입력해주세요!"></DraftSectionInput>
      </DraftSection>
    </RegisterDiv>
  );
};

export default Register;

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 16px;
  position: realtive;
  margin: 0px auto;
  max-width: 1040px;
`;

const RegisterSectionOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  margin-top:10px;
  margin-bottom: 36px;
  border-bottom: 2.4px solid rgb(242, 242, 242);
`;

const SpanSectionOne = styled.span`
  width: 28px;
  height: 28px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border-radius: 50%;
  background-color: rgb(255, 205, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FontSectionOne = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.05em;
`;

const RegisterDivs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    margin:20px;
  }
`;

const RegisterSectionTwo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  margin-top: 60px;
  margin-bottom: 36px;
  border-bottom: 2.4px solid rgb(242, 242, 242);
`;

const StyledInput = styled.input`
  width: 49%;
  height: 60px;
  margin-top:20px;
  margin-left: auto;
  padding: 2px 8px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  @media (max-width: 768px) {
    width: calc(100%);
  }
`;

const DraftSection = styled.section`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const DraftSectionLabel = styled.label`
  font-weight:bold;
  margin-bottom:5px;
`;

const DraftSectionInput =styled.input`
  width:100%;
  height:56px;
  margin:0px 8px 0px 0px;
  padding: 0px 52px 0px 16px;
  border: 1px solid rgb(224, 224, 224);
  border-radius:5px;
`