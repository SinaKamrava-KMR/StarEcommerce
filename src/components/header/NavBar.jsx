import { Link } from "react-router-dom";
import { styled } from "styled-components";
import NavSelect from "./NavSelect";
import { useSelector } from "react-redux";

const NavBarWrapper = styled.ul`
  display: flex;

  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    flex: 1;
  }
  @media (min-width: 1000px) {
    gap: 2.5rem;
  }
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 1.4rem;
  &:hover {
    color: #222;
  }
  white-space: nowrap;
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.8rem;
  }
`;

function NavBar() {
  const options = useSelector((state) =>
    state.categories.categories.map((item) => {
      return { label: item.name, value: item._id };
    })
  );

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
