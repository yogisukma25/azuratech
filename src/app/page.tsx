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
      <SectionHeading data={sectionHeading} />
      <Benefits data={benefitsData} />
      <ContentWithImage data={contentWithImage}/>
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

const benefitsData = {
  id: 1,
  __component: "layout.content-items",
  heading: "Why Choose Us?",
  text: "We are a team of experienced professionals who are passionate about what we do. We are committed to providing high-quality services to our clients. Here are some reasons why you should choose us.",
  imageRight: null,
  image: {
    id: 3,
    url: "/img/benefit-one.png",
    alternativeText: null,
    name: "benefit-one.png",
  },
  item: [
    {
      id: 1,
      text: "We are committed to providing high-quality services to our clients.",
      heading: "Quality Service",
      icon: "CHECK",
    },
    {
      id: 2,
      text: "We are a team of experienced professionals who are passionate about what we do.",
      heading: "Experienced Professionals",
      icon: "CHECK",
    },
    {
      id: 3,
      text: "We are committed to providing high-quality services to our clients.",
      heading: "Customer Satisfaction",
      icon: "CHECK",
    },
  ],
};


const contentWithImage = {
  id: 1,
  __component: "layout.content-image",
  heading: "Why Choose Us?",
  text: "We are a team of experienced professionals who are passionate about what we do. We are committed to providing high-quality services to our clients. Here are some reasons why you should choose us.",
  imageRight: true,
  image: {
    id: 4,
    url: "/img/benefit-two.png",
    alternativeText: null,
    name: "benefit-two.png",
  },
};