import BlogDetail from "../../BlogDetail";

export default function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const idParam = searchParams?.id;
  const blogId = Array.isArray(idParam) ? idParam[0] : idParam;
  return <BlogDetail blogId={blogId} />;
}

