import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 30px;
  color: #fff;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

type RulesButtonProps = {};

export const RulesButton: React.FC<RulesButtonProps> = ({}) => {
  return <StyledButton onClick={() => {}}>RULES</StyledButton>;
};
