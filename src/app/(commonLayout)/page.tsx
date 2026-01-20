import { Button } from "@/components/ui/button";
import { blogService } from "@/service/blog.service";
import { userService } from "@/service/user.service";

export default async function Home() {
  const { data } = await blogService.getBlogPost();
  console.log(data);
  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
