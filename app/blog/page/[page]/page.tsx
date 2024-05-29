import { notFound } from "next/navigation";
import getPosts from "@/app/actions/getPosts";
import TagInfo from "@/app/components/TagInfo";
import Link from "next/link";
import Image from "next/image";
import getTags from "@/app/actions/getTags";

interface IParams {
  page?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const tags = await getTags();
  const posts = await getPosts();

  const startIndex = (+(params?.page ?? 1) - 1) * 6;
  const paginatedPosts = posts.slice(startIndex, startIndex + 6);

  if (!paginatedPosts.length) {
    return notFound();
  }

  return (
    <div>
      <TagInfo title="Blogify.io" tags={tags} />

      <main className="px-[15px] py-[40px] lg:px-[92px] lg:py-[64px]">
        <div className="mt-[30px] lg:mt-[65px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {paginatedPosts.map((post, index) => (
            <article className="flex flex-col gap-4 flex-1" key={index}>
              <Link href={`/${post.slug}`}>
                {post.image && (
                  <Image
                    width="390"
                    height="200"
                    src={post.image}
                    alt="Post Image"
                    className="w-full lg:w-[390px] lg:h-[228px] flex-shrink-0 aspect-[1.5] rounded-[20px]"
                  />
                )}
              </Link>
              <div className="flex justify-start items-center gap-2 h-[36px]">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/tag/${tag.slug}`}
                    className="rounded-[5px] bg-black/5 px-[20px] py-[8px] text-sm font-medium max-w-max"
                  >
                    {tag.title}
                  </Link>
                ))}
              </div>
              <Link href={`/${post.slug}`}>
                <h1 className="lg:text-lg font-semibold">{post.title}</h1>
              </Link>
              <span className="text-sm lg:text-base text-black/60">
                {post.updatedAt}
              </span>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((_, index) => ({
    page: (index + 1).toString(),
  }));
}
