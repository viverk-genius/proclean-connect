
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OPTIMO PROPRETÉ - Services de nettoyage professionnel</title>
        <meta name="description" content="OPTIMO PROPRETÉ - Spécialiste du nettoyage professionnel: entretien d'immeubles, ménage de bureaux et remise en état après chantier." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <CallToAction />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
