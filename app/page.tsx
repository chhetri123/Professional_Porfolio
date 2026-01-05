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
        className="py-8 sm:py-12 md:py-16 min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] 
        animate_in flex items-center flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center"
      >
        <div
          className="flex flex-col gap-3 sm:gap-4 text-left w-[90%] sm:w-4/5 lg:w-1/2 2xl:w-1/3 
          mx-auto lg:mx-6 xl:mx-0"
        >
          <p className="text-xl sm:text-2xl font-bold text-light-blue-700">
            Hey,
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold relative">
            I'm
            <span className="text-blue-500 ml-2 sm:ml-4 uppercase break-words">
              Manish Chhetri
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-sm font-bold text-light-blue-500">
            <b>
              <i>Full Stack Developer </i>
            </b>
          </p>
          <p className="text-xs sm:text-sm md:text-base font-medium relative w-full sm:w-4/5">
            I am a <b>Full-Stack Developer</b> with knowledge of microservice
            architecture, cloud services, and a keen interest in machine
            learning.
          </p>

          <PhoneSocial />

          <div className="flex flex-wrap justify-center md:justify-normal gap-2 sm:gap-4 md:gap-6 mt-3 sm:mt-5">
            <Link href={"#about"}>
              <Button
                variant="secondary"
                className="flex rounded-full gap-1 sm:gap-2 items-center text-sm sm:text-base px-3 sm:px-4"
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
                className="flex rounded-full gap-2 items-center relative animate-pulse
                  after:absolute after:inset-0 after:z-[-1] after:rounded-full
                  after:bg-gradient-to-r after:from-blue-400 after:to-purple-500
                  after:p-[2px] after:animate-border-glow"
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

        <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80">
          <NextImage
            src="/profile.png"
            width={""}
            height={""}
            alt="Pankaj Kumar"
            className="rounded-full w-full h-full shadow-lg"
          />
        </div>
      </section>

      <About />
      <Skills />
      <div className="w-[90%] sm:w-4/5 mx-auto">
        <ProjectsPage />
      </div>
      <Experience />
      <ResearchAchievements />
      <PhotoGallery />
      <ContactPage />
    </>
  );
}
