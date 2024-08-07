"use client";
import styled from "styled-components";
import { Heading } from "@/src/components/Heading";
import { Options } from "@/src/components/Options";
import { useState } from "react";
import { Option } from "../src/types";
import { Result } from "@/src/components/Result";
import { MOBILE_SCREEN_WIDTH_PX } from "@/src/constants";
import { RulesModal } from "@/src/components/RulesModal";

const Container = styled.div`
  background-image: radial-gradient(
    at top,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    gap: 15px;
  }
`;

export default function HomePage({}) {
  const [currentScore, setCurrentScore] = useState(0);
  const [userChoice, setUserChoice] = useState<Option>();

  const handleUserWin = () => {
    setCurrentScore(currentScore + 1);
  };

  const clearUserChoice = () => {
    setUserChoice(undefined);
  };

  return (
    <Container>
      <Heading score={currentScore} />
      {!userChoice && <Options setChoice={setUserChoice} />}
      {userChoice && (
        <Result
          userChoice={userChoice}
          handleUserWin={handleUserWin}
          clearUserChoice={clearUserChoice}
        />
      )}
      <RulesModal />
    </Container>
  );
}
