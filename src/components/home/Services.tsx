
import { Building, Briefcase, Hammer } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "immeubles",
    icon: Building,
    title: "Entretien d'immeubles",
    description: "Nettoyage complet des parties communes, entretien des sols, vitres et équipements. Assurez la propreté de votre immeuble pour le bien-être de tous les résidents.",
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    id: "bureaux",
    icon: Briefcase,
    title: "Ménage de bureaux",
    description: "Entretien régulier des espaces de travail, sanitaires et salles de réunion. Offrez un environnement propre et sain à vos collaborateurs et clients.",
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    id: "chantier",
    icon: Hammer,
    title: "Remise en état après chantier",
    description: "Nettoyage complet après travaux, élimination des déchets de construction, dépoussiérage et traitement des surfaces. Votre espace est prêt à être utilisé.",
    color: "bg-optimo-green-bright/10",
    iconColor: "text-optimo-green-bright"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos services" 
          subtitle="Découvrez l'éventail de prestations adaptées à vos besoins spécifiques. La qualité et l'efficacité sont au cœur de nos services."
          centered
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className={`mb-6 w-16 h-16 rounded-lg flex items-center justify-center ${service.color}`}>
                  <service.icon size={28} className={service.iconColor} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0">
                  <Link to={`/services#${service.id}`}>
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-optimo-blue-light">
            <Link to="/services">Voir tous nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
