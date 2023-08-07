import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f8f8f8a7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-block: 10px;
  gap: 5px;
  flex: 1;
  @media (max-width:600px) {
    padding-block: 5px;
  }

`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 1.5rem;
  background-color: transparent;
  outline: 0 !important;
`;

function SearchBox() {
  return (
    <SearchStyled>
      <SearchIcon sx={{ fontSize: "18px" }} />
      <Input type="text" placeholder="جستجو" />
    </SearchStyled>
  );
}

export default SearchBox;
