"use client";

import Container from "@/components/Container";
import SideBar from "@/components/SideSection/SideBar";
import PlaylistDashboard from "@/components/UserPlaylist/PlaylistDashboard/PlaylistDashboard";
import { useParams } from "next/navigation";

const Page = () => {
  const slugs = useParams();

  let playlistName: string = slugs.slug ? slugs.slug[0] : "liked songs";
  playlistName = playlistName.replaceAll("%20", " ");

  return (
    <Container>
      <SideBar />
      <PlaylistDashboard playlistName={playlistName} />
    </Container>
  );
};

export default Page;
