import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const SearchStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-left: 30px;
  background-color: #f8f8f8;
  border: 1px solid #eef3f6;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-right: 5px;
  padding-block: 5px;
  gap: 5px;
  flex: 1;
  @media (min-width: 1200px) {
    min-width: 500px;
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

function Search({ value, setValue }) {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
  const query = useLocation().search;

  useEffect(() => {
    if (focus && query === "") navigate("/products");
  }, [focus, navigate, query]);

  return (
    <SearchStyled onClick={() => setFocus((s) => !s)}>
      <SearchIcon sx={{ fontSize: "18px" }} />
      <Input
        onFocus={() => setFocus((s) => !s)}
        type="text"
        placeholder="جستجو"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchStyled>
  );
}

Search.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
};

export default Search;
