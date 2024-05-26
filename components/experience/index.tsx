import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import Education from "./Education";

function page() {
  return (
    <section
      className="flex justify-center md:py-32 md:mt-32 md:mb-20"
      id="experience"
    >
      <Tabs defaultValue="experience" className="w-[500px] md:w-[750px]">
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
