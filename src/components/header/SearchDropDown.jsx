import PropTypes from "prop-types";
import { useMemo } from "react";
import { SEARCH_HISTORY } from "../../configs/constants";
import { styled } from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/reducer/search/searchSlice";

const Wrapper = styled.div`
  position: absolute;
  min-height: 100px;
  left: 2px;
  right: 2px;
  top: 115%;
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0 5px #9393935d;
  padding: 1rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  &:hover {
    background-color: #ffbfbf;
  }
  border-radius: 50%;
`;

const SearchDropDown = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.value);
  const data = useMemo(() => {
    let result = localStorage.getItem(SEARCH_HISTORY) || "[]";
    result = JSON.parse(result);
    return result.filter((item) => item.includes(query));
  }, [query]);

  const handleDelete = (value) => {
    const histories = data.filter((item) => item !== value);
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(histories));
  };

  return (
    data.length !== 0 &&
    query !== "" && (
      <Wrapper>
        {data &&
          data?.map((search, i) => {
            return (
              <Item
                key={i}
                onClick={() => {
                  dispatch(setSearch(search));
                }}
              >
                <p>{search}</p>
                <IconWrapper
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(search);
                  }}
                >
                  <HiXMark />
                </IconWrapper>
              </Item>
            );
          })}
      </Wrapper>
    )
  );
};

SearchDropDown.propTypes = {
  query: PropTypes.string,
  onSelect: PropTypes.func,
};
export default SearchDropDown;
