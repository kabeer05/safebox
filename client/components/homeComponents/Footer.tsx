import Link from "next/link";
import { LockKeyhole } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-3 lg:max-w-sm">
          <div className="flex items-center gap-2">
            <LockKeyhole className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">SafeBox</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Secure your digital life with SafeBox, the modern password manager
            that keeps your credentials safe and accessible across all your
            devices.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Extensions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-4 py-6 px-4 text-center md:flex-row md:items-center md:justify-between md:px-6 md:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SafeBox. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 md:justify-end">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
