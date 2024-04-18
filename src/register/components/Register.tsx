import React , {useState } from "react";
import styled from "styled-components";
import SelectComponent from "./Select";


const Register= () => {
  
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <RegisterDiv>
      <RegisterSecion>
        <RegisterSectionOne>
          <SpanSectionOne>1</SpanSectionOne>
          <FontSectionOne>프로젝트 기본 정보를 입력해주세요.</FontSectionOne>
        </RegisterSectionOne>
        <RegisterUl>
        <SelectComponent options={options} title={'스터디'} label={"모집 구분"}/>
        <SelectComponent options={options} title={'스터디'} label={"모집 인원"}/>
        </RegisterUl>
        <RegisterUl>
        <SelectComponent options={options} title={'스터디'} label={"진행 방식"}/>
        <SelectComponent options={options} title={'스터디'} label={"진행 기간"}/>
        </RegisterUl>
        <RegisterUl>
        <SelectComponent options={options} title={'스터디'} label={"기술 스택"}/>
        
        </RegisterUl>
      </RegisterSecion>
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

const RegisterSecion = styled.section``;

const RegisterSectionOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 16px;
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

const RegisterUl = styled.ul`
  display:flex;
  justify-content: space-between;
  margin-top: 40px;
  box-sizing: border-box;
  @media (max-width:300px){
    width:100%;
  }
`;

const CalendarWrapper = styled.div`
  position: relative;
`;

const CalendarWrapperContent = styled.div`
  cursor: pointer;
`;