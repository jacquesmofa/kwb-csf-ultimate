
import { useState, useEffect, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://readdy.ai/api/search-image?query=Professional%20team%20collaboration%20in%20modern%20office%20environment%2C%20diverse%20group%20working%20together%20on%20organizational%20transformation%2C%20dynamic%20business%20meeting%2C%20collaborative%20success%20atmosphere&width=1920&height=800&seq=cta-bg&orientation=landscape"
        >
          <source src="https://www.pexels.com/fr-fr/download/video/3114574/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-indigo-800/90 to-sky-700/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Ready to Transform Your Organization?
          </h2>
          
          <p className="text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
            We provide capacity-building services to individuals, organizations, and businesses across 8 cluster 
            consulting areas, including Financial Service Support and Human Resources. Contact us today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 hover:shadow-sky-500/25 whitespace-nowrap cursor-pointer">
              <span className="flex items-center gap-3">
                <i className="ri-calendar-check-line text-2xl"></i>
                Start Your Consultation
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </button>
            
            <button className="group px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-2xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              <span className="flex items-center gap-3">
                <i className="ri-phone-line text-2xl"></i>
                Call (416) 409-7558
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-sky-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-indigo-400/20 rounded-full animate-ping"></div>
    </section>
  );
};

export default CTASection;
