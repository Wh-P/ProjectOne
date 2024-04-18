import React, { useState } from "react";
import styled from "styled-components";
type Option = {
  value: string;
  label: string;
};

type dropDownProps = {
  options: Option[];
  title: string;
};

const Drop: React.FC<dropDownProps> = ({ options, title }) => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [selectItems, setSelectItems] = useState<Option | null>(null);

  const toggleDropdown = () => {
    setIsopen(!isOpen);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectItems(option);
    setIsopen(false);
  };
  return (
    <>
    <Dropbox>
        <DropDiv>
      <DropboxOnclick onClick={toggleDropdown}>
        {selectItems ? selectItems.label : title}
        <DropDown>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
          </DropDown>
      </DropboxOnclick>
      </DropDiv>
      {isOpen && (
        <div>
          {options.map((options) => (
            <div
              key={options.value}
              onClick={() => handleOptionSelect(options)}
            >
              {options.label}
            </div>
          ))}
        </div>
      )}
    </Dropbox>
    </>
  );
};

export default Drop;
const Dropbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
`;

const DropDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
`;

const DropboxOnclick = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border:1px solid rgb(204, 204, 204);
  box-sizing: border-box;
  width:350px;
`;

const DropDown = styled.div`
  width: 37px;
  height: 54px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left:auto;
`;
