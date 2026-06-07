import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Products from "@/components/products";
import About from "@/components/about";
import Founder from "@/components/founder";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
