import { Button } from "@/components/ui/button";
import { userService } from "@/service/user.service";

export default async function Home() {
  const {data, error} = await userService.getSession();

  console.log(data)
  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
