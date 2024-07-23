import HomePage from "./home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rock, paper, scissors",
};

export default async function Page() {
  return <HomePage />;
}
