"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { Article } from "@/types/articles.type";
import DeleteButton from "@/components/deleteButton";

type Props = {
  session: Session | null;
};

const PAGE_SIZE = 6;
const MAX_PAGE = 3;

export default function ArticlesList({ session }: Props) {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const status = session ? "authenticated" : "unauthenticated";
  const user = session?.user as { role?: string };

  useEffect(() => {
    async function getArticlesData() {
      setLoading(true);
      try {
        const offset = (page - 1) * PAGE_SIZE;
        const response = await fetch(
          `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles?pageSize=${PAGE_SIZE}&offset=${offset}`
        );
        const articles = await response.json();
        setData(articles);
      } catch (error) {
        console.error("Failed to fetch:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    getArticlesData();
  }, [page]);

  return (
    <main className="min-h-screen px-6 py-10 bg-amber-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#2E4057]">Articles</h1>
          {status === "authenticated" && user.role === "ADMIN" && (
            <Link
              href={"/articles/create"}
              className="px-5 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 text-sm shadow-md transition"
            >
              + Add New Article
            </Link>
          )}
        </div>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">⌛ Loading articles...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.map((article) => (
                <article
                  key={article.objectId}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <h2 className="font-semibold text-xl text-[#2E4057] line-clamp-1">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {status === "authenticated" && user.role === "ADMIN" && (
                        <>
                          <Link
                            href={`/articles/edit/${article.objectId}`}
                            className="border p-2 rounded-2xl bg-sky-500 text-white hover:bg-sky-600"
                          >
                            Edit
                          </Link>
                          <DeleteButton
                            objectId={article.objectId}
                            setData={setData}
                          />
                        </>
                      )}
                      <Link
                        href={`/articles/${article.objectId}`}
                        className="border p-2 rounded-2xl bg-emerald-500 text-white hover:bg-emerald-600"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-6 pt-10">
              <button
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              >
                ← Previous
              </button>

              <span className="text-gray-700 font-medium text-sm">
                Page {page} of {MAX_PAGE}
              </span>

              <button
                onClick={() => setPage((prev) => Math.min(MAX_PAGE, prev + 1))}
                disabled={page === MAX_PAGE}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
