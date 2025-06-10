
import React from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

interface DesktopMenuProps {
  onNavClick: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ onNavClick }) => {
  return (
    <div className="hidden lg:flex items-center space-x-2">
      <Link 
        to="/" 
        onClick={onNavClick}
        className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-white/10"
      >
        Início
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>
      
      <Link 
        to="/newsletter" 
        onClick={onNavClick}
        className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-white/10"
      >
        Notícias
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>
      
      <Link 
        to="/careers" 
        onClick={onNavClick}
        className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-white/10"
      >
        Trabalhe Conosco
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>
      
      <NavbarDropdown onNavClick={onNavClick} />
    </div>
  );
};

export default DesktopMenu;
