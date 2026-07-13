const BlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-4xl font-bold">Blog Post : {blogId}</h1>
      <p>Welcome to the blog post page!</p>
    </div>
  );
};

export default BlogPage;
