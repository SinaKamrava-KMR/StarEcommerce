import { styled } from "styled-components";
import TreeCategory from "../../dashboard/common/TreeCategory";
import { Typography } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;
  overflow-y: scroll;
  height: 570px;

  /* width*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #d1d1d19a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #616264;
    border-radius: 10px;
  }
`;

const TreeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 7rem;
`;
const Header = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
`;
const Line = styled.div`
  position: absolute;
  top: 50%;
  right: -70px;
  height: 1px;
  width: 50px;
  background-color: #333;
`;

function Categories() {
  return (
    <Wrapper>
      <Header>
        <Typography variant="DashboardTitle"> مدیریت دسته بندی ها</Typography>
      </Header>
      <TreeContainer>
        <Line />
        <TreeCategory />
      </TreeContainer>
    </Wrapper>
  );
}

export default Categories;
