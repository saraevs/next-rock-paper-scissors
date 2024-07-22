import React, { useState } from "react";
import { Circle } from "./Circle";
import styled from "styled-components";
import rockIcon from "public/images/icon-rock.svg";
import paperIcon from "public/images/icon-paper.svg";
import scissorsIcon from "public/images/icon-scissors.svg";
import { MOBILE_SCREEN_WIDTH_PX } from "../constants";
import { Option } from "../types";

const StyledOptions = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;

  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: 100%;
    gap: 70px;
  }
`;

const StyledCircle = styled(Circle)`
  flex: 1;
`;

type OptionsProps = {
  handleWin: () => void;
  setChoice: (option: Option) => void;
};

export const Options: React.FC<OptionsProps> = ({ handleWin, setChoice }) => {
  const options: Option[] = [
    {
      title: "Rock",
      icon: rockIcon,
      color1: "hsl(349, 71%, 52%)",
      color2: "hsl(349, 70%, 56%)",
    },
    {
      title: "Paper",
      icon: paperIcon,
      color1: "hsl(230, 89%, 62%)",
      color2: "hsl(230, 89%, 65%)",
    },
    {
      title: "Scissors",
      icon: scissorsIcon,
      color1: "hsl(39, 89%, 49%)",
      color2: "hsl(40, 84%, 53%)",
    },
  ];
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
