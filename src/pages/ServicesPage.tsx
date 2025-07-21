
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Building, Briefcase, Hammer, Check, ArrowRight, Droplets, TreePine, Sparkles, Shield, Users, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CallToAction from "@/components/home/CallToAction";

const services = [
  {
    id: "immeubles",
    icon: Building,
    title: "Entretien d'immeubles",
    shortDescription: "Nettoyage complet des parties communes, entretien des sols, vitres et équipements.",
    longDescription: "Notre service d'entretien d'immeubles couvre le nettoyage complet des parties communes, y compris les halls d'entrée, escaliers, ascenseurs et locaux techniques. Nous assurons l'entretien régulier des sols, le lavage des vitres, le dépoussiérage des équipements et l'élimination des déchets. Notre équipe respecte des protocoles stricts pour garantir la propreté et l'hygiène de votre immeuble, contribuant ainsi au bien-être de tous les résidents.",
    features: [
      "Nettoyage des halls d'entrée et couloirs",
      "Entretien des escaliers et ascenseurs", 
      "Lavage des vitres et surfaces vitrées",
      "Nettoyage des locaux à poubelles",
      "Entretien des parkings et espaces extérieurs",
      "Intervention régulière ou sur-mesure"
    ],
    image: "https://images.unsplash.com/photo-1545476745-8c904ca53e51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    id: "bureaux", 
    icon: Briefcase,
    title: "Ménage de bureaux",
    shortDescription: "Entretien régulier des espaces de travail, sanitaires et salles de réunion.",
    longDescription: "Notre service de ménage de bureaux est conçu pour maintenir vos espaces de travail dans un état de propreté irréprochable. Nous prenons en charge le nettoyage quotidien ou hebdomadaire des postes de travail, salles de réunion, espaces communs et sanitaires. Nous utilisons des produits adaptés pour assurer l'hygiène des surfaces et le bien-être de vos collaborateurs, tout en respectant l'environnement de travail et les équipements.",
    features: [
      "Dépoussiérage des bureaux et équipements",
      "Nettoyage des sols (aspiration, lavage)",
      "Entretien des sanitaires et cuisines", 
      "Vidage des corbeilles et recyclage",
      "Nettoyage des vitres et miroirs",
      "Désinfection des points de contact"
    ],
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    id: "chantier",
    icon: Hammer,
    title: "Remise en état après chantier", 
    shortDescription: "Nettoyage complet après travaux, élimination des déchets de construction.",
    longDescription: "Après des travaux de construction ou de rénovation, notre service de remise en état assure un nettoyage en profondeur pour rendre l'espace prêt à l'utilisation. Nous éliminons tous les résidus de chantier (poussière, débris, traces de matériaux), nettoyons toutes les surfaces, y compris les zones difficiles d'accès, et effectuons un traitement spécifique des sols, murs et vitres. Notre intervention minutieuse révèle la beauté de votre espace rénové.",
    features: [
      "Évacuation des déchets et débris de chantier",
      "Dépoussiérage complet des surfaces",
      "Nettoyage en profondeur des sols",
      "Détartrage et traitement des sanitaires", 
      "Nettoyage des vitres, encadrements et rebords",
      "Finitions soignées pour une livraison parfaite"
    ],
    image: "https://images.unsplash.com/photo-1577276734508-d334da896b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-optimo-green-bright/10",
    iconColor: "text-optimo-green-bright"
  },
  {
    id: "desinfection",
    icon: Shield,
    title: "Désinfection des surfaces sensibles",
    shortDescription: "Décapage, lustrage, cirage, shampooing moquette pour surfaces délicates.",
    longDescription: "Notre service de désinfection des surfaces sensibles garantit une hygiène optimale pour tous types d'environnements. Nous utilisons des techniques spécialisées et des produits adaptés pour traiter en douceur vos surfaces délicates tout en assurant une désinfection efficace contre les virus et bactéries.",
    features: [
      "Décapage professionnel des sols",
      "Lustrage et cirage des surfaces",
      "Shampooing moquette en profondeur",
      "Désinfection contre virus et bactéries",
      "Traitement des surfaces sensibles",
      "Produits adaptés et respectueux"
    ],
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-optimo-green/10",
    iconColor: "text-optimo-green"
  },
  {
    id: "haute-pression",
    icon: Droplets,
    title: "Nettoyage haute pression",
    shortDescription: "Nettoyage de façades, terrasses et parkings avec équipement haute pression.",
    longDescription: "Notre service de nettoyage haute pression redonne éclat et propreté à vos surfaces extérieures. Grâce à notre équipement professionnel, nous éliminons efficacement mousses, lichens, salissures et dépôts tenaces sur façades, terrasses et parkings.",
    features: [
      "Nettoyage de façades d'immeubles",
      "Rénovation de terrasses et cours",
      "Entretien des parkings",
      "Élimination mousses et lichens",
      "Démoussage de toitures",
      "Équipement haute performance"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    id: "espaces-verts",
    icon: TreePine,
    title: "Entretien espaces verts & toitures",
    shortDescription: "Maintenance des espaces verts et nettoyage spécialisé des toitures.",
    longDescription: "Nous prenons soin de vos espaces verts et assurons l'entretien de vos toitures. Notre équipe spécialisée maintient la beauté de vos jardins, espaces verts communs et assure la longévité de vos toitures par un nettoyage adapté.",
    features: [
      "Taille et entretien des végétaux",
      "Nettoyage des espaces verts communs",
      "Démoussage et nettoyage de toitures",
      "Évacuation des déchets verts",
      "Entretien des allées et cheminements",
      "Maintenance préventive"
    ],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-green-500/10",
    iconColor: "text-green-500"
  },
  {
    id: "particuliers",
    icon: Home,
    title: "Services pour particuliers",
    shortDescription: "Nettoyage d'appartements, entretien moquettes et ménage de printemps.",
    longDescription: "Nous proposons des services personnalisés pour les particuliers, adaptés à vos besoins spécifiques. De l'entretien régulier de votre domicile au grand ménage de printemps, notre équipe vous accompagne pour maintenir un cadre de vie sain et agréable.",
    features: [
      "Nettoyage d'appartements intérieur et extérieur",
      "Entretien des moquettes, canapés, terrasses et balcons",
      "Ménage de printemps pour remise à neuf complète",
      "Débarras caves, greniers et box de stockage",
      "Intervention rapide et efficace",
      "Services adaptés aux besoins spécifiques"
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500"
  }
];

const specializedServices = [
  {
    title: "Engagement environnemental",
    description: "Utilisation exclusive de produits écologiques pour préserver la planète.",
    icon: TreePine,
    features: ["Produits certifiés écologiques", "Respect de l'environnement", "Tri des déchets et valorisation"]
  },
  {
    title: "Désinfection et assainissement de l'air",
    description: "Mise en place de purificateurs d'air pour un environnement sain.",
    icon: Shield,
    features: ["Purification de l'air", "Élimination des allergènes", "Amélioration de la qualité de l'air"]
  },
  {
    title: "Zones d'intervention",
    description: "Déplacements dans toute l'Île-de-France avec devis personnalisés.",
    icon: Users,
    features: ["Île-de-France complète", "Devis personnalisés", "Intervention rapide"]
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

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Nos services - OPTIMO PROPRETÉ</title>
        <meta name="description" content="Découvrez nos services de nettoyage professionnel: entretien d'immeubles, ménage de bureaux et remise en état après chantier." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Nos services
              </h1>
              <p className="text-xl text-gray-600">
                Des solutions de nettoyage professionnel adaptées à tous vos besoins, avec une qualité et une fiabilité irréprochables.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nos prestations" 
              subtitle="OPTIMO PROPRETÉ vous propose une gamme complète de services de nettoyage professionnel, adaptés à vos besoins spécifiques."
              centered
            />
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={item}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`mb-6 w-16 h-16 rounded-lg flex items-center justify-center ${service.color}`}>
                      <service.icon size={28} className={service.iconColor} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800" id={service.id}>{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <a href={`#${service.id}-details`} className="inline-flex items-center text-primary hover:underline">
                      En savoir plus <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Detailed Services */}
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={`${service.id}-details`}
            className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${service.color}`}>
                    <service.icon size={16} className={`${service.iconColor} mr-2`} />
                    {service.title}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {service.longDescription}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Ce que nous proposons :</h3>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="bg-primary hover:bg-optimo-blue-light">
                    <Link to="/devis">Demander un devis</Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                    
                    {/* Decorative elements */}
                    <div className={`absolute -top-4 -right-4 w-32 h-32 ${service.color} rounded-full -z-10`} />
                    <div className={`absolute -bottom-4 -left-4 w-24 h-24 ${index % 2 === 0 ? 'bg-secondary/10' : 'bg-primary/10'} rounded-full -z-10`} />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
        
        {/* Specialized Services */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nos services spécialisés" 
              subtitle="Des prestations expertes avec un engagement fort pour l'environnement et votre bien-être."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="bg-optimo-green-bright/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon size={24} className="text-optimo-green-bright" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-sm text-gray-600">
                        <Check size={14} className="text-optimo-green-bright mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;
