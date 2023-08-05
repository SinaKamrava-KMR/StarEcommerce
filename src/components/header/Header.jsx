import { styled } from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../common/Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Search from "./Search";

const HeaderStyled = styled.header`
  width: 100%;
  padding-block: 10px;
  display: grid;
  gap: 1.6rem;
  align-items: center;
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
  return (
    <HeaderStyled>
      <Row>
        <Logo />

        <NavBar />
      </Row>

      <Row>
        <Flex1 />
        <Search />
        <Link to="/cart">
          <IconWrapper>
            <BadgeIcon>
              <p>3</p>
            </BadgeIcon>
            <ShoppingCartIcon fontSize="large" />
          </IconWrapper>
        </Link>

        <Link to="/account">
          <IconWrapper>
            <PersonIcon sx={{ fontSize: "25px" }} />
          </IconWrapper>
        </Link>
      </Row>
    </HeaderStyled>
  );
}

export default Header;
