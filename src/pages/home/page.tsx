import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import announcement from '../../content/announcement.json';
import copy from '../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { i18n } = useTranslation();
  const announcementLang: 'en' | 'fr' = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero Section Component
  const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${copy.hero.backgroundImage}')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/80 to-sky-700/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl font-semibold text-yellow-300 uppercase tracking-widest mb-6 animate-pulse">{copy.hero.text}</p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">{copy.hero.title}<span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-yellow-300">{copy.hero.label}</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-indigo-200 leading-tight mb-8 drop-shadow-lg">{copy.hero.heading}<span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-sky-300">{copy.hero.label2}</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">{copy.hero.text2}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/services" className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 hover:shadow-sky-500/25 whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-3">{copy.hero.label3}<i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </Link>
              
              <Link to="/contact" className="group px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-3">
                  <i className="ri-calendar-line"></i>{copy.hero.label4}</span>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-indigo-200">
              <span className="flex items-center gap-2">
                <i className="ri-phone-line"></i>{copy.hero.label5}</span>
              <span className="flex items-center gap-2">
                <i className="ri-mail-line"></i>{copy.hero.label6}</span>
              <span className="flex items-center gap-2">
                <i className="ri-global-line"></i>{copy.hero.label7}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  };

  // Mission & Vision Section
  const MissionSection = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.mission.heading2}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.mission.text3}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <i className="ri-target-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{copy.mission.subheading}</h3>
            <p className="text-gray-600 leading-relaxed">{copy.mission.text4}</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
              <i className="ri-eye-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{copy.mission.subheading2}</h3>
            <p className="text-gray-600 leading-relaxed">{copy.mission.text5}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Services Preview Section
  const ServicesPreview = () => (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.servicesSection.heading3}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{copy.servicesSection.text6}</p>
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">{copy.servicesSection.text7}<i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {copy.services.map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border hover:border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 bg-${service.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
              </div>
              
              <div className="mb-6">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>
              
              <Link 
                to="/services" 
                className={`inline-flex items-center gap-2 bg-${service.color}-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-${service.color}-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer`}
              >{copy.servicesSection.text8}<i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // About Preview Section
  const AboutPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.about.heading4}</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{copy.about.text9}</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">{copy.about.label8}</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">{copy.about.label9}</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">{copy.about.label10}</span>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">{copy.about.text10}<i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="relative">
            <img 
              src={copy.about.image}
              alt={copy.about.imageAlt}
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Training Preview Section
  const TrainingPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.trainingSection.heading5}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{copy.trainingSection.text11}</p>
          <Link to="/training" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">{copy.trainingSection.text12}<i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {copy.programs.map((program, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-blue-200">
              <div className="mb-6">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{program.title}</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{program.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-blue-600 text-lg"></i>
                  <span className="text-gray-700 font-medium">{copy.trainingSection.label11}{program.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-group-line text-blue-600 text-lg"></i>
                  <span className="text-gray-700 font-medium">{copy.trainingSection.label12}{program.participants}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">{copy.trainingSection.subheading3}</h4>
                <div className="flex flex-wrap gap-2">
                  {program.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/training" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >{copy.trainingSection.text13}<i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Policies Preview Section
  const PoliciesPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.policiesSection.heading6}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{copy.policiesSection.text14}</p>
          <Link to="/policies" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">{copy.policiesSection.text15}<i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.policies.map((policy, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-shield-check-line text-indigo-600 text-xl"></i>
                <h3 className="font-bold text-gray-900">{policy}</h3>
              </div>
              <p className="text-gray-600 text-sm">{copy.policiesSection.text16}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Gallery Preview Section
  const GalleryPreview = () => (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.gallerySection.heading7}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{copy.gallerySection.text17}</p>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">{copy.gallerySection.text18}<i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {copy.galleryPreview.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Preview Section
  const ContactPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.contact.heading8}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">{copy.contact.text19}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{copy.contact.subheading4}</h3>
            <p className="opacity-90">{copy.contact.text20}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{copy.contact.subheading5}</h3>
            <p className="opacity-90">{copy.contact.text21}</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{copy.contact.subheading6}</h3>
            <p className="opacity-90">{copy.contact.text22}</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">{copy.contact.text23}<i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );

  // Client Success Stories
  const ClientStories = () => (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.clients.heading9}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.clients.text24}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.clientList.map((client, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <i className="ri-building-line text-blue-600 text-xl"></i>
                <h3 className="font-semibold text-gray-900">{client}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Latest announcement (text comes from src/content/announcement.json)
  const AnnouncementBanner = () => (
    <section className="bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 whitespace-nowrap">
          <i className="ri-megaphone-line text-base" aria-hidden="true"></i>
          {announcementLang === 'fr' ? 'Annonce' : 'Announcement'}
        </span>
        <p className="flex-1 text-base md:text-lg font-semibold">{announcement[announcementLang].title}</p>
        <Link to="/announcement" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400 transition-colors whitespace-nowrap self-start md:self-auto">
          {announcementLang === 'fr' ? "Lire l'annonce" : 'Read the announcement'}
          <i className="ri-arrow-right-line" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <AnnouncementBanner />
      <MissionSection />
      <ServicesPreview />
      <AboutPreview />
      <TrainingPreview />
      <PoliciesPreview />
      <GalleryPreview />
      <ClientStories />
      <ContactPreview />
    </div>
  );
};

export default HomePage;