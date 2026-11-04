import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import Education from "./Education";
import SectionHeading from "@/components/SectionHeading";

function page() {
  return (
    <section
      className="reveal flex flex-col items-center px-4 sm:px-6 py-14 md:py-20"
      id="experience"
    >
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        description="Where I have worked and studied."
      />
      <Tabs defaultValue="experience" className="w-full max-w-[850px]">
        <TabsList className="grid w-full rounded-full grid-cols-2">
          <TabsTrigger className="rounded-full" value="experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className="rounded-full" value="education">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Experience />
        </TabsContent>
        <TabsContent value="education">
          <Education />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default page;
