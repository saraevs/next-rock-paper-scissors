import { Option } from "./types";
import rockIcon from "public/images/icon-rock.svg";
import paperIcon from "public/images/icon-paper.svg";
import scissorsIcon from "public/images/icon-scissors.svg";

export const MOBILE_SCREEN_WIDTH_PX = "375px";

export const INNER_CIRCLE_WIDTH = 130;
export const MOBILE_INNER_CIRCLE_WIDTH = 100;

export const options: Option[] = [
  {
    title: "Rock",
    icon: rockIcon,
    color1: "hsl(349, 71%, 52%)",
    color2: "hsl(349, 70%, 56%)",
    beats: "Scissors",
  },
  {
    title: "Paper",
    icon: paperIcon,
    color1: "hsl(230, 89%, 62%)",
    color2: "hsl(230, 89%, 65%)",
    beats: "Rock",
  },
  {
    title: "Scissors",
    icon: scissorsIcon,
    color1: "hsl(39, 89%, 49%)",
    color2: "hsl(40, 84%, 53%)",
    beats: "Paper",
  },
];
