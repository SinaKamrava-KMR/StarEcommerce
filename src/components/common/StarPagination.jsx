import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import Stack from "@mui/material/Stack";

StarPagination.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
  }

  .MuiPaginationItem-root {
    margin: 0 2px;
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
    outline: 0;
    border-radius: 50%;
    padding: 6px 10px;
    font-size: 14px;
    &:hover {
      background-color: #f1f1f1;
    }

    &.Mui-selected {
      background-color: #2a2a2f;
      color: #fff;
      border: 0;
      outline: 0;
      &:hover {
        background-color: #1b1b1d;
      }
    }
  }
`;

function StarPagination() {
  return (
    <Wrapper>
      <Stack spacing={2}>
      <StyledPagination count={5} />
      </Stack>
    </Wrapper>
  );
}

export default StarPagination;
