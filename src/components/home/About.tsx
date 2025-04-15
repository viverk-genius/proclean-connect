
import { motion } from "framer-motion";
import { ShieldCheck, Award, ThumbsUp } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    description: "Notre équipe expérimentée garantit un service de qualité dans les délais convenus, à chaque intervention."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous utilisons des produits et des techniques de pointe pour des résultats impeccables qui dépassent vos attentes."
  },
  {
    icon: ThumbsUp,
    title: "Confiance",
    description: "Nous établissons des relations durables basées sur la transparence, l'écoute et le respect de vos exigences."
  }
];

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <SectionTitle 
              title="Qui sommes-nous ?" 
              subtitle="OPTIMO PROPRETÉ, votre partenaire privilégié pour tous vos besoins de nettoyage professionnel."
            />
            
            <p className="text-gray-600 mb-6">
              Fondée sur des valeurs d'excellence et de fiabilité, notre entreprise s'engage à fournir des services de nettoyage de haute qualité qui répondent parfaitement à vos attentes. Notre équipe qualifiée et expérimentée utilise des méthodes efficaces et des produits respectueux de l'environnement pour garantir des résultats impeccables.
            </p>
            
            <p className="text-gray-600 mb-8">
              Que vous soyez un syndic d'immeuble, une entreprise ou un particulier, nous adaptons nos services à vos besoins spécifiques et établissons des relations durables basées sur la confiance et la satisfaction client.
            </p>
            
            <Button asChild className="bg-primary hover:bg-optimo-blue-light">
              <Link to="/qui-sommes-nous">En savoir plus sur nous</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start"
                >
                  <div className="bg-secondary/10 rounded-lg p-3 mr-4">
                    <value.icon size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
