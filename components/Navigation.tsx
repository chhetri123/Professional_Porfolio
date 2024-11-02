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
    <section className="fixed bottom-0 w-full sm:bottom-4 mb-1 md:mb-0 lg:mb-0 md:bottom-5 flex justify-center items-center z-50">
      <div className="inline-flex rounded-2xl sm:rounded-full border py-2 sm:py-3 px-2 sm:px-3 backdrop-blur-md shadow-xl bg-white/80 dark:bg-gray-900/80">
        {navigationItems.map(({ value, icon, src }) => (
          <Link href={src.startsWith("#") ? `./${src}` : src} key={value}>
            <div className="group relative px-2 sm:px-3 cursor-pointer">
              <div
                className={cn(
                  "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all",
                  pathName === src ||
                    (pathName.startsWith("/blog") && src === "/blog")
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : ""
                )}
              >
                {React.createElement(icon, {
                  className: "h-5 w-5 sm:h-6 sm:w-6",
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
