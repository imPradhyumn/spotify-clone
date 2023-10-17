import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SideBar from "../components/SideBar";
import ModalProvider from "@/providers/ModalProvider";
import Providers from "@/redux/Provider";
import { cookies } from "next/headers";
import { LOGIN_COOKIE } from "@/constants";
import UserService from "@/services/userService";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "An Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ModalProvider />
          <SideBar>{children}</SideBar>
        </Providers>
      </body>
    </html>
  );
}
