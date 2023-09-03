import { styled } from "styled-components";
import OrderStatus from "../components/cart/OrderStatus";
import CartAside from "../components/cart/CartAside";
import CartTable from "../components/cart/CartTable";
import CartRow from "../components/cart/CartRow";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
`;
const Container = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 1;
`;

function Cart() {
  const carts = useSelector((state) => state.cart.products);
  const [checkAll, setCheckAll] = useState(false);
  const [removeList, setRemoveList] = useState([]);
  const handleCheckProduct = (state, id) => {
    if (state) {
      setRemoveList((data) => [...data, id]);
    } else {
      setRemoveList((data) => data.filter((item) => item !== id));
    }
  };

  const handleCheclAll = (state) => {
    setCheckAll(state);
    if (state) {
      setRemoveList(carts.map((item) => item._id));
    } else {
      setRemoveList([]);
    }
  };

  const handleRemoveProducs = () => {
    if (removeList.length > 0) {
      console.log(removeList);
    }
  };
  return (
    <CartStyled>
      <OrderStatus state={0} />
      <Container>
        <CartTable
          onRemove={handleRemoveProducs}
          isActive={removeList.length > 0}
          onCheckAll={handleCheclAll}
        >
          {carts.map((product) => {
            return (
              <CartRow
                key={product._id}
                product={product}
                initCheck={checkAll}
                onCheck={handleCheckProduct}
              />
            );
          })}
        </CartTable>
        <CartAside />
      </Container>
    </CartStyled>
  );
}

export default Cart;
