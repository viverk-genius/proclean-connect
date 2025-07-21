
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à confier vos besoins de nettoyage à des professionnels ?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Obtenez un devis personnalisé gratuit en quelques clics et découvrez comment OPTIMO PROPRETÉ peut transformer vos espaces.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/devis">Demander un devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-primary hover:bg-white/10">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
