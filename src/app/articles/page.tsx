import { auth } from "@/auth";
import ArticlesList from "@/components/articleList";
// import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Articles",
// };

export default async function Articles() {
  const session = await auth();
  return (
    <ArticlesList session={session}/>
  )
}
