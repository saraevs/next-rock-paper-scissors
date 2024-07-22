import React, { useState } from "react";
import { CircleButton } from "./CircleButton";
import styled from "styled-components";
import { MOBILE_SCREEN_WIDTH_PX, options } from "../constants";
import { Option } from "../types";

const StyledOptions = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;

  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: 100%;
    gap: 20px;
  }
`;

const StyledCircle = styled(CircleButton)`
  flex: 1;
`;

type OptionsProps = {
  setChoice: (option: Option) => void;
};

export const Options: React.FC<OptionsProps> = ({ setChoice }) => {
  return (
    <StyledOptions>
      {options.map((o) => {
        return (
          <StyledCircle option={o} key={o.title} setChosenOption={setChoice} />
        );
      })}
    </StyledOptions>
  );
};
