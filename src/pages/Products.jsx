import { styled } from "styled-components";
import FilterItems from "../components/products/FilterItems";
import ProductsContainer from "../components/products/ProductsContainer";
import useProduct from "../hooks/useProduct";
import { useEffect, useState } from "react";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [subcategoriesSelected, setSubcategoriesSelected] = useState([]);

  const handlePArams = (filtered) => {
    console.log(filtered);
    setSearchParams(filtered.filter);
    setSubcategoriesSelected(filtered.subcategories);
  };

  useEffect(() => {
    async function fetchParams() {
      // Retrieve and set the query parameters
      const category = searchParams.get("category");
      const brand = searchParams.get("brand");
      const lowerThanPrice = searchParams.get("price[lt]");
      const greaterThanPrice = searchParams.get("price[gt]");
      const page = searchParams.get("page") || 1;
      const sort = searchParams.get("sort");
      const newParams = {
        limit: 15,
        page,
        sort: sort || "price",
        category: category,
        brand: brand,
        lowerThanPrice: lowerThanPrice,
        greaterThanPrice: greaterThanPrice,
      };

      await setParams(newParams);
    }

    fetchParams();
  }, [searchParams, setParams]);

  return (
    <ProductsStyled>
      <FilterItems onParams={handlePArams} />
      <ProductsContainer
        subcategories={subcategoriesSelected}
        categoryId={searchParams.get("category") || "all"}
        brand={searchParams.get("brand") || ""}
        isLoading={isLoading}
        products={products}
      />
    </ProductsStyled>
  );
};

export default Products;






































  // useEffect(() => {

  //   if (searchParams.get("category")) {
  //     setParams({ limit: 15, category: searchParams.get("category") });
  //   }
  //   if (searchParams.get("brand")) {
  //     setParams({ limit: 15, brand: searchParams.get("brand") });
  //   }
  //   if (searchParams.get("brand") && searchParams.get("category")) {
  //     setParams({
  //       limit: 15,
  //       brand: searchParams.get("brand"),
  //       category: searchParams.get("category"),
  //     });
  //   }
  //   if (searchParams.get("price[lt]")) {
  //     setParams({
  //       limit: 15,
  //       lowerThanPrice: searchParams.get("price[lt]"),
  //       greaterThanPrice: searchParams.get("price[gt]"),
  //     });
  //   }
  //   if (searchParams.get("price[lt]") && searchParams.get("category")) {
  //     setParams({
  //       limit: 15,
  //       lowerThanPrice: searchParams.get("price[lt]"),
  //       greaterThanPrice: searchParams.get("price[gt]"),
  //       category: searchParams.get("category"),
  //     });
  //   }
  //   if (searchParams.get("price[lt]") && searchParams.get("brand")) {
  //     setParams({
  //       limit: 15,
  //       lowerThanPrice: searchParams.get("price[lt]"),
  //       greaterThanPrice: searchParams.get("price[gt]"),
  //       brand: searchParams.get("brand"),
  //     });
  //   }

  //   if (
  //     searchParams.get("price[lt]") &&
  //     searchParams.get("category") &&
  //     searchParams.get("brand")
  //   ) {
  //     setParams({
  //       limit: 15,
  //       lowerThanPrice: searchParams.get("price[lt]"),
  //       greaterThanPrice: searchParams.get("price[gt]"),
  //       brand: searchParams.get("brand"),
  //       category: searchParams.get("category"),
  //     });
  //   }

  //   const page = searchParams.get("page") || 1;
  //   setParams((params) => ({
  //     ...params,
  //     limit: 15,
  //     page,
  //   }));

  // }, [searchParams,setParams]);
