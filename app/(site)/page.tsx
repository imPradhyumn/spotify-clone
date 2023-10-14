import Header from "@/components/Header";
import Playlists from "@/components/Playlists";

export default function Home() {
  return (
    <div className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
      <Header>
        <h1 className="text-white text-3xl font-semibold">Spotify Playlists</h1>
      </Header>

      <Playlists />
    </div>
  );
}
