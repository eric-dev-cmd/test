import Link from "next/link";
import React from "react";

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">
        <a>Home Page</a>
      </Link>

      <h3>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h3>
      <h3>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h3>
      <h3>
        <Link href="/product/3" replace>
          <a>Product 3</a>
        </Link>
      </h3>
      <h3>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h3>
    </>
  );
};

export default ProductList;
