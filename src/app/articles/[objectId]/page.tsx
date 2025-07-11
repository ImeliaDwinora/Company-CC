import { Article } from "@/types/articles.type";
// import { Metadata } from "next";
import Image from "next/image";

// export async function generateStaticParams() {
//   const response = await fetch(`https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles`);
//   const data = (await response.json()) as Article[];
//   return data.map((item) => ({ id: item.objectId.toString().slice(0, 3) }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const id = params.id;
//   const response = await fetch(`https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${id}`);
//   const data = (await response.json()) as Article;

//   return {
//     title: data.title,
//     description: data.summary,
//     openGraph: {
//       images: [{ url: data.image }],
//     },
//   };
// }

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) {
  const id = (await params).objectId;

  const res = await fetch(
    `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${id}`,
    { cache: "no-store" }
  );

  const data: Article = await res.json();

  return (
    <main className="px-6 py-10 bg-amber-50 min-h-screen">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {data.title}
        </h1>
        <Image
          src={data.image}
          alt={data.title}
          width={300} // Ukuran lebih kecil
          height={100}
          className="rounded-xl object-cover w-full max-w-[500px] mx-auto"
        />
        <div className="text-sm text-gray-500 flex justify-between items-center">
          <span>By: {data.author}</span>
          <span>{new Date(data.createDate).toLocaleDateString()}</span>
        </div>


        <p className="text-gray-700 leading-relaxed text-justify mt-10">
          {data.articlesContent}
        </p>
      </article>
    </main>
  );
}
