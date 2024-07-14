import PostCard from "@/components/common/PostCard"
import { apiClient } from "@/lib/api-client"
import Link from "next/link"


export default async function RandomPosts() {
  // Get a random page between 10 and 75
  const randomPage = Math.floor(Math.random() * 65) + 10

  const posts = (await apiClient.post().find(new URLSearchParams({ per_page: '3', page: randomPage.toString(), order: 'desc' }))).filter(post => !!post)

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts.map((post) => (
        <Link key={post.id} href={`/${post.slug}`} className="flex flex-col rounded-lg shadow-lg overflow-hidden not-prose">
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  )
}