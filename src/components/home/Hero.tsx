
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Solutions de nettoyage professionnel
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              L'excellence au service de votre <span className="text-primary">propreté</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              OPTIMO PROPRETÉ vous offre des services de nettoyage professionnel adaptés à vos besoins. Nous prenons soin de vos espaces pour vous permettre de vous concentrer sur l'essentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-optimo-blue-light">
                <Link to="/devis">Demander un devis gratuit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Service de nettoyage professionnel" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-primary/20 rounded-full z-0" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
