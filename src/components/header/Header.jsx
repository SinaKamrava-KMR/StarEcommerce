import { styled } from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../common/Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// import Cookies from "js-cookie";
// import { ACCESS_TOKEN_KEY } from "../../configs/constants";
// import LoginIcon from "@mui/icons-material/Login";
const HeaderStyled = styled.header`
  padding-block: 10px;
  margin-inline: auto;
  display: grid;
  gap: 1.6rem;
  align-items: center;
  background-color: ${(props) =>
    props.position > 70 ? "#fff" : "transparent"};
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0rem;
  right: 0rem;
  padding: 1.2rem 1rem;
  grid-template-columns: repeat(auto-fill, maxmin(50px, 1fr));
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BadgeIcon = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f85b5b;
  color: white;
  font-size: 12px;
  width: 16px;
  height: 16px;
  padding: 9px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  & p {
    margin-top: 2px;
  }
`;
const IconWrapper = styled.div`
  position: relative;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Flex1 = styled.div`
  flex: 1;

  @media (max-width: 1200px) {
    display: none;
  }
`;

function Header() {
  // const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  const carts = useSelector(state=>state.cart.products)
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderStyled position={scrollPosition}>
      <Row>
        <Logo />

        <NavBar />
      </Row>

      <Row>
        <Flex1 />
        <Search />
        <Link to="/cart">
          <IconWrapper>
            {carts.length > 0 && (
              <BadgeIcon>
                <p>{carts.length}</p>
              </BadgeIcon>
            )}

            <ShoppingCartIcon fontSize="large" />
          </IconWrapper>
        </Link>

        <Link to="/account">
          <IconWrapper>
            <PersonIcon sx={{ fontSize: "25px" }} />
          </IconWrapper>
        </Link>
        {/* {accessToken ? (
          <Link to="/account">
            <IconWrapper>
              <PersonIcon sx={{ fontSize: "25px" }} />
            </IconWrapper>
          </Link>
        ) : (
          <Link to="/auth/user">
            <IconWrapper>
              <LoginIcon sx={{ fontSize: "25px" }} />
            </IconWrapper>
          </Link>
        )} */}
      </Row>
    </HeaderStyled>
  );
}

export default Header;
