import { styled } from "styled-components";
import CheckBox from "../common/CheckBox";
import PropTypes from "prop-types";
import { convertToPersianNumber } from "../../utils/helper";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 0 2rem;
  align-items: center;

  grid-template-columns: 40px minmax(50%, 1fr) repeat(2, minmax(20%, 100px));
  & > p:not(:first-child, :nth-child(2)) {
    text-align: center;
  }
`;
const ProductContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ProductName = styled.p`
  font-weight: bold;
`;
const CategoryName = styled.p`
  font-size: 1.3rem;
  color: #999;
`;
const Color = styled.div`
  background-color: ${(props) => props.color};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 0.5rem;
`;

const CartRow = ({ product, onCheck, initCheck }) => {
  return (
    <Wrapper>
      <CheckBox
        initCheck={initCheck}
        onCheck={(state) => onCheck(state, product._id)}
      />
      <ProductContent>
        <Image
          src={`http://localhost:8000/images/products/images/${product.images[0]}`}
        />
        <Column>
          <ProductName>{product.name} </ProductName>
          <Row>
            <Color color={product.color} />
            <CategoryName>{product.category.name} </CategoryName>
          </Row>
        </Column>
      </ProductContent>
      <p> {convertToPersianNumber(product.productCount)}</p>
      <p>
        {convertToPersianNumber(product.productCount * product.price)} تومان
      </p>
    </Wrapper>
  );
};

CartRow.propTypes = {
  product: PropTypes.object,
  onCheck: PropTypes.func,
  initCheck: PropTypes.bool,
};
export default CartRow;
