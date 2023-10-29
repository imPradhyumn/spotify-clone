import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import StoreProvider from "@/redux/Provider";
import Player from "@/components/Player/Player";
import React from "react";
import dbConnect from "@/db/database";
import { cookies } from "next/headers";
import { LOGIN_COOKIE } from "@/constants";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify-Clone",
  description: "An Spotify Clone",
};

async function checkLoginStatus() {
  return cookies().has(LOGIN_COOKIE);
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Connect to DB as soon as land on search page

  await dbConnect();
  const loginStatus: boolean = await checkLoginStatus();

  return (
    <html lang="en">
      <body className={font.className}>
        <StoreProvider loginStatus={loginStatus}>
          {children}
          <Player />
        </StoreProvider>
      </body>
    </html>
  );
}
