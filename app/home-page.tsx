"use client";
import styled from "styled-components";
import { Heading } from "@/src/components/Heading";
import { CircleLayout } from "@/src/components/CircleLayout";
import { MOBILE_SCREEN_WIDTH_PX } from "@/src/constants";

const Container = styled.div`
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
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

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: 100%;
  }
`;

export default function HomePage({}) {
  return (
    <Container>
      <Heading />
      <StyledFlex>
        <CircleLayout />
      </StyledFlex>
    </Container>
  );
}
