import React from "react";
import Image from "next/image";
import { styled } from "styled-components";

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
`;

const OuterCircle = styled.div<{ color1: string; color2: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: radial-gradient(
    ${(props) => props.color1},
    ${(props) => props.color2}
  );
`;

type CircleProps = {
  title: string;
  icon: string;
  color1: string;
  color2: string;
};

export const Circle: React.FC<CircleProps> = ({
  title,
  icon,
  color1,
  color2,
}) => {
  return (
    <OuterCircle color1={color1} color2={color2}>
      <InnerCircle>
        <Image src={icon} alt={title} width={50} height={50} />
      </InnerCircle>
    </OuterCircle>
  );
};
