import { apiClient } from "@/lib/api-client";
import Link from "next/link";
import PostCard from "@/components/common/PostCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { author, tag, category, page: pageParam = '1' } = searchParams;
  const posts = (await apiClient.post().find(new URLSearchParams({
    page: pageParam,
    per_page: '9',
    order: 'desc',
  }))).filter(post => !!post)

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`} className="flex flex-col rounded-lg shadow-lg overflow-hidden not-prose">
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
