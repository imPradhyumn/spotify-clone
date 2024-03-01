import Container from "@/components/Container";
import SearchBar from "@/components/Search/SearchBar";
import SearchResult from "@/components/Search/SearchResult";
import SideBar from "@/components/SideSection/SideBar";
import Header from "@/components/Header";

const page = () => {
  return (
    <Container>
      <SideBar />
      <div className="w-full">
        <Header>
          <SearchBar />
        </Header>
        <SearchResult />
      </div>
    </Container>
  );
};

export default page;
