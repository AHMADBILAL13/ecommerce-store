import { client } from "../../sanity/lib/client";



export async function getProducts() {
    const query = `*[_type == "product"] | order(_createdAt asc) {
      _id,
      "image": image[0].asset->url,
      name,
      "slug":slug.current,
      price,
    }`;
  
    const res = client.fetch(query);
    return res;
  };