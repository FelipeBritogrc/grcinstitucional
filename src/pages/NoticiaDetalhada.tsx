
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InlineLink from "@/components/InlineLink";
import React from "react";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";
import { NEWS_DATA } from "@/data/news";

const NoticiaDetalhada = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticia = NEWS_DATA.find(item => item.id === id);

  const handleBackClick = () => {
    navigate('/newsletter');
  };

  if (!noticia) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col justify-center items-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-2">Notícia não encontrada</h2>
            <button onClick={handleBackClick} className="text-[#0d7c3d] font-semibold mt-2 hover:underline">
              Voltar para Notícias
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Function to render content with inline links
  const renderContentWithLinks = (content: string) => {
    // Split content by <InlineLink> tags and render accordingly
    const parts = content.split(/(<InlineLink[^>]*>.*?<\/InlineLink>)/);
    
    return parts.map((part, index) => {
      if (part.includes('<InlineLink')) {
        // Extract href and text from the InlineLink tag
        const hrefMatch = part.match(/href="([^"]*)"/);
        const textMatch = part.match(/>([^<]*)</);
        
        if (hrefMatch && textMatch) {
          return (
            <InlineLink key={index} href={hrefMatch[1]}>
              {textMatch[1]}
            </InlineLink>
          );
        }
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-[#282e76] hover:text-[#0d7c3d] font-medium transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Notícias
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          {/* Article Meta */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {noticia.date}
              </div>
              {noticia.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {noticia.readTime} de leitura
                </div>
              )}
              {noticia.author && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {noticia.author}
                </div>
              )}
              <div className="px-3 py-1 bg-[#282e76]/10 text-[#282e76] text-xs font-bold rounded-full">
                {noticia.category}
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282e76] mb-4 leading-tight">
              {noticia.title}
            </h1>
            {noticia.subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {noticia.subtitle}
              </p>
            )}
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={noticia.img} 
              alt={noticia.title} 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {noticia.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {renderContentWithLinks(paragraph)}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhada;
