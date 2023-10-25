import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SideBar from "../components/SideBar";
import ModalProvider from "@/providers/ModalProvider";
import Providers from "@/redux/Provider";
import SessionProvider from "@/providers/SessionProvider";
import Player from "@/components/Player/Player";
import { URL_PREFIX } from "@/constants";
import axios from "axios";
// import { setAuthState } from "./reducers/authSlice";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "An Spotify Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Connect to DB as soon as land on search page

  axios
    .get(URL_PREFIX + "/search")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <SessionProvider>
            <ModalProvider />
            <SideBar>{children}</SideBar>
            <Player />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
