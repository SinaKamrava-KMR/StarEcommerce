import { Link } from "react-router-dom";
import { styled } from "styled-components";
import NavSelect from "./NavSelect";

const NavBarWrapper = styled.ul`
  display: flex;

  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  @media (min-width:800px) {
    flex:1

  }
  @media (min-width:1000px) {

    gap: 2.5rem;
  }
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 1.4rem;
  &:hover {
    color: #222;
  }
  white-space:nowrap;
  @media (min-width:600px) {
    font-size: 1.5rem;

  }
  @media (min-width:1000px) {
    font-size: 1.8rem;

  }
`;

const options = [
  { label: "لباس زنانه", value: "sfkfgsflksgfaklg" },
  { label: "پوشاک بچه", value: "lhlhh858075gf7" },
  { label: "لباس مجلسی", value: "jfkjf7584397807gfhg" },
];

function NavBar() {
  return (
    <NavBarWrapper>
      <Li>
        <NavSelect label="محصولات" options={options} />
      </Li>
      <Li>
        <Link to="/products?state=brand"> برند ها</Link>
      </Li>
      <Li>
        <Link to="/products?state=popular"> پربازدید</Link>
      </Li>
      <Li>
        <Link to="/dashboard/orders">پنل مدیریت</Link>
      </Li>
    </NavBarWrapper>
  );
}

export default NavBar;
