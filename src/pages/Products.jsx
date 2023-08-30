import { styled } from "styled-components";
import FilterItems from "../components/products/FilterItems";
import ProductsContainer from "../components/products/ProductsContainer";
import useProduct from "../hooks/useProduct";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ProductsStyled = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 8rem;
  padding: 0 3rem;
  position: relative;
`;

const Products = () => {
  const { isLoading, products, setParams } = useProduct();
  const [params] = useSearchParams();

  const handlePArams = (filtered) => {
    console.log(filtered);
  };

  useEffect(() => {
    setParams({ limit: 15 });

    if (params.get("category")) {
      setParams({ limit: 15, category: params.get("category") });
    }
    if (params.get("brand")) {
      setParams({ limit: 15, brand: params.get("brand") });
    }
    if (params.get("brand") && params.get("category")) {
      setParams({
        limit: 15,
        brand: params.get("brand"),
        category: params.get("category"),
      });
    }
    if (params.get("price[lt]")) {
      setParams({
        limit: 15,
        lowerThanPrice: params.get("price[lt]"),
        greaterThanPrice: params.get("price[gt]"),
      });
    }
    if (params.get("price[lt]") && params.get("category")) {
      setParams({
        limit: 15,
        lowerThanPrice: params.get("price[lt]"),
        greaterThanPrice: params.get("price[gt]"),
        category: params.get("category"),
      });
    }
    if (params.get("price[lt]") && params.get("brand")) {
      setParams({
        limit: 15,
        lowerThanPrice: params.get("price[lt]"),
        greaterThanPrice: params.get("price[gt]"),
        brand: params.get("brand"),
      });
    }

    if (
      params.get("price[lt]") &&
      params.get("category") &&
      params.get("brand")
    ) {
      setParams({
        limit: 15,
        lowerThanPrice: params.get("price[lt]"),
        greaterThanPrice: params.get("price[gt]"),
        brand: params.get("brand"),
        category: params.get("category"),
      });
    }

    // setParams((params) => ({ ...params, limit: 15, page: params.get("page") }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <ProductsStyled>
      <FilterItems onParams={handlePArams} />
      <ProductsContainer isLoading={isLoading} products={products} />
    </ProductsStyled>
  );
};

export default Products;
