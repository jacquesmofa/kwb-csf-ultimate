
import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/services.json';
// Text, images and links: src/content/pages/services.json (editable in the website editors).

const ServicesHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${copy.hero.backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-800/85 to-purple-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{copy.hero.title}</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-95">{copy.hero.text}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">{copy.hero.label}</span>
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">{copy.hero.label2}</span>
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">{copy.hero.label3}</span>
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">{copy.hero.label4}</span>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, features, image, detailedDescription }: {
  title: string;
  description: string;
  features: string[];
  image: string;
  detailedDescription: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {isExpanded && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{detailedDescription}</p>
          </div>
        )}
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className="ri-check-line text-green-500 text-xl mr-3 mt-0.5"></i>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-line`}></i>
        </button>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const processes = copy.processes;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.processSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.processSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {process.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-3">{process.description}</p>
              <span className="text-sm text-blue-600 font-semibold">{process.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreasSection = () => {
  const serviceAreas = copy.serviceAreas;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.serviceAreasSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.serviceAreasSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${area.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
              <ul className="space-y-2">
                {area.details.slice(0, 3).map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryExpertiseSection = () => {
  const industries = copy.industries;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.industryExpertiseSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.industryExpertiseSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 bg-${industry.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${industry.icon} text-${industry.color}-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = copy.services;

  return (
    <Suspense fallback={<div>{copy.page.text}</div>}>
      <div className="min-h-screen">
        <ServicesHero />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.page.heading}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.page.text2}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <ServiceAreasSection />
        <ProcessSection />
        <IndustryExpertiseSection />

        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.page.heading2}</h2>
            <p className="text-xl mb-8 opacity-90">{copy.page.text3}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">{copy.page.text4}</Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">{copy.page.text5}</Link>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}