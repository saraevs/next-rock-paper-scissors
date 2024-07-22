import React from "react";
import Image from "next/image";
import { styled } from "styled-components";
import { Option } from "../types";
import { INNER_CIRCLE_WIDTH } from "../constants";

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
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${INNER_CIRCLE_WIDTH}px;
  height: ${INNER_CIRCLE_WIDTH}px;
  border-radius: 50%;
  background-color: #fff;
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
