import { env } from "@/env";

const API_URL = env.API_URL;

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
}
export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`);
      console.log(res)
      const data = res.json();

       // This is an example
      //   if(data.success) {
      //     return
      //   }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
