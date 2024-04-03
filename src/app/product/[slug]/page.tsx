import React from "react";

const ProductsSinglePage = ({
  params,
}: {
  params: { product_slug: string };
}) => {
  return <div>ProductsSinglePage - {params.product_slug}</div>;
};

export default ProductsSinglePage;
