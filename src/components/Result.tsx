import React, { useState } from "react";
import { Option } from "../types";
import styled from "styled-components";
import { Circle } from "./Circle";
import { options } from "../constants";

const FlexRow = styled.div`
  display: flex;
  gap: 72px;
`;

const ChoiceHeading = styled.span`
  font-size: 14pt;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const selectRandomOption = () => {
  return options[Math.floor(Math.random() * options.length)];
};

type ResultProps = {
  userChoice: Option;
};

export const Result: React.FC<ResultProps> = ({ userChoice }) => {
  const [houseChoice] = useState<Option>(selectRandomOption());

  return (
    <FlexRow>
      <div>
        <ChoiceHeading>You Picked</ChoiceHeading>
        <Circle option={userChoice} />
      </div>
      <div>
        <ChoiceHeading>The House Picked</ChoiceHeading>
        <Circle option={houseChoice} />
      </div>
    </FlexRow>
  );
};
