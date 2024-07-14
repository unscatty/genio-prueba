import { apiClient } from "@/lib/api-client";
import Link from "next/link";
import PostCard from "@/components/common/PostCard";
import Pagination from "@/components/common/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { user, tags, categories, page = '1', per_page = '9', order = 'desc' } = searchParams;

  const pageParam = parseInt(page, 10);
  const perPageParam = parseInt(per_page, 10);

  const queryParams = new URLSearchParams({
    page: pageParam.toString(),
    per_page: perPageParam.toString(),
    order,
  });

  if (user) {
    queryParams.append('user', user);
  }

  if (tags) {
    queryParams.append('tags', tags);
  }

  if (categories) {
    queryParams.append('categories', categories);
  }

  const posts = (await apiClient.post().find(queryParams)).filter(post => !!post)

  const previousHref = pageParam > 1 ? '/?' + new URLSearchParams({ ...queryParams, page: (pageParam - 1).toString() }).toString() : '/';
  const nextHref = pageParam < posts.length ? '/?' + new URLSearchParams({ ...queryParams, page: (pageParam + 1).toString() }).toString() : '/';

  return (
    <div className="relative pt-2 pb-2 px-4 sm:px-6 lg:pt-4 lg:pb-4 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Bienvenido</h2>
          <p className="mt-3 text-justify mx-auto text-xl text-gray-500 sm:mt-4">
            Voluptate ut occaecat officia qui commodo non culpa sint. Ullamco est aliqua qui sit laboris do amet irure minim est cillum anim ullamco cillum. Aliquip mollit magna labore mollit qui reprehenderit ullamco esse tempor fugiat. Culpa ut laborum deserunt ea sit. Magna laborum consequat irure proident consectetur.

            Incididunt culpa nulla sunt magna officia exercitation amet. Reprehenderit aute nulla cillum sunt Lorem pariatur nulla labore duis nulla do laboris officia. Non ex aute tempor ea minim labore dolore incididunt id ea. Nostrud sit nulla tempor tempor ad officia. Deserunt tempor voluptate do voluptate culpa anim et reprehenderit deserunt veniam sit. Exercitation est in consequat et Lorem pariatur do voluptate.
          </p>
        </div>
        <Pagination
          className="not-prose"
          previousHref={previousHref}
          nextHref={nextHref}
        />
        <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <Link key={post.id} href={`/${post.slug}`} className="flex flex-col rounded-lg shadow-lg overflow-hidden not-prose">
              <PostCard post={post} />
            </Link>
          ))}
        </div>
        <Pagination
          className="not-prose"
          previousHref={previousHref}
          nextHref={nextHref}
        />
      </div>
    </div>
  )
}
