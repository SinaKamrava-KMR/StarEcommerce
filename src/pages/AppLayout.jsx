import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { styled } from "styled-components";

const MainLayout = styled.main`
  flex: 1;
`;

function AppLayout() {
  return (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default AppLayout;
