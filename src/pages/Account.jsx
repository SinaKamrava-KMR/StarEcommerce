import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { Title } from "../components/cart/PurchaseStyle";
import { TbUserCog } from "react-icons/tb";
import { convertToP } from "../utils/helper";
import { logout } from "../redux/reducer/user/userSlice";
import { useNavigate } from "react-router-dom";

const AccountStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding-top: 4rem;
`;
const Box = styled.div`
  width: 30%;

  box-shadow: 0 0 40px #c8c8c833;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 2.5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: ${(props) => (props.child ? "1" : "0")};
`;
const Text = styled.p`
  color: #1d2138;
  font-size: ${(props) => (props.name ? "1.4rem" : "1.8rem")};
  font-weight: bold;
`;
const Label = styled.p`
  color: #909090;
  font-size: 1.5rem;
  font-weight: bold;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  font-size: 2.3rem;
  border-radius: 50%;
  color: #525252;
  background-color: #eaeaea8f;
`;
const LogoutButton = styled.div`
  color: #424242;
  font-weight: 600;
  background-color: #f5f5f5;
  &:hover {
    background-color: #dfdfdf;
  }
  padding: 1rem 2rem;
  font-size: 1.3rem;
  border-radius: 2rem;
  cursor: pointer;
`;

function Account() {
  // const wishlist = useSelector((state) => state.wishlist.products);
  // console.log(wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth/user")
  }

  return (
    <AccountStyle>
      <Title>اطلاعات حساب کاربری</Title>
      <Box>
        <Row>
          <IconWrapper>
            <TbUserCog />
          </IconWrapper>
          <Text>{`${user.name} ${user.lastName}`}</Text>
          <span style={{ flex: 1 }}></span>
          <LogoutButton onClick={handleLogout}>خروج از حساب کاربری</LogoutButton>
        </Row>
        <Row>
          
            <Label>نام :</Label>
            <Text name>{`${user.name}`}</Text>
         
        </Row>

        <Row >
            <Label>نام خانوادگی :</Label>
            <Text name>{`${user.lastName}`}</Text>
          </Row>
          <Row >
            <Label>ادرس :</Label>
            <Text name>{`${user.address}`}</Text>
          </Row>

          <Row >
            <Label> شماره تماس :</Label>
            <Text name>{`${convertToP(user.phoneNumber)}`}</Text>
          </Row>
     
      </Box>
    </AccountStyle>
  );
}

export default Account;
