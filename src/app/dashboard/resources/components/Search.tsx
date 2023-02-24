import { IoIosSearch } from "react-icons/io";
import { SearchCointainer } from "./containers";

export default function SearchComponent() {
  return (
    <SearchCointainer>
      <IoIosSearch />
      <input placeholder="Busque pelo que quiser"></input>
    </SearchCointainer>
  );
}
