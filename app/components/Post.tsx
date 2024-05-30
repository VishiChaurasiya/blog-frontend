import Link from "next/link";
import Image from "next/image";
import { Post as IPost } from "@/app/actions/getPosts";

interface PostProps {
  post: IPost;
}

interface Color {
  bg: string;
  font: string;
}

const color: { [key: number]: Color } = {
  0: { bg: "#FFEFDB", font: "#8F5000" },
  1: { bg: "#EDE9FF", font: "#10009F" },
  2: { bg: "#EDFFD7", font: "#038F00" },
};

const Post = ({ post }: PostProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-[40px]">
      <div className="flex-[1]">
        {post.image && (
          <Link href={`/blog/${post.slug}`}>
            <Image
              width="600"
              height="380"
              src={post.image}
              alt="Post Image"
              className="w-full lg:aspect-square rounded-[20px] object-cover"
            />
          </Link>
        )}
      </div>

      <div className="flex-[2] flex flex-col justify-center gap-[10px] md:gap-[25px]">
        <div className="flex justify-start items-center gap-2">
          {post.tags.map((tag, index) => (
            <Link
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className="rounded-[5px] px-[20px] py-[8px] text-sm font-medium max-w-max"
              style={{
                background: color[index % 3].bg,
                color: color[index % 3].font,
              }}
            >
              {tag.title}
            </Link>
          ))}
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h1 className="lg:text-[30px] font-semibold leading-[1.3]">
            {post.title}
          </h1>
        </Link>

        <div>
          <span className="text-sm lg:text-lg font-medium">{post.author}</span>
          &nbsp; &nbsp;
          <span className="text-sm lg:text-base text-black/40">
            | &nbsp; {post.updatedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
