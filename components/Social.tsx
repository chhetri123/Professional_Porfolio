import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NextImage from "./NextImage";

export default function Social() {
  return (
    <section className="md:fixed xl:bottom-40 xl:left-16 2xl:bottom-80 2xl:left-24 top-1/2 transform -translate-y-1/2 hidden lg:flex lg:flex-col gap-3 z-20">
      {Data.map((item, index) => {
        return (
          <TooltipProvider key={index}>
            <Link href={item.link} passHref={true} target="_blank">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <NextImage
                      src={item.icon}
                      alt={item.tooltip}
                      width={24}
                      height={24}
                      className={"fill-current text-gray-800"}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        );
      })}
    </section>
  );
}

export const PhoneSocial = () => {
  return (
    <div className="flex flex-row justify-center space-x-5 mt-2 sm:hidden">
      {Data.map((item, index) => {
        return (
          <TooltipProvider key={index}>
            <Link href={item.link} passHref={true} target="_blank">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <NextImage
                      src={item.icon}
                      alt={item.tooltip}
                      width={24}
                      height={24}
                      className={"fill-current text-gray-800"}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export const Data = [
  {
    link: "https://www.linkedin.com/in/chhetri123/",
    icon: "https://www.svgrepo.com/show/475661/linkedin-color.svg",
    tooltip: "Connect On Linkedin",
  },
  {
    link: "https://github.com/chhetri123",
    icon: "/github-color.svg",
    tooltip: "Connect On Github",
  },
  {
    link: "https://scholar.google.com/citations?user=sn5n3ikAAAAJ",
    icon: "/google-scholar.svg",
    tooltip: "Follow On Google Scholar",
  },
  {
    link: "mailto:hsinam12man34@gmail.com",
    icon: "/gmail.svg",
    tooltip: "Mail Us",
  },
  {
    link: "https://www.youtube.com/@inventory0",
    icon: "/youtube.svg",
    tooltip: "check out latest videos",
  },
];
