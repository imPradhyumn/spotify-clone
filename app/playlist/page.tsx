import Container from "@/components/Container";
import Header from "@/components/Header";
import SideBar from "@/components/SideSection/SideBar";
import PlaylistDashboard from "@/components/UserPlaylist/PlaylistDashboard/PlaylistDashboard";

const page = () => {
  return (
    <Container>
      <SideBar />
      <PlaylistDashboard />
    </Container>
  );
};

export default page;
