"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useArticleStore } from "@/stores/contentStores"; 

interface ArticleData {
  image: string;
  articlesContent: string;
  title: string;
  author: string;
  createDate: string;
  summary: string;
  slug: string;
}

export default function UpdateForm({ slug }: { slug: string }) {
  const { register, handleSubmit, reset } = useForm<ArticleData>({
    defaultValues: {
      image: "",
      articlesContent: "",
      title: "",
      author: "",
      createDate: "",
      summary: "",
      slug: ""
    },
  });

  const router = useRouter();
  const [objectId, setObjectId] = useState<string | null>(null);

  const updateArticle = useArticleStore((state) => state.updateArticle); 

  useEffect(() => {
    async function getArticleData() {
      try {
        const response = await fetch(
          `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles?where=slug%3D%27${slug}%27`
        );

        if (!response.ok) throw new Error("Failed to fetch article data");

        const data = await response.json();
        console.log("DATA FROM SLUG GET:", data);

        if (data.length === 0) {
          toast.error("❌ Article not found.");
          return;
        }

        reset(data[0]);
        setObjectId(data[0].objectId);
      } catch (error) {
        toast.error("❌ Failed to load article data.");
        console.error(error);
      }
    }

    getArticleData();
  }, [slug, reset]);

  const onSubmit = async (formData: ArticleData) => {
    try {
      if (!objectId) {
        toast.error("❌ Cannot update: No article found.");
        return;
      }

      await updateArticle(objectId, formData); // ✅ PAKAI ZUSTAND di sini
      toast.success("✅ Article updated successfully!");
      router.push("/");
    } catch (error) {
      toast.error("❌ Update error.");
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-amber-50 px-4 py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Update Article
        </h1>

        <div>
          <label htmlFor="title" className="block font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            {...register("title")}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Article title"
          />
        </div>

        <div>
          <label htmlFor="author" className="block font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            id="author"
            {...register("author")}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Article author"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block font-medium text-gray-700 mb-1">
            Slug
          </label>
          <input
            id="slug"
            {...register("slug")}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Article slug"
          />
        </div>

        <div>
          <label htmlFor="summary" className="block font-medium text-gray-700 mb-1">
            Summary
          </label>
          <input
            id="summary"
            {...register("summary")}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Short summary"
          />
        </div>

        <div>
          <label htmlFor="createDate" className="block font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            id="createDate"
            type="date"
            {...register("createDate")}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="image" className="block font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <textarea
            id="image"
            {...register("image")}
            className="w-full px-4 py-2 border rounded-lg resize-y"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label htmlFor="articlesContent" className="block font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="articlesContent"
            {...register("articlesContent")}
            className="w-full px-4 py-2 border rounded-lg resize-y min-h-[100px]"
            placeholder="Article content"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Update Article
        </button>
      </form>
    </main>
  );
}
