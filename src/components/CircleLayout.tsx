import React from "react";
import { Circle } from "./Circle";
import styled from "styled-components";
import rockIcon from "public/images/icon-rock.svg";
import paperIcon from "public/images/icon-paper.svg";
import scissorsIcon from "public/images/icon-scissors.svg";
import { Icon } from "@/types";

const StyledCircleLayout = styled.div`
  display: flex;
`;

type CircleLayoutProps = {};

export const CircleLayout: React.FC<CircleLayoutProps> = ({}) => {
  const icons: Icon[] = [
    {
      title: "Rock",
      icon: rockIcon,
      color1: "hsl(349, 71%, 52%)",
      color2: "hsl(349, 70%, 56%)",
    },
    {
      title: "Paper",
      icon: paperIcon,
      color1: "hsl(230, 89%, 62%)",
      color2: "hsl(230, 89%, 65%)",
    },
    {
      title: "Scissors",
      icon: scissorsIcon,
      color1: "hsl(39, 89%, 49%)",
      color2: "hsl(40, 84%, 53%)",
    },
  ];
  return (
    <StyledCircleLayout>
      <>
        {icons.map((i) => {
          return (
            <Circle
              title={i.title}
              icon={i.icon}
              color1={i.color1}
              color2={i.color2}
            />
          );
        })}
      </>
    </StyledCircleLayout>
  );
};
