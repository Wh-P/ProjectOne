import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

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

  const customStyles = {
    control: (provided:any) => ({
      ...provided,
      height: '100%',
    }),
  };
  

  return (
    <Selectdiv>
      <LiFontSize>{label}</LiFontSize>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={`${title.toLowerCase()}`}
        className="select-custom"
        styles={customStyles}
      />
      
    </Selectdiv>
  );
};

export default MySelect;

const Selectdiv = styled.div`
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  row-gap:10px;
  width: 49%;
  @media (max-width: 768px){
    width:100%;
  }
  .select-custom{
    height:60px !important;
  }
`;

const LiFontSize = styled.label`
  font-weight: bold;
  margin-top:15px;
`;
