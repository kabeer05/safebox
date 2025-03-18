"use client";

import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/atoms";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Dashboard() {
  const [user] = useAtom(userAtom);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/v1/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        // If the server responds with an error, handle it properly
        const data = await response.json();
        throw new Error(data.message || "Logout failed");
      }

      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err: any) {
      toast.error(err.message || "Failed to logout");
    }
  };

  return (
    <main className="min-h-screen">
      <Toaster />
      <Button variant={"link"}>
        <Link
          href="/generate"
          className="w-full h-full flex items-center justify-center"
        >
          Check out our password generator
        </Link>
      </Button>
    </main>
  );
}
