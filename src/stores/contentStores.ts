// stores/articleStore.ts
import { create } from "zustand";

// Type untuk satu artikel
export type Article = {
  objectId: string;           // dari Backendless sebagai ID unik
  title: string;
  articlesContent: string;
  image: string;
  created: number;            // timestamp dari Backendless
  author: string;
  summary: string;
  createDate: string;         // string format tanggal
};

// Tipe data untuk new article tanpa ID dan created (karena itu otomatis oleh Backendless)
export type NewArticle = Omit<Article, "objectId" | "created">;

type ArticleStore = {
  articles: Article[];
  loading: boolean;
  error: string | null;
  fetchArticles: () => Promise<void>;
  createArticle: (article: NewArticle) => Promise<void>;
  updateArticle: (id: string, article: Partial<NewArticle>) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
};

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  loading: false,
  error: null,

  // Fetch semua artikel
  fetchArticles: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        "https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles"
      );
      const data: Article[] = await res.json();
      set({ articles: data });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Tambah artikel baru
  createArticle: async (article) => {
    try {
      const res = await fetch(
        "https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        }
      );
      const newArticle: Article = await res.json();
      set((state) => ({ articles: [...state.articles, newArticle] }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },

  // Update artikel berdasarkan ID
  updateArticle: async (id, article) => {
    try {
      const res = await fetch(
        `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        }
      );
      const updated: Article = await res.json();
      set((state) => ({
        articles: state.articles.map((a) => (a.objectId === id ? updated : a)),
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },

  // Hapus artikel
  deleteArticle: async (id) => {
    try {
      await fetch(
        `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${id}`,
        { method: "DELETE" }
      );
      set((state) => ({
        articles: state.articles.filter((a) => a.objectId !== id),
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));
