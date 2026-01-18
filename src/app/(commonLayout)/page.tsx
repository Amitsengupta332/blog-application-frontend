import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  const res = await fetch("http://localhost:5000/api/get-session", {
    headers: {
      cookie: cookieStore.toString(),
    },
    cache: 'no-store'
  });
  const session = await res.json();

  console.log(session);

  // console.log(await res.json());
  // const session = await authClient.getSession();

  // console.log(session);

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
