"use client";

import { doLogout } from "@/actions/doLogout";
import { useRouter } from "next/navigation";


export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await doLogout();
    if (response.status) {
      router.push("/auth/sign-in");
      router.refresh()
    }
  };

  return (
    <button onClick={handleLogout} className="hover:text-white">
      Logout
    </button>
  );
}