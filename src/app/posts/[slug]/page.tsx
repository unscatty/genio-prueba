import { apiClient } from "@/lib/api-client";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Article from "@/components/common/Article";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = (await apiClient.post().find(new URLSearchParams(params)))[0]!
  const postImage = (await apiClient.media().find(undefined, post.featured_media!))[0]!
  const author = (await apiClient.user().find(undefined, post.author))[0]!
  const date = new Date(post.date).toLocaleDateString("es-MX", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = (await apiClient.postCategory().find(undefined, post.categories![0]!))[0]!

  const tagNames = ((await apiClient.postTag().find(undefined, ...(post.tags ?? []))).filter(tag => !!tag).map(tag => tag.name))

  return (
    <section className="py-8 md:py-12 fade-in">
      <div className="mx-auto max-w-5xl p-6 sm:p-8">
        <h1>
          <Balancer>
            <span
              className="text-3xl md:text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></span>
          </Balancer>
        </h1>

        <div className="flex justify-between items-center gap-4 text-sm mb-4">
          <h5>
            Publicado el {date} por{" "}
            {author?.name! && (
              <span>
                <a href={`/posts/?author=${author.id}`}>{author.name}</a>{" "}
              </span>
            )}
          </h5>
          <Link
            href={`/posts/?category=${category.id}`}
            className="hover:underline not-prose text-sm font-medium text-pomegranate-600"
          >
            {category.name}
          </Link>
        </div>
        {/* <div className="flex justify-between items-center gap-4 text-sm mb-4"> */}
        <div className="flex flex-row-reverse flex-wrap gap-1 my-2">
          {
            tagNames.map(tagName => (
              <span
                key={tagName}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-2 ring-pomegranate-500 text-pomegranate-800"
              >
                {tagName}
              </span>
            ))
          }
        </div>
        {/* </div> */}
        <div className="mb-12 overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
          {/* eslint-disable-next-line */}
          <Image
            width={900}
            height={600}
            className="w-full not-prose"
            src={postImage.source_url}
            alt={post.title.rendered}
          />
        </div>
        <Article className="max-w-full text-justify" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </section>
  );
}
