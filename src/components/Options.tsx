import React from "react";
import { CircleButton } from "./CircleButton";
import styled from "styled-components";
import { MOBILE_SCREEN_WIDTH_PX, options } from "../constants";
import { Option } from "../types";
import backgroundTriangle from "public/images/bg-triangle.svg";

const StyledOptions = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
  background-image: url(${backgroundTriangle.src});
  background-repeat: no-repeat;
  background-position: center;

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
