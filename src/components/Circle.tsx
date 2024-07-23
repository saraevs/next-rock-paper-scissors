import React from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { Option } from "../types";
import {
  ICON_WIDTH,
  CIRCLE_WIDTH,
  MOBILE_CIRCLE_WIDTH,
  MOBILE_SCREEN_WIDTH_PX,
} from "../constants";

const StyledCircle = styled.div<{
  $color1: string;
  $color2: string;
  $color3: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CIRCLE_WIDTH}px;
  height: ${CIRCLE_WIDTH}px;
  border-radius: 50%;
  background: conic-gradient(#fff 0 0) padding-box,
    linear-gradient(${(props) => props.$color1}, ${(props) => props.$color2})
      border-box;
  border: 14px solid #0000;
  box-shadow: inset 0 6px 1px 0 #bcbfce, 0 6px 1px 0 ${(props) => props.$color3};
  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: ${MOBILE_CIRCLE_WIDTH}px;
    height: ${MOBILE_CIRCLE_WIDTH}px;
  }
`;

type CircleProps = {
  option: Option;
};

export const Circle: React.FC<CircleProps> = ({ option }) => {
  return (
    <StyledCircle
      $color1={option.color1}
      $color2={option.color2}
      $color3={option.color3}
    >
      <Image
        src={option.icon}
        alt={option.title}
        width={ICON_WIDTH}
        height={ICON_WIDTH}
      />
    </StyledCircle>
  );
};
