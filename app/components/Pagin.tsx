"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface PaginationProps {
  pages: number[];
}

const Pagination: React.FC<PaginationProps> = ({ pages }) => {
  const params = useParams();
  const currentPage = +params.page;

  return (
    <div className="flex justify-center mb-20">
      <ul className="flex text-base h-10">
        <li>
          <Link
            href={`/blog/page/${
              currentPage === 1 ? currentPage : currentPage - 1
            }`}
            className={`flex items-center justify-center px-4 h-10 text-white bg-black hover:bg-gray-700 rounded-tl-md rounded-bl-md transition-all duration-150 ${
              currentPage === 1 && "cursor-not-allowed"
            }`}
          >
            Previous
          </Link>
        </li>
        {pages.map((number) => (
          <li key={number}>
            <Link
              href={`/blog/page/${number}`}
              className={`flex items-center justify-center px-4 h-10 text-white hover:bg-gray-600 transition-all duration-150 ${
                currentPage === number ? "bg-gray-700" : "bg-black"
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`/blog/page/${
              currentPage === pages.length ? currentPage : currentPage + 1
            }`}
            className={`flex items-center justify-center px-4 h-10 text-white bg-black hover:bg-gray-700 rounded-tr-md rounded-br-md transition-all duration-150 ${
              currentPage === pages.length && "cursor-not-allowed"
            }`}
          >
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
