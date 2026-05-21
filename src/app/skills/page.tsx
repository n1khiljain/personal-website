import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  const skillSections = [
    {
      title: "Languages",
      items: portfolioConfig.skills.programmingLanguages,
    },
    {
      title: "ML / Robotics",
      items: portfolioConfig.skills.mlRobotics,
    },
    {
      title: "Web",
      items: portfolioConfig.skills.web,
    },
    {
      title: "Tools & Infra",
      items: portfolioConfig.skills.toolsInfra,
    },
    {
      title: "Areas of Interest",
      items: portfolioConfig.skills.areasOfInterest,
    },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            I focus on software engineering for robotics: building reliable
            systems across perception, learning, simulation, controls, and
            infrastructure. 
          </p>
        </FramerWrapper>
        {skillSections.map((section, index) => (
          <FramerWrapper
            key={section.title}
            y={100}
            delay={0.3 + index * 0.02}
            className="block w-full"
          >
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              {section.title}
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={section.items} />
            </div>
          </FramerWrapper>
        ))}
      </div>
    </div>
  );
};

export default skillPage;
