
import React from "react";
import { Building } from "lucide-react";
import { motion } from "framer-motion";

const MARCAS = [
  {
    name: "RedeCompras.com",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras.com"
  },
  {
    name: "BomQuéSó",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "BomQuéSó"
  },
  {
    name: "Tão Nosso Alimentos",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "Tão Nosso Alimentos"
  },
  {
    name: "Campina Atacado",
    logo: "/lovable-uploads/34c8c08e-9061-4dab-9657-02258d9e470c.png",
    alt: "Campina Atacado"
  },
  {
    name: "RedeCompras",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "RedeCompras"
  },
  {
    name: "RedeCompras Express",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras Express"
  },
  {
    name: "Farias Distribuidora",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "Farias Distribuidora"
  },
  {
    name: "RedeCompras Gourmet",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "RedeCompras Gourmet"
  },
  {
    name: "BomQuéSó Fresh",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "BomQuéSó Fresh"
  }
];

const BrandsSectionRedesigned = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/20 to-[#0d7c3d]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/20 to-[#282e76]/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#282e76]/20 rounded-full shadow-lg mb-8">
            <Building className="w-5 h-5 text-[#282e76]" />
            <span className="text-sm font-bold text-[#282e76] uppercase tracking-wider">Portfolio de Marcas</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#282e76]">
            Nossas marcas
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] mx-auto mb-6" />
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Um verdadeiro ecossistema de negócios. Sempre pensando no cliente, com diferentes formatos.
          </p>
        </motion.div>

        {/* Brands Grid Layout - 3x3 grid for 9 brands */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-4xl mx-auto"
        >
          {MARCAS.map((marca, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-[#282e76]/30 transition-all duration-300"
            >
              <img 
                src={marca.logo} 
                alt={marca.alt}
                className="h-12 lg:h-16 xl:h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 drop-shadow-lg opacity-70 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/60 via-white/80 to-white/60 backdrop-blur-sm rounded-3xl border-2 border-[#0d7c3d]/20 p-8 lg:p-12 shadow-xl">
            <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Diversidade e Inovação
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada marca representa nosso compromisso em oferecer soluções completas 
              e inovadoras para diferentes segmentos do mercado paraibano.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSectionRedesigned;
