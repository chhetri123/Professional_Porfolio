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
import ContactPage from "@/components/contact";
export default function Home() {
  return (
    <>
      <section className="py-16 min-h-[80vh] animate_in  md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
        <div className="flex flex-col gap-4 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 ">
          <p className="text-2xl font-bold text-light-blue-700">Hey,</p>
          <p className="text-2xl md:text-5xl font-bold relative">
            I'm
            <span className="text-blue-500 ml-4 uppercase">Manish Chhetri</span>
          </p>
          <p className="text-1xl md:text-sm font-bold text-light-blue-500">
            <b>
              <i>Full Stack Developer | DevOps Developer </i>
            </b>
          </p>
          <p className="text-sm md:text-font-medium relative w-4/5">
            I am a <b>Full-Stack Developer</b> with knowledge of microservice
            architecture, cloud services, and a keen interest in machine
            learning. I am currently working in a Microservice Backend Position.
          </p>

          <PhoneSocial />

          <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5">
            <Link href={"#about"}>
              <Button
                variant="secondary"
                className="flex rounded-full gap-2 items-center"
              >
                <User className="text-lg" />
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

            <Link href="/blogs">
              <Button
                variant="secondary"
                className="flex rounded-full gap-2 items-center"
              >
                <FilePenLine className="text-lg" />
                My Blogs
              </Button>
            </Link>
            <ThemeSwitcher />
          </div>
        </div>

        <div>
          <NextImage
            src="/profile.png"
            width={""}
            height={""}
            alt="Pankaj Kumar"
            className="rounded-full w-60 h-60 md:w-80 md:h-80 shadow-lg"
          />
        </div>
      </section>

      <About />
      <Skills />
      <div className="w-4/5 mx-auto">
        <ProjectsPage />
      </div>
      <Experience />
      <ContactPage />
    </>
  );
}
