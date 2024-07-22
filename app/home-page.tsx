"use client";
import styled from "styled-components";
import { Heading } from "@/src/components/Heading";
import { Options } from "@/src/components/Options";
import { useState } from "react";
import { Option } from "../src/types";
import { Result } from "@/src/components/Result";

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
`;

export default function HomePage({}) {
  const [currentScore, setCurrentScore] = useState(0);
  const [userChoice, setUserChoice] = useState<Option>();

  const handleWin = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <Container>
      <Heading score={currentScore} />
      {!userChoice && <Options setChoice={setUserChoice} />}
      {userChoice && <Result userChoice={userChoice} />}
    </Container>
  );
}
