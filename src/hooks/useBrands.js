import { useMemo } from "react";
import useProduct from "./useProduct";

export  function useBrands() {
  const {isLoading, products } = useProduct(1, 10000);
  const brands = useMemo(() => {
    if (products?.data.products) {
      const brands = products.data.products.map((product) => product.brand);
      return [...new Set(brands)];
    }

    return [];
  }, [products]);



  return {isLoading,brands}

}