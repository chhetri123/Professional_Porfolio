"use client";

import NextImage from "../NextImage";

export default function About() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center mt-28 mb-28 md:py-20  pb-10 h-fullscreen"
      id="about"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center border-b-2 border-blue-600 pb-4 mt-2 mb-5">
          About Me
        </h1>
        <div className="flex items-center justify-center animate_in p-6 md:w-4/5 mr-10">
          <div className="w-1/2 relative flex justify-end">
            <NextImage
              src="/myimage2.png"
              alt="Pankaj Kumar"
              className="rounded-full w-3/4 h-auto md:w-3/4 md:auto ml-[20%]"
            />
          </div>

          <div className="text-justify animate_in p-6 md:w-1/2">
            <div className="ml-[10%] mt-[-5%]">
              <h1 className="text-lg font-bold pb-4 mt-2 mb-2">
                Professional Summary
              </h1>
              <p className="text-sm md:text-sm">
                I am Manish Chhetri, a dedicated web developer with a Bachelor's
                degree in Electronics, Communication, and Information
                Engineering from{" "}
                <a href="https://ioepas.edu.np/" target="__blank">
                  <b>
                    <i>IOE Paschimanchal Campus</i>
                  </b>
                </a>
                . Currently, I specialize as a Microservice backend developer,
                where I design, develop, containerize, and deploy
                production-level projects using AWS cloud services.
                <br />
                <br />
                As a dedicated web developer with enthusiasm for learning new
                technology to enhance my problem-solving skills, I sometimes
                write blogs and make videos to stay updated and share my ideas
                with others, which might help them accomplish things in their
                journey. I love bringing my imagination to solve real-life
                problems.
                <br />
                <br />
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
