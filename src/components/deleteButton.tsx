"use client";

import { useArticleStore } from "@/stores/contentStores";
import { toast } from "react-toastify";

export default function DeleteButton({
  slug,
}: {
  slug: string;
}) {
  const { deleteArticle, articles } = useArticleStore();

  async function handleDelete(slug: string) {
    try {
      const articleToDelete = articles.find(article => article.slug === slug);
      
      if (!articleToDelete) {
        toast.error("❌ Article not found");
        return;
      }

      await deleteArticle(articleToDelete.objectId);
      
      toast.success("✅ Article has been deleted!");
    } catch (error) {
      console.error(error);
      toast.error("❌ Error deleting article.");
    }
  }

  return (
    <button
      className="border p-2 rounded-2xl bg-amber-600 text-white hover:bg-amber-700"
      onClick={() => handleDelete(slug)}
    >
      Delete
    </button>
  );
}