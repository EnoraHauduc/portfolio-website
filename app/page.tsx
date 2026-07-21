import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <h2 className="font-display text-4xl sm:text-5xl">Contact</h2>
        <p className="mt-4 max-w-xl font-serif text-lg italic text-neutral-600">
          Have a question or an idea worth discussing? Send me a message.
        </p>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
