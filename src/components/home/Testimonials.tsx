
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Syndic d'immeuble",
    content: "OPTIMO PROPRETÉ assure l'entretien de nos immeubles depuis plus de 2 ans. Le travail est toujours impeccable et les équipes sont ponctuelles et professionnelles. Je recommande vivement leurs services !",
    rating: 5
  },
  {
    name: "Pierre Martin",
    role: "Directeur administratif",
    content: "Depuis que nous avons confié le nettoyage de nos bureaux à OPTIMO PROPRETÉ, la différence est flagrante. Nos employés apprécient particulièrement la qualité du travail et l'attention portée aux détails.",
    rating: 5
  },
  {
    name: "Sophie Legrand",
    role: "Architecte d'intérieur",
    content: "J'ai fait appel à OPTIMO PROPRETÉ pour la remise en état d'un appartement après rénovation. Le résultat était parfait, dans les délais et au prix convenu. Une équipe vraiment professionnelle !",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ce que nos clients disent" 
          subtitle="La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur la qualité de nos services."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-2 text-8xl text-primary/10 font-serif">"</div>
              
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
                
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
