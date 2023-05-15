import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "product/productSlice";

const ProductView = ({ configuration }) => {
  const dispatch = useDispatch();

  const {
    loading,
    error,
    data: product,
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <h1>Product:</h1>
      {loading && <p>Loading product...</p>}
      {!loading && error && <p>Fetching product failed! {error}</p>}
      {!loading && product && <div>{JSON.stringify(product)}</div>}
    </>
  );
};

export default ProductView;
