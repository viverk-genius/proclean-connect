
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Leaf } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/section-title";
import CallToAction from "@/components/home/CallToAction";

const values = [
  {
    icon: ShieldCheck,
    title: "Fiabilité",
    description: "Nous respectons nos engagements en termes de qualité, de délais et de budget. Notre équipe qualifiée vous garantit un service constant et irréprochable."
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque intervention. Nos protocoles de nettoyage rigoureux et notre attention aux détails garantissent un résultat impeccable."
  },
  {
    icon: Users,
    title: "Professionnalisme",
    description: "Notre équipe est formée aux techniques de nettoyage les plus récentes et utilise des équipements de pointe pour assurer un service de haute qualité."
  },
  {
    icon: Leaf,
    title: "Écologie",
    description: "Nous utilisons des produits respectueux de l'environnement et adoptons des pratiques durables pour réduire notre impact écologique sans compromettre l'efficacité."
  }
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Qui sommes-nous ? - OPTIMO PROPRETÉ</title>
        <meta name="description" content="Découvrez OPTIMO PROPRETÉ, votre partenaire de confiance pour tous vos besoins de nettoyage professionnel. Notre mission, nos valeurs et notre équipe." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Qui sommes-nous ?
              </h1>
              <p className="text-xl text-gray-600">
                Découvrez l'histoire, la mission et les valeurs qui font d'OPTIMO PROPRETÉ votre partenaire de confiance.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionTitle 
                  title="Notre histoire" 
                  subtitle="Fondée sur des valeurs d'excellence et de fiabilité, OPTIMO PROPRETÉ est né de la vision de créer une entreprise de nettoyage qui place la qualité et la satisfaction client au cœur de ses priorités."
                />
                
                <p className="text-gray-600 mb-6">
                  Depuis notre création, nous nous sommes forgé une solide réputation grâce à notre engagement sans faille envers l'excellence. Notre équipe de professionnels qualifiés et passionnés s'efforce chaque jour de dépasser les attentes de nos clients en offrant des services de nettoyage impeccables.
                </p>
                
                <p className="text-gray-600">
                  Notre approche axée sur la personnalisation nous permet d'adapter nos services aux besoins spécifiques de chaque client, qu'il s'agisse d'un syndic d'immeuble, d'une entreprise ou d'un particulier. Cette flexibilité, combinée à notre rigueur professionnelle, fait d'OPTIMO PROPRETÉ un partenaire de choix pour tous vos besoins en matière de propreté.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1594142604298-163431def9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Notre équipe" 
                  className="rounded-lg shadow-xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-5 -right-5 w-40 h-40 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Notre mission & vision" 
              subtitle="Nous nous engageons à fournir des services de nettoyage de haute qualité qui transforment les espaces et améliorent le bien-être."
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Notre mission</h3>
                <p className="text-gray-600">
                  OPTIMO PROPRETÉ a pour mission de fournir des services de nettoyage professionnels de la plus haute qualité, adaptés aux besoins spécifiques de chaque client. Nous nous engageons à créer des environnements propres, sains et accueillants qui contribuent au bien-être des occupants et à la valorisation des espaces.
                </p>
                <p className="text-gray-600 mt-4">
                  Nous y parvenons en mettant l'accent sur l'excellence opérationnelle, la formation continue de notre équipe, l'utilisation de produits et techniques respectueux de l'environnement, et une communication transparente avec nos clients.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-secondary">Notre vision</h3>
                <p className="text-gray-600">
                  Notre vision est d'être reconnu comme le leader de référence dans le secteur du nettoyage professionnel, en nous distinguant par notre engagement indéfectible envers la qualité, l'innovation et la satisfaction client.
                </p>
                <p className="text-gray-600 mt-4">
                  Nous aspirons à établir de nouveaux standards dans l'industrie en intégrant des pratiques durables, des technologies innovantes et une approche centrée sur le client qui anticipe et répond à leurs besoins évolutifs en matière de propreté et d'hygiène.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nos valeurs" 
              subtitle="Nos valeurs fondamentales guident chacune de nos actions et définissent notre approche du service client."
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Notre équipe" 
              subtitle="Des professionnels dévoués et qualifiés qui s'engagent à fournir un service d'exception."
              centered
            />
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre équipe est composée de professionnels expérimentés, formés aux dernières techniques et méthodes de nettoyage. Chacun de nos collaborateurs partage notre engagement envers l'excellence et la satisfaction client.
              </p>
              
              <div className="mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="L'équipe OPTIMO PROPRETÉ" 
                  className="rounded-lg shadow-lg max-w-3xl mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
