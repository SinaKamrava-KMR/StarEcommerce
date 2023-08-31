import { styled } from "styled-components";
import PropTypes from "prop-types";
import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";
import StarPagination from "../common/StarPagination";
import Loading from "../common/Loading";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const PaginationWrapper = styled.div`
  direction: ltr;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  background-color: #f1f1f1;
  border-radius: 1rem;
  padding: 1rem 2rem;
  width: fit-content;
`;
const SortByPrice = styled.div`
  z-index: 30;
  position: absolute;
  left: 5rem;
  top: 0;
  padding: 0 1rem;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  & > p {
    cursor: pointer;
    background-color: #ebebeb;
    padding: 0.8rem 1rem;
  }
`;

const SortTitle = styled.div`
  cursor: pointer;
`;

const sorts = [
  {
    params: "price",
    text: "ارزانترین",
  },
  {
    params: "-price",
    text: "'گرانترین",
  },
];

const ProductsContainer = ({ categoryId, brand = "", isLoading, products }) => {
  const wishList = useSelector((state) => state.wishlist.products);
  const categories = useSelector((state) => state.categories.categories);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSort, setShowSort] = useState(false);

  const title = useMemo(() => {
    if (categoryId === "all") {
      return brand !== "" ? `همه محصولات برند ${brand}` : `همه محصولات`;
    } else {
      const category = categories.find((item) => item._id === categoryId);
      if (!category) return `همه محصولات`;

      return brand !== ""
        ? `${category?.name}  از برند ${brand}`
        : `${category?.name}`;
    }
  }, [categoryId, brand, categories]);

  const handlePagination = (page) => {
    setSearchParams({ page });
  };

  const handleChangeSort = (params) => {
    searchParams.set("sort", params);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SortByPrice>
        <SortTitle onClick={() => setShowSort((s) => !s)}>فیلتر قیمت</SortTitle>
        {showSort &&
          sorts.map((item) => {
            return (
              <p key={item.text} onClick={() => handleChangeSort(item.params)}>
                {item.text}
              </p>
            );
          })}
      </SortByPrice>
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
        <StarPagination
          defualtPage={+searchParams.get("page") || 1}
          onChange={handlePagination}
          count={products?.total_pages}
        />
      </PaginationWrapper>
    </Wrapper>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.object,
  isLoading: PropTypes.bool,
  categoryId: PropTypes.string,
  brand: PropTypes.string,
};
export default ProductsContainer;
