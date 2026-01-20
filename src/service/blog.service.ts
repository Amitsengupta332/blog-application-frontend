import { env } from "@/env";

const API_URL = env.API_URL;
export const blogService = {
  getBlogPost: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`);
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
