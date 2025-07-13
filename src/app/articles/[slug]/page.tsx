import { useArticleStore } from "@/stores/contentStores";
import { Article } from "@/types/articles.type";
import Image from "next/image";

export async function generateStaticParams() {
  const response = await fetch(
    `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles`
  );
  const data = (await response.json()) as Article[];

  return data.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(
    `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles?where=slug%3D%27${slug}%27`
  );
  const data = (await response.json()) as Article[];

  return {
    title: data[0].title,
    description: data[0].summary,
    openGraph: {
      images: [{ url: data[0].image }],
    },
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const article = await useArticleStore.getState().getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="px-6 py-10 bg-amber-50 min-h-screen">
        <div className="text-center text-red-500 font-semibold">
          Artikel tidak ditemukan.
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-10 bg-amber-50 min-h-screen">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {article.title}
        </h1>
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={600}
            height={300}
            className="rounded-xl object-cover w-full max-w-[500px] mx-auto"
          />
        )}
        <div className="text-sm text-gray-500 flex justify-between items-center">
          <span>By: {article.author}</span>
          <span>{new Date(article.createDate).toLocaleDateString()}</span>
        </div>

        <p className="text-gray-700 leading-relaxed text-justify mt-10">
          {article.articlesContent}
        </p>
      </article>
    </main>
  );
}
