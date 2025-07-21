
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/section-title";
import ContactForm from "@/components/contact/ContactForm";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 87 90 93 03",
    link: "tel:0187909303"
  },
  {
    icon: Phone,
    title: "Mobile",
    content: "06 23 48 79 82",
    link: "tel:0623487982"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@optimo-proprete.fr",
    link: "mailto:contact@optimo-proprete.fr"
  },
  {
    icon: MapPin,
    title: "Zone d'intervention",
    content: "Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)",
    link: null
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Ven : 8h-18h",
    link: null
  }
];

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Nous contacter - OPTIMO PROPRETÉ</title>
        <meta name="description" content="Contactez OPTIMO PROPRETÉ pour tous vos besoins de nettoyage professionnel. Notre équipe est à votre écoute pour répondre à vos questions." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Nous contacter
              </h1>
              <p className="text-xl text-gray-600">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
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
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-600 hover:text-primary transition-colors"
                      target={item.icon === MapPin ? "_blank" : undefined}
                      rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle 
                  title="Envoyez-nous un message" 
                  subtitle="Complétez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
                />
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <ContactForm />
                </div>
              </motion.div>
              
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                <SectionTitle 
                  title="Où nous trouver" 
                  subtitle="Venez nous rencontrer dans nos bureaux pour discuter de vos besoins en nettoyage professionnel."
                />
                
                <div className="bg-white p-4 rounded-xl shadow-md flex-grow">
                  <div className="rounded-lg overflow-hidden h-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410650411!2d2.276995235521972!3d48.85883772840253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, minHeight: "400px" }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="OPTIMO PROPRETÉ sur Google Maps"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Questions fréquentes" 
              subtitle="Retrouvez les réponses aux questions que vous vous posez sur nos services."
              centered
            />
            
            <div className="max-w-3xl mx-auto mt-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Quelles zones géographiques couvrez-vous ?</h3>
                  <p className="text-gray-600">Nous intervenons principalement à Paris et en région parisienne. Pour des demandes spécifiques en dehors de cette zone, n'hésitez pas à nous contacter pour étudier la faisabilité.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Comment obtenir un devis pour vos services ?</h3>
                  <p className="text-gray-600">Vous pouvez demander un devis gratuit via notre formulaire en ligne, par téléphone ou par email. Nous vous répondrons dans les 24 heures ouvrées avec une proposition adaptée à vos besoins.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Utilisez-vous des produits écologiques ?</h3>
                  <p className="text-gray-600">Oui, nous privilégions l'utilisation de produits respectueux de l'environnement et de la santé, tout en garantissant leur efficacité. Nous pouvons également nous adapter à des demandes spécifiques.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Vos équipes sont-elles formées et assurées ?</h3>
                  <p className="text-gray-600">Absolument. Tous nos collaborateurs sont formés aux techniques de nettoyage professionnel et aux normes de sécurité. Notre entreprise dispose de toutes les assurances nécessaires pour exercer notre activité.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Intervenez-vous pour les particuliers ?</h3>
                  <p className="text-gray-600">Oui, nous proposons des services personnalisés pour les particuliers : nettoyage d'appartements, entretien moquettes et canapés, ménage de printemps, débarras. Nous nous adaptons à vos besoins spécifiques.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Quel est votre engagement environnemental ?</h3>
                  <p className="text-gray-600">Nous sommes une équipe de professionnels passionnés, dédiée à offrir des services de nettoyage et de désinfection d'excellence dans toute l'Île-de-France, en utilisant exclusivement des produits écologiques.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;
