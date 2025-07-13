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
  slug: string;
};

// Tipe data untuk new article tanpa ID dan created (karena itu otomatis oleh Backendless)
export type NewArticle = Omit<Article, "objectId" | "created">;

type ArticleStore = {
  articles: Article[];
  dataLength: number;
  loading: boolean;
  error: string | null;
  fetchArticles: (pageSize?: number, offset?: number) => Promise<void>;
  createArticle: (article: NewArticle) => Promise<void>;
  updateArticle: (id: string, article: Partial<NewArticle>) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
};

export const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  loading: false,
  dataLength: 0,
  error: null,

  fetchArticles: async (pageSize?: number, offset?: number) => {
    set({ loading: true, error: null });
    try {
      const url = new URL(
        "https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles"
      );
      url.searchParams.append('pageSize', "100");

      // hitung total panjang data
      const countUrl = new URL(url.toString());
      const countRes = await fetch(countUrl.toString());
      const dataCount: Article[] = await countRes.json();
      const totalCount = dataCount.length;
      console.log(totalCount);

      set({ dataLength: totalCount });
      url.searchParams.delete('pageSize');

      // Then fetch paginated data
      if (pageSize !== undefined) {
        url.searchParams.append('pageSize', pageSize.toString());
      }
      if (offset !== undefined) {
        url.searchParams.append('offset', offset.toString());
      }

      const res = await fetch(url.toString());
      const data: Article[] = await res.json();
      set({
        articles: data,
        dataLength: totalCount || 0
      });

    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

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
      set((state) => ({
        articles: [...state.articles, newArticle],
        dataLength: state.dataLength + 1 // Increment total count
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },

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
        // No change to dataLength for updates
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },

  deleteArticle: async (id) => {
    try {
      await fetch(
        `https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${id}`,
        { method: "DELETE" }
      );
      set((state) => ({
        articles: state.articles.filter((a) => a.objectId !== id),
        dataLength: state.dataLength - 1 // Decrement total count
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));