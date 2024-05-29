import Link from "next/link";
import getPosts from "./actions/getPosts";
import getTags from "./actions/getTags";
import Post from "./components/Post";
import TagInfo from "./components/TagInfo";
import Image from "next/image";

interface Color {
  bg: string;
  font: string;
}

const color: { [key: number]: Color } = {
  0: { bg: "#FFEFDB", font: "#8F5000" },
  1: { bg: "#EDE9FF", font: "#10009F" },
  2: { bg: "#EDFFD7", font: "#038F00" },
};

const Home = async () => {
  const tags = await getTags();
  const posts = await getPosts();
  const firstPost = posts[0];
  const otherPosts = [1, 2, 3].map((index) => posts[index]);

  return (
    <div>
      <TagInfo title="Blogify.io" tags={tags} />

      <main className="px-[15px] py-[40px] lg:px-[92px] lg:py-[64px]">
        <Post post={firstPost} />
        <div className="mt-[30px] lg:mt-[65px] flex flex-col lg:flex-row justify-between items-center gap-8">
          {otherPosts.map((post, index) => (
            <article className="flex flex-col gap-4 flex-1" key={index}>
              <Link href={`/${post.slug}`}>
                {post.image && (
                  <Image
                    width="390"
                    height="200"
                    src={post.image}
                    alt="personaliz_logo"
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

export default Home;
