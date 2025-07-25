"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useArticleStore } from "@/stores/contentStores";

export default function Create() {
  const [articleData, setArticleData] = useState({
    image: "",
    articlesContent: "",
    title: "",
    author: "",
    createDate: "",
    summary: "",
    slug:" "
  });

  const router = useRouter();
  const createArticle = useArticleStore((state) => state.createArticle);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      await createArticle(articleData); // Pakai zustand function
      toast.success("✅ Article has been added");
      router.push("/");

      // Reset form
      setArticleData({
        image: "",
        articlesContent: "",
        title: "",
        author: "",
        createDate: "",
        summary: "",
        slug:""
      });
    } catch (error: any) {
      toast.error(`❌ Error: ${error.message}`);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-50 px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create New Article
        </h1>

        {/* Title */}
        <div>
          <label htmlFor="articleTitle" className="block mb-1 font-medium text-gray-700">
            Article Title
          </label>
          <input
            type="text"
            id="articleTitle"
            placeholder="Enter article title"
            value={articleData.title}
            onChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block mb-1 font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            placeholder="Enter article author"
            value={articleData.author}
            onChange={(e) => setArticleData({ ...articleData, author: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="slug" className="block mb-1 font-medium text-gray-700">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            placeholder="Enter article slug"
            value={articleData.slug}
            onChange={(e) => setArticleData({ ...articleData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Summary */}
        <div>
          <label htmlFor="summary" className="block mb-1 font-medium text-gray-700">
            Article Summary
          </label>
          <input
            type="text"
            id="summary"
            placeholder="Enter article summary"
            value={articleData.summary}
            onChange={(e) => setArticleData({ ...articleData, summary: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="createDate" className="block mb-1 font-medium text-gray-700">
            Article Date
          </label>
          <input
            type="date"
            id="createDate"
            value={articleData.createDate}
            onChange={(e) => setArticleData({ ...articleData, createDate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="articleImage" className="block mb-1 font-medium text-gray-700">
            Article Image URL
          </label>
          <input
            type="text"
            id="articleImage"
            placeholder="Enter image URL"
            value={articleData.image}
            onChange={(e) => setArticleData({ ...articleData, image: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="articleContent" className="block mb-1 font-medium text-gray-700">
            Article Content
          </label>
          <textarea
            id="articleContent"
            placeholder="Enter article content"
            value={articleData.articlesContent}
            onChange={(e) =>
              setArticleData({ ...articleData, articlesContent: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Add New Article
        </button>
      </form>
    </main>
  );
}