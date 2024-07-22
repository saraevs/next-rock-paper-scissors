import React from "react";
import styled from "styled-components";
import logo from "public/images/logo.svg";
import Image from "next/image";
import { ScoreDisplay } from "./ScoreDisplay";
import { MOBILE_SCREEN_WIDTH_PX } from "../constants";

const StyledImage = styled(Image)`
  height: 100%;
`;

const HeaderFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  padding: 20px 30px;
  margin: 0;
  width: 600px;

  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: 100%;
  }
`;

type HeadingProps = {
  score: number;
};

export const Heading: React.FC<HeadingProps> = ({ score }) => {
  return (
    <HeaderFlex>
      <StyledHeader>
        <StyledImage src={logo} alt="Rock, Paper, Scissors" />
        <ScoreDisplay score={score} />
      </StyledHeader>
    </HeaderFlex>
  );
};
