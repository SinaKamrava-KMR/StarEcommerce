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
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/reducer/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from "../../redux/reducer/wishlist/wishlistSlice";

function ProductCard({ product, isLike = false }) {
  const dispatch = useDispatch();
  const handleAdToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, productCount: 1 ,color:"#333"}));
  };
  const handleLike = (state) => {
    if (state) {
      dispatch(addFavoriteProduct(product));
    } else {
      dispatch(removeFavoriteProduct({ id: product._id }));
    }
  };
  return (
    <Link to={`/product/${product._id}`}>
      <Wrapper>
        <ImageWrapper>
          <LikeButton onLike={handleLike} init={isLike} />
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

        <AddButton onClick={handleAdToCart}>
          <HiOutlinePlus />
          <p>افزودن به سبد</p>
        </AddButton>
      </Wrapper>
    </Link>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isLike: PropTypes.bool,
  product: PropTypes.object,
};
export default ProductCard;
