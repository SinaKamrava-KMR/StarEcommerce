import PropTypes from "prop-types";
import { convertToPersianNumber } from "../../utils/helper";
import { HiOutlinePlus } from "react-icons/hi2";
import LikeButton from "./LikeButton";
import {
  ImageWrapper,
  Wrapper,
  Image,
  Title,
  PriceWrapper,
  AddButton,
} from "./ProductCardStyle";

function ProductCard({ product }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <LikeButton />
        <Image
          src={`http://localhost:8000/images/products/images/${product.images[0]}`}
        />
      </ImageWrapper>
      <Title>
        <p>{product.name}</p>
      </Title>

      <PriceWrapper>
        <p>{convertToPersianNumber(product.price)}</p>
        <p>تومان</p>
      </PriceWrapper>

      <AddButton>
        <HiOutlinePlus />
        <p>افزودن به سبد</p>
      </AddButton>
    </Wrapper>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  product: PropTypes.object,
};
export default ProductCard;
