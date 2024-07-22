import React from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { Option } from "../types";
import {
  INNER_CIRCLE_WIDTH,
  MOBILE_INNER_CIRCLE_WIDTH,
  MOBILE_SCREEN_WIDTH_PX,
} from "../constants";

const OuterCircle = styled.div<{ $color1: string; $color2: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${INNER_CIRCLE_WIDTH + INNER_CIRCLE_WIDTH / 4}px;
  height: ${INNER_CIRCLE_WIDTH + INNER_CIRCLE_WIDTH / 4}px;
  border-radius: 50%;
  background-image: radial-gradient(
    ${(props) => props.$color1},
    ${(props) => props.$color2}
  );
  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: ${MOBILE_INNER_CIRCLE_WIDTH + MOBILE_INNER_CIRCLE_WIDTH / 4}px;
    height: ${MOBILE_INNER_CIRCLE_WIDTH + MOBILE_INNER_CIRCLE_WIDTH / 4}px;
  }
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${INNER_CIRCLE_WIDTH}px;
  height: ${INNER_CIRCLE_WIDTH}px;
  border-radius: 50%;
  background-color: #fff;
  @media (max-width: ${MOBILE_SCREEN_WIDTH_PX}) {
    width: ${MOBILE_INNER_CIRCLE_WIDTH}px;
    height: ${MOBILE_INNER_CIRCLE_WIDTH}px;
  }
`;

type CircleProps = {
  option: Option;
};

export const Circle: React.FC<CircleProps> = ({ option }) => {
  return (
    <OuterCircle $color1={option.color1} $color2={option.color2}>
      <InnerCircle>
        <Image src={option.icon} alt={option.title} width={70} height={70} />
      </InnerCircle>
    </OuterCircle>
  );
};
