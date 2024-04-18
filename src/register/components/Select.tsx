import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import './Select.css'
type Option = {
  value: string;
  label: string;
};

type DropDownProps = {
  options: Option[];
  title: string;
  label: string;
};

const MySelect: React.FC<DropDownProps> = ({ options, title, label }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (selectedOption: Option | null) => {
    setSelectedOption(selectedOption);
  };



  return (
    <Li>
      <LiFontSize>{label}</LiFontSize>
      <SelectDiv>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={`${title.toLowerCase()}`}
        className="select-custom"
      />
      </SelectDiv>
    </Li>
  );
};

export default MySelect;

const Li = styled.li`
  box-sizing: border-box;
  width: 480px;
  height:56px;
  @media (max-width: 768px){
    width:100%;
  }
`;

const LiFontSize = styled.label`
  font-weight: bold;
  margin-bottom 5px;
`;

const SelectDiv = styled.div`
  margin:10px 0px;
`
