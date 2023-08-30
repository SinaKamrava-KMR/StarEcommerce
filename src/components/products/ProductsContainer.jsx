import { styled } from "styled-components";
import PropTypes from "prop-types";
import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import StarPagination from "../common/StarPagination";
import Loading from "../common/Loading";

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PaginationWrapper = styled.div`
  direction: ltr;
`;

const ProductsContainer = ({ isLoading, products }) => {
  const wishList = useSelector((state) => state.wishlist.products);

  if (isLoading) return <Loading />;
  return (
    <Wrapper>
      <DataContainer>
        {!isLoading &&
          products?.data.products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                product={product}
                isLike={
                  wishList.find((item) => item._id === product._id)
                    ? true
                    : false
                }
              />
            );
          })}
      </DataContainer>

      <PaginationWrapper>
        <StarPagination count={products?.total_pages} />
      </PaginationWrapper>
    </Wrapper>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.object,
  isLoading: PropTypes.bool,
};
export default ProductsContainer;
