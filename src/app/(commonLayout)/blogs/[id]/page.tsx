//! this can be used in client component
// import { useParams } from "next/navigation";

//* now server component e fetch korar upay

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  //  client component e fetch korar upay
  // const { id } = useParams();
  return <div>This is a dynamic blog page {id} </div>;
}
