import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/Datepicker.css";
import styled from "styled-components";

const Datepicker: React.FC = () => {
  const [selectDate, setSelectDate] = useState<Date | null>(null);

  return (
    <li>
      <Datediv>
        <Datelabel>모집 마감일</Datelabel>
        <ReactDatePicker
          selected={selectDate as Date}
          onChange={(date: Date | null) => setSelectDate(date)}
          className="custom-datepicker"
        />
      </Datediv>
    </li>
  );
};

export default Datepicker;

const Datediv = styled.div`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Datelabel = styled.label`
    font-weight:bold;
`