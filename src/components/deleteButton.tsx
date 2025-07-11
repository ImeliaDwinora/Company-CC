"use client";

import { Article } from "@/types/articles.type";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export default function DeleteButton({
  objectId,
  setData,
}: {
  objectId: string;
  setData: Dispatch<SetStateAction<Article[] | null>>;
}) {
  async function handleDelete(id: string) {
    try {
      await fetch(
        `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${objectId}`,
        { method: "DELETE" }
      );
      setData((previous) => {
        if (previous) {
          return previous.filter((article) => article.objectId !== id);
        }
        return null;
      });
      toast.success("✅ Article has been deleted!");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to delete article.");
    }
  }

  return (
    <button
      className="border p-2 rounded-2xl bg-amber-600 text-white hover:bg-amber-700"
      onClick={() => handleDelete(objectId)}
    >
      Delete
    </button>
  );
}
