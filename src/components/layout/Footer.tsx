
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="block mb-4">
              <img src="/logo.png" alt="OPTIMO PROPRETÉ" className="h-16" />
            </Link>
            <p className="text-gray-600 mb-4">
              OPTIMO PROPRETÉ vous accompagne dans tous vos besoins de nettoyage professionnel avec qualité et fiabilité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous" className="text-gray-600 hover:text-secondary transition-colors">
                  Qui sommes-nous ?
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-secondary transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link to="/devis" className="text-gray-600 hover:text-secondary transition-colors">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#immeubles" className="text-gray-600 hover:text-secondary transition-colors">
                  Entretien d'immeubles
                </Link>
              </li>
              <li>
                <Link to="/services#bureaux" className="text-gray-600 hover:text-secondary transition-colors">
                  Ménage de bureaux
                </Link>
              </li>
              <li>
                <Link to="/services#chantier" className="text-gray-600 hover:text-secondary transition-colors">
                  Remise en état après chantier
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-600">01 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-600">contact@optimo-proprete.fr</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 rue de la Propreté<br />75000 Paris</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-secondary mt-1 flex-shrink-0" />
                <span className="text-gray-600">Lun-Ven : 8h-18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} OPTIMO PROPRETÉ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
