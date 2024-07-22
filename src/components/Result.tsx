import React, { useCallback, useEffect, useState } from "react";
import { Option, Outcome } from "../types";
import styled from "styled-components";
import { Circle } from "./Circle";
import { options } from "../constants";

const FlexRow = styled.div`
  display: flex;
  gap: 72px;
  color: #fff;
`;

const ChoiceHeading = styled.span`
  font-size: 14pt;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const StyledResult = styled.div`
  font-size: 28pt;
  padding-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

const StyledButton = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: 0;
  padding: 8px;
  width: 100%;
  font-size: 8pt;
`;

const selectRandomOption = () => {
  return options[Math.floor(Math.random() * options.length)];
};

const calculateResult = (userChoice: Option, houseChoice: Option): Outcome => {
  if (userChoice.beats === houseChoice.title) {
    return Outcome.youWin;
  }

  if (houseChoice.beats === userChoice.title) {
    return Outcome.houseWins;
  }

  return Outcome.draw;
};

type ResultProps = {
  userChoice: Option;
  handleUserWin: () => void;
  clearUserChoice: () => void;
};

export const Result: React.FC<ResultProps> = ({
  userChoice,
  handleUserWin,
  clearUserChoice,
}) => {
  const [houseChoice, setHouseChoice] = useState<Option>(selectRandomOption());

  const result = calculateResult(userChoice, houseChoice);

  useEffect(() => {
    if (result === Outcome.youWin) {
      handleUserWin();
    }
  }, [result]);

  return (
    <FlexRow>
      <div>
        <ChoiceHeading>You Picked</ChoiceHeading>
        <Circle option={userChoice} />
      </div>
      <StyledResult>
        {result}
        <StyledButton onClick={clearUserChoice}>PLAY AGAIN</StyledButton>
      </StyledResult>
      <div>
        <ChoiceHeading>The House Picked</ChoiceHeading>
        <Circle option={houseChoice} />
      </div>
    </FlexRow>
  );
};
