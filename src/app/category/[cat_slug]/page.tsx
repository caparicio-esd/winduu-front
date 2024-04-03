import React from "react";

const CategorySinglePage = ({ params }: { params: { cat_slug: string } }) => {
  return <div>CategorySinglePage - {params.cat_slug}</div>;
};

export default CategorySinglePage;
