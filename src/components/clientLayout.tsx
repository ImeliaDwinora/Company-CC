// src/components/clientLayout.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import NavbarDefault from "@/components/navbardefault";
import { ToastContainer } from "react-toastify";
import { Session } from "next-auth";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function ClientLayout({ children, session }: Props) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <SessionProvider session={session}>
      {!isAuthPage && <NavbarDefault session={session} />}
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </SessionProvider>
  );
}
