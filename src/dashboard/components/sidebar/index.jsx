import styled from "@emotion/styled";
import { ListItem } from "@material-ui/core";
import { Grid } from "@mui/material";
import NavItem from "./NavItem";
import DashboardIcon from "../../common/dashboardIcon";
import AddProductButton from "./AddProductButton";
import AddIcon from "@mui/icons-material/Add";
import UsersIcon from "../../common/UsersIcon";
import { useState } from "react";
import ActiveWrapper from "./ActiveWrapper";
import OrderIcon from "../../common/OrderIcon";
import ProductsIcon from "../../common/ProductsIcon";
import ManageIcon from "../../common/ManageIcon";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const SidebarLayout = styled(ListItem)({
  padding: "1rem 0",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: ".8rem",
  alignItems: "flex-start",
  position: "relative",
  borderLeft: "1px solid #f3f3f3",
});

const navLinks = [
  { id: "main", label: "داشبورد", icon: <DashboardIcon />, active: true },
  {
    id: "orders",
    label: "مدیریت سفارشات",
    icon: <OrderIcon />,
    active: false,
  },
  { id: "products", label: "محصولات", icon: <ProductsIcon />, active: false },
  {
    id: "management",
    label: "مدیریت کالاها",
    icon: <ManageIcon />,
    active: false,
  },
  { id: "users", label: "کاربران", icon: <UsersIcon />, active: false },
  {
    id: "addProduct",
    label: "اضافه کردن محصول",
    icon: <AddIcon fontSize="large" />,
    active: false,
  },
];

function DashboardSidebar() {
  const navigate = useNavigate();
  let location = useLocation().pathname.split("/").at(-1);
  if (location === "") location = "main";
  const [activeId, setActiveId] = useState(location);

  navLinks.map((item) => {
    if (item.id === activeId) item.active = true;
    else item.active = false;
    return item;
  });

  useEffect(() => {
    navigate(`/dashboard/${activeId === "main" ? "" : activeId}`);
  }, [activeId, navigate]);

  return (
    <Grid item xs={2} component="aside" height="93%">
      <SidebarLayout component="ul">
        <ActiveWrapper activeId={activeId} />
        {navLinks.map((item) => {
          return item.id !== "addProduct" ? (
            <NavItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={() => setActiveId(item.id)}
            />
          ) : (
            <AddProductButton
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={() => setActiveId(item.id)}
            />
          );
        })}
      </SidebarLayout>
    </Grid>
  );
}

export default DashboardSidebar;
