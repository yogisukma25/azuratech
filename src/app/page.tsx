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
      <Hero />
      <Logos />
      <SectionHeading />
      <Benefits />
      <SectionHeading />
      <ContentWithImage />
      <SectionHeading />
      <Video />
      <SectionHeading />
      <Testimonials />
      <SectionHeading />
      <Faq />
      <Cta />
    </Container>
  );
}
