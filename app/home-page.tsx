"use client";
import styled from "styled-components";
import { Heading } from "../src/components/Heading";
import { Metadata } from "next";

const Container = styled.div`
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
`;

export default function HomePage({}) {
  return (
    <Container>
      <Heading />
    </Container>
  );
}
