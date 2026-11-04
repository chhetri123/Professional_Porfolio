import { Github, LucideExternalLink } from "lucide-react";
import Link from "next/link";

import { ProjectData } from "./constant";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";

function ProjectsPage() {
  return (
    <section
      className="reveal flex flex-col items-center py-14 md:py-20 px-1"
      id="projects"
    >
      <SectionHeading
        eyebrow="Practice"
        title="Projects"
        description="Hands-on builds where I learned by doing."
      />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {ProjectData.map(
          ({ title, live, description, github, techstack }, index) => (
            <Card key={index} className="shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="p-5 sm:p-6 flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {live ? (
                      <Link href={live} target="_blank">
                        <Button variant="secondary">
                          <LucideExternalLink size={18} className="mr-1" /> View
                          Live
                        </Button>
                      </Link>
                    ) : null}
                    <Link href={github} target="_blank">
                      <Button variant="outline">
                        <Github size={18} className="mr-1" /> Github
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {techstack.map((tech, index) => (
                    <Badge key={index} variant={"outline"}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;
