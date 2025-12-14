import { Suspense } from "react";
import BlogDetail from "../../BlogDetail";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
}) {
  // Handle both Promise and direct object (Next.js 15+ vs 13/14)
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  
  // Support both slug (new) and id (legacy) parameters
  const slugParam = params?.slug;
  const idParam = params?.id;
  
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  const blogId = Array.isArray(idParam) ? idParam[0] : idParam;
  
  // Debug logging
  console.log('Page received searchParams:', { slug, blogId, params });
  
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600">Loading post...</p>
        </div>
      </div>
    }>
      <BlogDetail slug={slug || undefined} blogId={blogId || undefined} />
    </Suspense>
  );
}

