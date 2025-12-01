import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  const heroImageUrl = "https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20business%20team%20collaborating%20in%20modern%20office%20environment%2C%20diverse%20Black%20professionals%20working%20together%20on%20strategic%20planning%20and%20capacity%20building%2C%20warm%20lighting%2C%20contemporary%20workspace%2C%20professional%20attire%2C%20focused%20collaboration%2C%20high-quality%20business%20photography&width=1920&height=1080&seq=hero-home&orientation=landscape";

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = heroImageUrl;
  }, [heroImageUrl]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Lazy Loading */}
      <div 
        className={`absolute inset-0 hero-image transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: imageLoaded ? `url(${heroImageUrl})` : 'none',
          backgroundColor: '#f8fafc'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 leading-tight">
            {t('heroTitle', 'Building Stronger Organizations Through Strategic Capacity Development')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle', 'Empowering nonprofits and businesses with bilingual consulting services in strategic planning, program development, and organizational excellence.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/services" 
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              {t('exploreServices', 'Explore Our Services')}
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              {t('getConsultation', 'Get Free Consultation')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;
