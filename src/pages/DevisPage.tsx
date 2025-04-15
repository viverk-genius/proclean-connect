
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/section-title";
import DevisForm from "@/components/devis/DevisForm";

const benefits = [
  "Devis détaillé et gratuit sous 48h",
  "Solutions personnalisées selon vos besoins",
  "Tarifs transparents sans mauvaises surprises",
  "Engagement sans durée minimale",
  "Équipe professionnelle et qualifiée",
  "Produits respectueux de l'environnement"
];

const DevisPage = () => {
  return (
    <>
      <Helmet>
        <title>Demander un devis - OPTIMO PROPRETÉ</title>
        <meta name="description" content="Demandez un devis gratuit pour nos services de nettoyage professionnel. Obtenez une proposition personnalisée sous 48h." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Demander un devis
              </h1>
              <p className="text-xl text-gray-600">
                Recevez une proposition personnalisée adaptée à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </section>
        
        {/* Devis Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3"
              >
                <SectionTitle 
                  title="Formulaire de demande de devis" 
                  subtitle="Complétez le formulaire ci-dessous pour recevoir une proposition adaptée à vos besoins."
                />
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <DevisForm />
                </div>
              </motion.div>
              
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <div className="sticky top-24">
                  <SectionTitle 
                    title="Pourquoi nous choisir ?" 
                    subtitle="Découvrez les avantages de faire appel à OPTIMO PROPRETÉ pour vos besoins en nettoyage professionnel."
                  />
                  
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle size={20} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                      <p className="text-sm text-gray-600 italic">
                        "La collaboration avec OPTIMO PROPRETÉ nous a permis d'améliorer significativement la qualité de notre environnement de travail. Leur équipe est professionnelle, réactive et attentive à nos besoins."
                      </p>
                      <p className="text-sm font-semibold mt-2 text-gray-800">
                        — Jean Martin, Directeur Administratif
                      </p>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Notre engagement</h3>
                      <p className="text-sm text-gray-600">
                        Nous nous engageons à vous répondre sous 48h avec un devis détaillé et personnalisé. Notre objectif est de vous proposer la solution la plus adaptée à vos besoins et à votre budget.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Notre processus" 
              subtitle="De la demande de devis à la mise en place de nos services, découvrez les étapes de notre collaboration."
              centered
            />
            
            <div className="relative max-w-4xl mx-auto mt-16">
              {/* Timeline Line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-primary/20 -translate-x-1/2 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    1
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Demande de devis</h3>
                    <p className="text-gray-600">
                      Vous remplissez notre formulaire en ligne ou nous contactez directement. Nous recueillons les informations nécessaires pour comprendre vos besoins.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:ml-auto">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Visite technique (si nécessaire)</h3>
                    <p className="text-gray-600">
                      Pour les projets complexes, nous organisons une visite sur site pour évaluer précisément vos besoins et contraintes spécifiques.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    3
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Proposition détaillée</h3>
                    <p className="text-gray-600">
                      Nous vous envoyons un devis détaillé avec les prestations proposées, leur fréquence, et les tarifs correspondants.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:ml-auto">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Validation et planification</h3>
                    <p className="text-gray-600">
                      Après votre validation, nous planifions les interventions selon vos disponibilités et préférences.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    5
                  </div>
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Début des prestations</h3>
                    <p className="text-gray-600">
                      Notre équipe intervient selon le planning établi, garantissant un service de qualité conforme à vos attentes.
                    </p>
                  </div>
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

export default DevisPage;
