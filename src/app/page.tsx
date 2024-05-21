import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { SectionHeading } from "@/components/SectionHeading";
import { Benefits } from "@/components/Benefits";
import { ContentWithImage } from "@/components/ContentWithImage";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

export default function Home() {
  return (
    <Container>
      <Hero data={heroData} />
      <Logos />
      <SectionHeading data={sectionHeading} />
      <Benefits />
      <SectionHeading data={sectionHeading} />
      <ContentWithImage />
      <SectionHeading data={sectionHeading} />
      <Video />
      <SectionHeading data={sectionHeading} />
      <Testimonials />
      <SectionHeading data={sectionHeading} />
      <Faq />
      <Cta />
    </Container>
  );
}

const heroData = {
  id: 1,
  __component: "layout.hero",
  heading: "Free Landing Page Template for startups",
  text: "Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.",
  cta: {
    id: 7,
    href: "https://github.com/PaulBratslavsky/next-strapi-template-starter-code",
    text: "Starter Code",
    external: true,
  },
  image: {
    id: 2,
    url: "/img/hero.png",
    alternativeText: "hero image",
    name: "hero.png",
  },
};

const sectionHeading = {
  id: 1,
  __component: "layout.section-heading",
  preHeading: "Section Pre Heading",
  heading: "Section Heading",
  text: "Section Text Description",
};
