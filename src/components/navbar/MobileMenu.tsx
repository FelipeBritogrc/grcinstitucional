
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onNavClick }) => {
  const [institutionalOpen, setInstitutionalOpen] = useState(false);

  const handleInstitutionalToggle = () => {
    setInstitutionalOpen(!institutionalOpen);
  };

  const handleInstitutionalLinkClick = () => {
    setInstitutionalOpen(false);
    onNavClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(40, 46, 118, 0.98) 0%, rgba(13, 124, 61, 0.98) 100%)",
            backdropFilter: "blur(10px)"
          }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
            <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-[#0d7c3d]/10 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 px-4 py-6 space-y-2">
            <Link 
              to="/" 
              onClick={onNavClick}
              className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Início
            </Link>
            <Link 
              to="/newsletter" 
              onClick={onNavClick}
              className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Notícias
            </Link>
            <Link 
              to="/careers" 
              onClick={onNavClick}
              className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Trabalhe Conosco
            </Link>
            
            {/* Institucional Dropdown */}
            <div className="rounded-xl overflow-hidden bg-white/5">
              <button
                onClick={handleInstitutionalToggle}
                className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
              >
                Institucional
                {institutionalOpen ? 
                  <ChevronUp className="w-4 h-4 transition-transform duration-300" /> : 
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                }
              </button>
              
              <AnimatePresence>
                {institutionalOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/10 backdrop-blur-sm"
                  >
                    <div className="px-2 py-2 space-y-1">
                      <Link 
                        to="/brands" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Nossas Marcas
                      </Link>
                      <Link 
                        to="/ethics" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Ética e Valores
                      </Link>
                      <Link 
                        to="/history" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Nossa História
                      </Link>
                      <Link 
                        to="/apps" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Nossos Apps
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
