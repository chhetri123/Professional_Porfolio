import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

export const FrontendSkills = [
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "NextJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

export const BackendSkills = [
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    name: "Express JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  {
    name: "NestJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
];

export const DevOpsSkill = [
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Ansible",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  },
  {
    name: "Github Action",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
];

export const CloudServicesSkill = [
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
];

function SkillCategory({ skills }: { skills: any[] }) {
  return (
    <div className="my-5 flex flex-wrap gap-5 md:w-[900px]">
      {skills.map((skill, index) => (
        <div key={index}>
          <Button
            variant="secondary"
            className="p-3 h-12 rounded-full flex justify-center drop-shadow-sm items-center gap-2"
          >
            <NextImage
              src={skill?.icon}
              width={30}
              height={30}
              alt={skill?.name}
              className=""
            />
            <span className="animate_in">{skill?.name}</span>
          </Button>
        </div>
      ))}
    </div>
  );
}

export function Frontend() {
  return <SkillCategory skills={FrontendSkills} />;
}

export function Backend() {
  return <SkillCategory skills={BackendSkills} />;
}

export function DevOps() {
  return <SkillCategory skills={DevOpsSkill} />;
}
export function CloudServices() {
  return <SkillCategory skills={CloudServicesSkill} />;
}
