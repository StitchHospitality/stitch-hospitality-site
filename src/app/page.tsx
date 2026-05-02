import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import CTA from "@/components/CTA";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { TESTIMONIALS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  const [testimonials, services] = await Promise.all([
    client.fetch(TESTIMONIALS_QUERY).catch(() => []),
    client.fetch(SERVICES_QUERY).catch(() => []),
  ]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services sanityServices={services} />
        <HowItWorks />
        <Results sanityTestimonials={testimonials} />
        <CTA />
        <IntakeForm />
      </main>
      <Footer />
    </>
  );
}
