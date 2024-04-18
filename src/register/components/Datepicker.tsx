import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/Datepicker.css";
import styled from "styled-components";

const Datepicker: React.FC = () => {
  const [selectDate, setSelectDate] = useState<Date | null>(null);

  return (
    <Datediv>
        <Datelabel>모집 마감일</Datelabel>
        <ReactDatePicker
          selected={selectDate as Date}
          onChange={(date: Date | null) => setSelectDate(date)}
          className="custom-datepicker"
        />
    </Datediv>
  );
};

export default Datepicker;

const Datediv = styled.div`
  width: 49%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
       width: 100%;
     }
`;

const Datelabel = styled.label`
    font-weight:bold;
    margin-top:15px;
`