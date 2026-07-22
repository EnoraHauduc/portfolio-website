import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import SpeakingSection from "@/components/SpeakingSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <PublicationsSection />
      <SpeakingSection />
      <ExperienceSection />
      <BlogSection />
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <h2 className="font-display text-4xl sm:text-5xl">Contact</h2>
        <p className="mt-4 max-w-xl font-serif text-lg italic text-neutral-600">
          Have a question or an idea worth discussing? Send me a message.
        </p>
        <a
          href="https://www.linkedin.com/in/enorahauduc/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full border-2 border-black px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-black hover:text-paper"
        >
          Connect on LinkedIn
        </a>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
