import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../common/Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { ACCESS_TOKEN_KEY } from "../../configs/constants";
import LoginIcon from "@mui/icons-material/Login";
import {
  BadgeIcon,
  Flex1,
  HeaderStyled,
  IconWrapper,
  Row,
  SearchWrapper,
} from "./HeaderStyled";
import SearchDropDown from "./SearchDropDown";

const Header = () => {
 
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  const carts = useSelector((state) => state.cart.products);
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
        <SearchWrapper>
          <Search  />
          <SearchDropDown/>
        </SearchWrapper>
      
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

        {accessToken ? (
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
        )}
      </Row>
    </HeaderStyled>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
