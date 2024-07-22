import React from "react";
import { Option } from "../types";
import styled from "styled-components";
import { Circle } from "./Circle";

const UserChoiceHeading = styled.span`
  font-size: 14pt;
  color: #fff;
`;

type ResultProps = {
  userChoice: Option;
};

export const Result: React.FC<ResultProps> = ({ userChoice }) => {
  return (
    <>
      <UserChoiceHeading>You Picked</UserChoiceHeading>
      <Circle option={userChoice} />
    </>
  );
};
