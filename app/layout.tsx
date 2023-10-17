import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SideBar from "../components/SideBar";
import ModalProvider from "@/providers/ModalProvider";
import Providers from "@/redux/Provider";
import SessionProvider from "@/providers/SessionProvider";

// import { setAuthState } from "./reducers/authSlice";

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
          <SessionProvider>
            <ModalProvider />
            <SideBar>{children}</SideBar>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
