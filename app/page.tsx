import { Hero } from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative text-white bg-neutral-950">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}