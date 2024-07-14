import Image from "next/image";
import Link from "next/link";

import { WPPost } from "wordpress-api-client";
import { apiClient } from "@/lib/api-client";

export default async function PostCard({ post }: { post: WPPost }) {
  const image = (await apiClient.media().find(undefined, ...(post.featured_media ? [post.featured_media] : [])))[0]!
  const author = (await apiClient.user().find(undefined, post.author))[0]!
  const date = new Date(post.date)
  const dateLocale = date.toLocaleDateString("es-MX", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const tagNames = ((await apiClient.postTag().find(undefined, ...(post.tags ?? []))).filter(tag => !!tag).map(tag => tag.name))

  const category = (await apiClient.postCategory().find(undefined, ...(post.categories ?? [])))[0]!

  return (
    <>
      <Image
        className="h-48 w-full object-cover not-prose"
        src={image.source_url}
        alt={post.title.rendered}
        width={400}
        height={200}
      />
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p>
            <Link href={category.link} className="hover:underline not-prose text-sm font-medium text-pomegranate-600">
              {category.name}
            </Link>
          </p>
          <div className="block mt-2">
            <p
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              className="text-xl font-semibold text-gray-900"></p>
            <p
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              className="mt-3 text-sm text-gray-500"
            >
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 my-4">
          {
            tagNames.map(tagName => (
              <span
                key={tagName}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pomegranate-100 text-pomegranate-800"
              >
                {tagName}
              </span>
            ))
          }
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href={author.link}>
              <span className="sr-only">{author.name}</span>
              <img className="h-10 w-10 rounded-full" src={author.avatar_urls?.[48]} alt="" />
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link href={author.link} className="not-prose hover:underline">
                {author.name}
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date.toTimeString()}>{dateLocale}</time>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}