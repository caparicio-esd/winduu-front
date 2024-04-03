import React from "react";

const BlogSinglePage = ({ params }: { params: { post_slug: string } }) => {
  return <div>BlogSinglePage - {params.post_slug}</div>;
};

export default BlogSinglePage;
