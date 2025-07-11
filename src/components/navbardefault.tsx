"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth"; // ✅ import type-nya

import LogoutButton from "./logoutButton";

type Props = {
  session: Session | null;
};

export default function NavbarDefault({ session }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <nav className="bg-[#B17F59] py-4 px-6 flex justify-between items-center">
      {/* Kiri: Logo dan Tombol Navigasi */}
      <div className="flex items-center gap-4">
        {isHome && (
          <Link href="/" className="text-[#D5E2B6] text-xl font-cherry">
            Hello Life
          </Link>
        )}

        {!isHome && (
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => router.back()}
              className="bg-[#D5E2B6] text-[#B17F59] px-3 py-1 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              ⮜ Back
            </button>
            <Link
              href="/"
              className="bg-[#D5E2B6] text-[#B17F59] px-3 py-1 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              🏠︎ Home
            </Link>
          </div>
        )}
      </div>

      {/* Kanan: Login / Logout */}
      <ul className="flex gap-6 text-[#D5E2B6] font-cherry items-center">
        {!session ? (
          <li>
            <Link href="/auth/sign-in" className="hover:text-white">
              Login
            </Link>
          </li>
        ) : (
          <>
            <li>
              <span className="text-white">Welcome, {session.user?.name}</span>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
