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
            {/* I’m Manish Chhetri, a passionate and results-driven web developer
            with a Bachelor's degree in Electronics, Communication, and
            Information Engineering from IOE Paschimanchal Campus. 
            I have a
            strong interest in cloud computing, microservices, and Artificial
            Intelligence, and I continuously explore technologies like Docker,
            Kubernetes, Machine Learning, NLP, Computer Vision, and IoT. I enjoy
            learning new skills to build secure and scalable solutions and
            mentoring junior developers whenever possible. To share knowledge
            and stay updated, I occasionally write blogs and create videos that
            might help others in their journey.
            
            Beyond technology, I’m an avid
            reader of Nepali literature, captivated by its storytelling. I also
            enjoy discussing the latest tech trends with friends and find
            inspiration through these conversations. In my free time, I like to
            relax by listening to music. */}
            <div className="space-y-3 md:space-y-4 font-medium">
              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                I am Manish Chhetri, a passionate and results-driven software
                developer with a Bachelor's degree in Electronics,
                Communication, and Information Engineering from{" "}
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
                I have a strong passion for cloud computing, microservices, and
                Artificial Intelligence. I enjoy diving deep into technologies
                like Docker and Kubernetes to build efficient and scalable
                systems. Additionally, I explore Machine Learning, Natural
                Language Processing, and Computer Vision to better understand
                AI’s capabilities. My interest also extends to the Internet of
                Things, where connectivity and data play a crucial role. By
                continuously learning and experimenting, I aim to stay at the
                cutting edge of technology and apply innovative solutions.
              </p>

              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                I enjoy learning new skills to build secure and scalable
                solutions and mentoring junior developers whenever possible. To
                share knowledge and stay updated, I occasionally write blogs and
                create videos that might help others in their journey.
              </p>

              <p className="text-xs md:text-sm lg:text-base leading-normal md:leading-normal">
                Beyond technology, I’m an avid reader of Nepali literature,
                captivated by its storytelling. I also enjoy discussing the
                latest tech trends with friends and find inspiration through
                these conversations. In my free time, I like to relax by
                listening to music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
