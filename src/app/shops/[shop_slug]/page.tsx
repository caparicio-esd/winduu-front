import React from "react";

const SingleShopPage = ({ params }: { params: { shop_slug: string } }) => {
  return <div>SingleShopPage - {params.shop_slug}</div>;
};

export default SingleShopPage;
