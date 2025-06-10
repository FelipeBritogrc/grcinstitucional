
import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TIMELINE = [
  {
    year: "1991",
    title: "Fundação do Barateiro",
    description: "Os Irmãos Farias, vindos de Casinhas (PE), iniciaram sua jornada empreendedora em Campina Grande. Após começarem com uma bodega familiar e um mini box na Feira da Prata em 1978, inauguraram o primeiro Supermercado 'O Barateiro' em 1991.",
    icon: "🏪",
    img: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    year: "2007",
    title: "Nascimento do Grupo RedeCompras",
    description: "Rebranding estratégico e expansão das operações, consolidando nossa presença no mercado paraibano com uma nova identidade e visão de futuro.",
    icon: "🔄",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    year: "2012",
    title: "Inauguração BomQuéSó",
    description: "Lançamento do formato atacarejo, revolucionando o conceito de compras em grande escala na região com preços competitivos e variedade de produtos.",
    icon: "🛒",
    img: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    year: "2019",
    title: "E-commerce RedeCompras.com",
    description: "Entrada no mundo digital com nossa plataforma de vendas online, aproximando ainda mais nossos clientes com a conveniência das compras pela internet.",
    icon: "🌐",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    year: "2023",
    title: "Inauguração do novo Centro de Distribuição (CD)",
    description: "Inauguração de moderno centro de distribuição, otimizando nossa logística e capacidade de abastecimento para melhor atender toda a rede de lojas.",
    icon: "🏭",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    year: "2024",
    title: "Inauguração da expansão de João Pessoa",
    description: "Marco histórico com a expansão significativa para a capital paraibana, consolidando nossa presença estadual e aproximando ainda mais nossos serviços dos clientes.",
    icon: "🏢",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  }
];

const TimelineCarousel: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#282e76]/20 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-[#0d7c3d]/20 to-transparent rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Nossa</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Trajetória
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de três décadas construindo uma história de sucesso, inovação e compromisso 
            com nossos clientes e comunidades.
          </p>
        </motion.div>

        {/* Timeline Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="relative"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {TIMELINE.map((item, idx) => (
                <CarouselItem key={item.year} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden group border border-gray-100 hover:-translate-y-2 transform-gpu">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        
                        {/* Year Badge */}
                        <div className="absolute top-4 left-4 bg-[#282e76] text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                          {item.year}
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute bottom-4 left-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-bold text-xl text-[#282e76] mb-4 group-hover:text-[#0d7c3d] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index + 1 === current
                    ? 'w-8 h-3 bg-[#282e76]'
                    : 'w-3 h-3 bg-[#282e76]/30 hover:bg-[#282e76]/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineCarousel;
