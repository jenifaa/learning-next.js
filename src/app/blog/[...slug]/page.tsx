const CatchAllRoutes = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  return (
    <div>
      <h1>Catch all: {slug.join("/")}</h1>
    </div>
  );
};

export default CatchAllRoutes;
