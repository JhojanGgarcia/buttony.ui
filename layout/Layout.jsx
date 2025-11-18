import localFont from "next/font/local";
import { Geist, Lobster } from "next/font/google";
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

const LobsterFont = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
  display: "swap",
});

export default function PageLayout({ children }) {
  return (
    <div
      className={`${GeistFont.className} ${LobsterFont.variable} ${Varien.variable} ${styles.background} relative flex h-full w-full flex-col items-center justify-center overflow-x-hidden`}
    >
      <Header />
      {children}
    </div>
  );
}
