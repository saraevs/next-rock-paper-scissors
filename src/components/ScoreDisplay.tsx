import React from "react";
import styled from "styled-components";

const ScoreDisplayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 10px 45px;
  border-radius: 5px;
`;

const ScoreText = styled.span`
  font-size: 10pt;
  color: hsl(229, 64%, 46%);
`;

const ScoreNumber = styled.span`
  font-size: 38pt;
  color: hsl(229, 25%, 31%);
`;

type ScoreDisplayProps = {
  score: number;
};

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return (
    <ScoreDisplayBox>
      <ScoreText>SCORE</ScoreText>
      <ScoreNumber>{score}</ScoreNumber>
    </ScoreDisplayBox>
  );
};
