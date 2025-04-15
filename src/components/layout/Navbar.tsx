
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when navigation occurs
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
    { name: "Nos services", path: "/services" },
    { name: "Nous contacter", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="OPTIMO PROPRETÉ" 
            className="h-14 w-auto object-contain"  // Added w-auto to ensure width scales with height
            onError={(e) => {
              console.error('Logo failed to load', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium hover:text-secondary transition-colors ${
                location.pathname === link.path ? "text-secondary" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-optimo-blue-light text-white">
            <Link to="/devis">Demander un devis</Link>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium py-2 hover:text-secondary transition-colors ${
                    location.pathname === link.path ? "text-secondary" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-optimo-blue-light text-white w-full">
                <Link to="/devis">Demander un devis</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

