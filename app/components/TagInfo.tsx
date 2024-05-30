import { Tag } from "@/app/actions/getTags";
import Link from "next/link";

interface TagInfoProps {
  title: string;
  tags: Tag[];
}

const TagInfo = ({ title, tags }: TagInfoProps) => {
  return (
    <main className="h-[400px] flex flex-col justify-center bg-blue-200 items-center px-[15px] py-[40px] bg-cover bg-center">
      <h1 className="text-[25px] sm:text-[48px] font-semibold leading-[1]">
        {title}
      </h1>

      <div className="mt-[64px] max-w-[1040px] flex flex-wrap gap-4 justify-center">
        {tags.map(({ title, slug }) => (
          <Link
            key={slug}
            href={`/blog/tag/${slug}`}
            className="px-[20px] py-[8px] rounded-[8px] border border-black text-sm"
            style={{
              background:
                "linear-gradient(91deg, rgba(0, 0, 0, 0.05) 0.17%, rgba(101, 44, 179, 0.05) 80.77%)",
            }}
          >
            {title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TagInfo;
