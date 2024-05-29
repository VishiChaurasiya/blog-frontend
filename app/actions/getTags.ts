export interface Tag {
  _id: string;
  slug: string;
  title: string;
}

const getTags = async (): Promise<Tag[]> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_URL}/blog/tag`;

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

    const data = await response.json();
    return data as Tag[];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getTags;
