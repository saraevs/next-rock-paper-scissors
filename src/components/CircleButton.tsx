import React from "react";
import { Option } from "../types";
import { Circle } from "./Circle";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
`;

type CircleButtonProps = {
  option: Option;
  setChosenOption: (option: Option) => void;
};

export const CircleButton: React.FC<CircleButtonProps> = ({
  option,
  setChosenOption,
}) => {
  return (
    <StyledButton
      onClick={(e) => {
        setChosenOption(option);
        e.stopPropagation();
      }}
    >
      <Circle option={option} />
    </StyledButton>
  );
};
