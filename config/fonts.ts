import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Anonymous_Pro } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const anonPro = Anonymous_Pro({
  weight: "400",
  style: "normal",
}); 

export const anonProBold = Anonymous_Pro({
  weight: "700",
  style: "normal",
});