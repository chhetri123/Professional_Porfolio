"use client";

import NextImage from "../NextImage";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header - Smaller text on mobile */}
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          About Me
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2"></div>
        </h2>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image Container */}
          <div className="w-full lg:w-2/5">
            <div className="relative aspect-square w-[240px] sm:w-[280px] md:w-[320px] lg:max-w-[400px] mx-auto">
              <NextImage
                src="/intro_image.png"
                alt="Manish Chhetri"
                className="rounded-full shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-blue-600">
              Professional Summary
            </h3>

            <div className="space-y-3 md:space-y-4 font-medium">
              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                I am Manish Chhetri, a dedicated web developer with a Bachelor's
                degree in Electronics, Communication, and Information
                Engineering from{" "}
                <a
                  href="https://ioepas.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  IOE Paschimanchal Campus
                </a>
                .
              </p>

              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                Currently, I specialize as a Microservice backend developer,
                where I design, develop, containerize, and deploy
                production-level projects using AWS cloud services.
              </p>

              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                As a dedicated web developer with enthusiasm for learning new
                technology to enhance my problem-solving skills, I sometimes
                write blogs and make videos to stay updated and share my ideas
                with others, which might help them accomplish things in their
                journey. I love bringing my imagination to solve real-life
                problems.
              </p>

              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                Beyond the screen, I am an avid reader of Nepali literature,
                which captivates me with its storytelling. I find joy in
                discussing the latest tech topics with close friends, refreshing
                myself through these conversations. In my downtime, I enjoy
                listening to music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
