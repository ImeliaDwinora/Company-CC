import { auth } from "@/auth";
import ArticlesList from "@/components/articleList";

export default async function Articles() {
  const session = await auth();
  return (
    <ArticlesList session={session}/>
  )
}
