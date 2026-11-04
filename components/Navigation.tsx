"use client";

import {
  Code,
  Folder,
  GraduationCap,
  Home,
  Mail,
  User,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const HomeData = [
  {
    label: "Home",
    value: "Home",
    icon: Home,
    desc: "Home",
    src: "/",
  },
  {
    label: "About",
    value: "About",
    icon: User,
    desc: "About",
    src: "#about",
  },
  {
    label: "Skills",
    value: "Skills",
    icon: Code,
    desc: "Skills",
    src: "#skills",
  },
  {
    label: "Projects",
    value: "Projects",
    icon: Folder,
    desc: "Projects",
    src: "#projects",
  },
  {
    label: "Experience",
    value: "Experience",
    icon: GraduationCap,
    desc: "Experience",
    src: "#experience",
  },
  {
    label: "Contact",
    value: "Contact",
    icon: Mail,
    desc: "Contact",
    src: "#contact",
  },
];

const BlogData = [
  {
    label: "Home",
    value: "Home",
    icon: Home,
    desc: "Home",
    src: "/",
  },
  {
    label: "Blog",
    value: "Blog",
    icon: BookOpen,
    desc: "Blog",
    src: "/blog",
  },
];

export default function Navigation() {
  const pathName = usePathname();

  // Use different navigation items based on the current path
  const navigationItems = pathName.startsWith("/blog") ? BlogData : HomeData;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 flex justify-center items-center z-50 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:pb-5 pointer-events-none"
    >
      <div className="pointer-events-auto inline-flex max-w-full rounded-full border py-1.5 sm:py-2.5 px-1.5 sm:px-3 backdrop-blur-md shadow-lg bg-white/85 dark:bg-gray-900/85">
        {navigationItems.map(({ value, icon, src }) => (
          <Link
            href={src.startsWith("#") ? `./${src}` : src}
            key={value}
            aria-label={value}
            title={value}
          >
            <div className="group relative px-0.5 sm:px-2 cursor-pointer">
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200",
                  pathName === src ||
                    (pathName.startsWith("/blog") && src === "/blog")
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : ""
                )}
              >
                {React.createElement(icon, {
                  className: "h-5 w-5 sm:h-6 sm:w-6",
                  "aria-hidden": true,
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
