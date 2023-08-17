import { useSelector } from "react-redux";
import useProduct from "../useProduct";
import { useEffect } from "react";
import { useState } from "react";

export default function useFilterItems() {
  const [items, setItems] = useState({});
  const { isLoading, products, setParams } = useProduct();

  const options = useSelector((state) => state.categories);


  useEffect(() => {
    if (isLoading) {
      setParams({ page: 1, limit: 100 });
    }

    if (!isLoading) {
     const categories= options.categories.reduce((acc, nxt) => {
        const count = products.data.products.filter(
          (product) => product?.category === nxt._id
        ).length;
        return [...acc,{label:nxt.name,value:nxt._id,count}];
      }, []);
     const subCategories= options.subcategories.reduce((acc, nxt) => {
        const count = products.data.products.filter(
          (product) => product?.subcategory === nxt._id
        ).length;
        return [...acc,{label:nxt.name,value:nxt._id,count}];
      }, []);


      setItems({categories,subCategories})

    
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  

  return { items, isLoading };
}
