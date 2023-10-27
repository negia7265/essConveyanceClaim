import React, { useState } from "react";
import styled from "styled-components";
const DropdownContainer = styled.div`
  width: 100%;
  height: 50px;
  user-select: none;
  position: relative;
  border:0.5px solid black;
  background-color: rgba(255, 255, 255, 0.07);
`;

const DropdownButton = styled.div`
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.07);
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: white;
  width: 95%;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: grey;
  }
`;

function Dropdown({ selected, setSelected,options }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsActive(!isActive)}>
        {selected}
        <span >
          <img src='/caretDown.svg'/>
        </span>
      </DropdownButton>
      {isActive && (
        <DropdownContent>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={(e) => {
                e.preventDefault()
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;