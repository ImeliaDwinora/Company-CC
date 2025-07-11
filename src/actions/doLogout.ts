"use server"
import { signOut } from "@/auth";

export async function doLogout() {
  try {
    await signOut({
      redirect: false 
    });
    return {
      status: true
    }
  } catch (error) {
    return { status: false }
  }

}