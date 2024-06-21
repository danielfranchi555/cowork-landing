import { Bebas_Neue } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const font = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});
