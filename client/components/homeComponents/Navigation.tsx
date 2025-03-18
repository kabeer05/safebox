import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LockKeyhole } from "lucide-react";

export default function Navigation() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <LockKeyhole className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">SafeBox</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Team
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
        </nav>
        <div className="ml-auto flex gap-2 md:ml-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Link
              className="w-full h-full flex items-center justify-center"
              href="/auth"
            >
              Login
            </Link>
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Link
              className="w-full h-full flex items-center justify-center"
              href="/auth"
            >
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
