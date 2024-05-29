import { notFound } from "next/navigation";
import getPosts from "@/app/actions/getPosts";
import Post from "@/app/components/Post";

interface IParams {
  slug?: string;
}

const blog = async ({ params }: { params: IParams }) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <header
        className="px-[15px] py-[40px] md:px-[92px] md:py-[64px] bg-cover bg-center"
        style={{
          backgroundImage: `url("https://dyolkjkaata8s.cloudfront.net/images/personaliz-blog-bg.png")`,
        }}
      >
        <Post post={post} />
      </header>

      <main className="px-[15px] py-[40px] md:px-[92px] md:py-[64px] flex justify-between gap-8">
        <section
          id="post-content"
          dangerouslySetInnerHTML={{ __html: post.desc }}
        />
      </main>
    </div>
  );
};

export default blog;

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => post.slug);

  return slugs.map((slug) => ({
    slug,
  }));
}
