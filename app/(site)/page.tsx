import Header from "@/components/Header";
import PlayLists from "@/components/PlayList/PlayLists";

export default function Home() {
  return (
    <div className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
      <Header />
      <PlayLists />
    </div>
  );
}
