
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoresCarouselBrands from "@/components/StoresCarouselBrands";
import { motion } from "framer-motion";

const MARCAS = [
  {
    name: "RedeCompras.com",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras.com",
    description: "Plataforma de e-commerce do Grupo RedeCompras",
    link: "https://www.redecomprasdelivery.com.br/"
  },
  {
    name: "BomQuéSó",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "BomQuéSó",
    description: "Rede de supermercados com foco em qualidade e preços acessíveis"
  },
  {
    name: "Tão Nosso Alimentos",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "Tão Nosso Alimentos",
    description: "Marca própria de alimentos do Grupo RedeCompras"
  },
  {
    name: "Campina Atacado",
    logo: "/lovable-uploads/34c8c08e-9061-4dab-9657-02258d9e470c.png",
    alt: "Campina Atacado",
    description: "Atacado especializado para revenda"
  },
  {
    name: "RedeCompras",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "RedeCompras",
    description: "Marca matriz do grupo empresarial"
  },
  {
    name: "RedeCompras Express",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras Express",
    description: "Formato express para compras rápidas"
  },
  {
    name: "Farias Distribuidora",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "Farias Distribuidora",
    description: "Distribuidora especializada em logística"
  },
  {
    name: "RedeCompras Gourmet",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "RedeCompras Gourmet",
    description: "Produtos gourmet e especiais"
  },
  {
    name: "BomQuéSó Fresh",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "BomQuéSó Fresh",
    description: "Produtos frescos e naturais"
  }
];

const Brands = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#282e76] to-[#0d7c3d] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Nossas Marcas e Lojas
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Conheça nosso portfólio de marcas e encontre a loja mais próxima de você
            </p>
          </div>
        </section>

        {/* Seção de Marcas - Layout Original */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#282e76]/20 to-[#0d7c3d]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#0d7c3d]/20 to-[#282e76]/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-6 text-[#282e76]">
                Nossas marcas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um verdadeiro ecossistema de negócios. Sempre pensando no cliente, com diferentes formatos.
              </p>
            </div>

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
          </div>
        </section>

        {/* Seção de Lojas com Carrossel */}
        <StoresCarouselBrands />
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
