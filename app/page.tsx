import Link from "next/link";
import { File, FilePenLine, User } from "lucide-react";
import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { PhoneSocial } from "@/components/Social";
import About from "@/components/about";
import ProjectsPage from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import ResearchAchievements from "@/components/research-achievements";
import PhotoGallery from "@/components/photo-gallery";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <>
      <section
        className="px-4 py-10 sm:py-14 md:py-16 min-h-[75vh] md:min-h-[80vh]
        animate_in flex items-center flex-col-reverse lg:flex-row gap-8 sm:gap-10 lg:gap-14 justify-center"
      >
        <div
          className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left w-full max-w-xl lg:max-w-lg xl:max-w-xl
          items-center lg:items-start"
        >
          <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
            Hey,
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif relative">
            I&apos;m
            <span className="text-blue-600 dark:text-blue-400 ml-2 sm:ml-3 break-words">
              Manish Chhetri
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-muted-foreground">
            <b>
              <i>Software Engineer</i>
            </b>
          </p>
          <p className="text-sm sm:text-base md:text-lg font-medium relative w-full leading-relaxed text-muted-foreground">
            I am a <b>Software Engineer</b> focused on microservice architecture, cloud-native technologies, and reliable AI systems.
          </p>

          <PhoneSocial />

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mt-3 sm:mt-5">
            <Link href={"#about"}>
              <Button
                variant="secondary"
                className="flex rounded-full gap-2 items-center text-sm sm:text-base px-4"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                About Me
              </Button>
            </Link>
            <Link href="/resume">
              <Button
                variant="secondary"
                className="flex rounded-full gap-2 items-center"
              >
                <File className="text-lg" />
                Resume
              </Button>
            </Link>

            <Link href="/blog">
              <Button
                variant="secondary"
                className="flex rounded-full gap-2 items-center relative ring-1 ring-blue-400/60 hover:ring-blue-500 transition-shadow"
              >
                <FilePenLine className="text-lg" />
                My Blogs
                <span className="absolute -right-2 -top-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              </Button>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0">
          <NextImage
            src="/profile.png"
            width={""}
            height={""}
            alt="Manish Chhetri"
            className="rounded-full w-full h-full object-cover shadow-lg ring-4 ring-white/70 dark:ring-white/10"
          />
        </div>
      </section>

      <About />
      <Skills />
      <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto">
        <ProjectsPage />
      </div>
      <Experience />
      <ResearchAchievements />
      <PhotoGallery />
      <ContactPage />
    </>
  );
}
