import React from "react";
import styled from "styled-components";
import logo from "public/images/logo.svg";
import Image from "next/image";
import { ScoreDisplay } from "./ScoreDisplay";
import { MOBILE_SCREEN_WIDTH_PX } from "../constants";

const HeaderFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border: 1px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  padding: 16px;
  margin: 0;
  width: 400px;

  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: 100%;
  }
`;

export const Heading: React.FC = () => {
  return (
    <HeaderFlex>
      <StyledHeader>
        <Image src={logo} alt="Rock, Paper, Scissors" width={100} />
        <ScoreDisplay />
      </StyledHeader>
    </HeaderFlex>
  );
};
