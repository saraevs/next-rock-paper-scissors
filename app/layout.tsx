import StyledComponentsRegistry from "@/lib/registry";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlowSemiCondensed.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
