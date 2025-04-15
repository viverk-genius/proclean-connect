
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    link: "tel:0123456789"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@optimo-proprete.fr",
    link: "mailto:contact@optimo-proprete.fr"
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 rue de la Propreté, 75000 Paris",
    link: "https://maps.google.com"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Besoin de nos services ?" 
          subtitle="Contactez-nous dès maintenant pour discuter de vos besoins en matière de nettoyage professionnel."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <a 
                href={item.link} 
                className="text-gray-600 hover:text-primary transition-colors"
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
              >
                {item.content}
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous ayez besoin d'un devis personnalisé ou simplement d'informations sur nos services, notre équipe est à votre disposition pour vous répondre dans les plus brefs délais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-optimo-blue-light">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link to="/devis">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
