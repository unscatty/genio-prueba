import { apiClient } from "@/lib/api-client";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Article from "@/components/common/Article";
import BackButton from "@/components/posts/BackButton";
import RandomPosts from "@/components/posts/RandomPosts";
import { classNames } from "@/utils/common";

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

  const tags = ((await apiClient.postTag().find(undefined, ...(post.tags ?? []))).filter(tag => !!tag))

  return (
    <section className="fade-in">
      <div className="mx-auto max-w-5xl p-6 sm:p-8">
        <div className="flex w-full justify-center md:block py-2">
          <BackButton />
        </div>
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
                <Link href={`/?user=${author.id}`}>{author.name}</Link>{" "}
              </span>
            )}
          </h5>
          <Link
            href={`/?categories=${category.id}`}
            className="hover:underline not-prose text-sm font-medium text-pomegranate-600"
          >
            {category.name}
          </Link>
        </div>
        {/* <div className="flex justify-between items-center gap-4 text-sm mb-4"> */}
        <div className="flex flex-row-reverse flex-wrap space-x-1 my-2">
          {
            tags.map(tag => (
              <Link
                href={`/?tags=${tag.id}`}
                key={tag.id}
                className={
                  classNames(
                    'not-prose inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pomegranate-100 text-pomegranate-800',
                    'hover:bg-transparent hover:ring-1 hover:ring-pomegranate hover:text-pomegranate'
                  )
                }
              >
                {tag.name}
              </Link>
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
        
        <h2>Te podría interesar</h2>
        <RandomPosts />
      </div>
    </section>
  );
}
