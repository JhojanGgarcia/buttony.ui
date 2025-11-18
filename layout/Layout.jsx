import localFont from "next/font/local";
import { Geist } from "next/font/google";
import styles from "@/styles/background.module.css";
import Header from "@/components/layout/header";

const Varien = localFont({
  variable: "--font-varien",
  src: "./varien.otf",
});

const GeistFont = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
  display: "swap",
});


export default function PageLayout({ children }) {
  return (
    <div
      className={`${GeistFont.className} ${Varien.variable} ${styles.background} relative flex h-full w-full flex-col items-center justify-center overflow-x-hidden`}
    >
      <Header />
      {children}
    </div>
  );
}
