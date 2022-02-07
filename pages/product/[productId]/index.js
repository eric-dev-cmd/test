import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <>
      <h3>Product about detail - {productId}</h3>
    </>
  );
};

export default ProductDetail;
