import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks.facebook,
      icon: "logos:facebook",
    },
    {
      name: "Twitter",
      link: portfolioConfig.socialLinks.twitter,
      icon: "prime:twitter",
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: "skill-icons:linkedin",
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: "mdi:github",
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              <Icon icon={itm.icon} className="h-5 w-5" />
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
