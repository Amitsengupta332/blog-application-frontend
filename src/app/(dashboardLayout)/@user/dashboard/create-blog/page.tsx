import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";

import { blogService } from "@/service/blog.service";


const CreateBlogPage = async () => {
  const { data } = await blogService.getBlogPosts();
  console.log(data);
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <CreateBlogFormClient />

      {/* <CreateBlogFormServer /> 
      {data.data.map((item: BlogPost) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
    </div>
  );
};

export default CreateBlogPage;
