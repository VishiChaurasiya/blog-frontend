import dayjs from "dayjs";

export interface Post {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  author: string;
  tags: {
    _id: string;
    slug: string;
    title: string;
  }[];
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const getPosts = async (
  queryParams?: Record<string, string>
): Promise<Post[]> => {
  let apiUrl = `${process.env.NEXT_PUBLIC_URL}/blog/post?_sort=createdAt&_order=desc`;

  if (queryParams) {
    const queryString = new URLSearchParams(queryParams).toString();
    apiUrl += `?${queryString}`;
  }

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = (await response.json()) as Post[];

    // Convert createdAt and updatedAt to human-readable format
    const formattedData = data.map((post) => ({
      ...post,
      createdAt: dayjs(post.createdAt).format("MMM DD, YYYY"),
      updatedAt: dayjs(post.updatedAt).format("MMM DD, YYYY"),
    }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getPosts;
