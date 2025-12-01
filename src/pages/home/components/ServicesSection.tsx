
import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "Strategic Planning & Implementation",
      description: "Our process is guided by three fundamental questions: What does the organization want to do? How is it going to do it? What would happen if it did what it wanted to do? This leads to a comprehensive roadmap covering vision, mission, values, programs, SWOT analysis, and strategic priorities.",
      icon: "ri-roadmap-line",
      image: "https://readdy.ai/api/search-image?query=Strategic%20planning%20workshop%20with%20diverse%20team%20members%20around%20conference%20table%20reviewing%20organizational%20roadmap%2C%20modern%20office%20setting%2C%20collaborative%20planning%20session%2C%20professional%20business%20environment&width=600&height=400&seq=service-1&orientation=landscape"
    },
    {
      title: "Monitoring & Evaluation Frameworks",
      description: "We design frameworks to assess the effectiveness and efficiency of your programs. This includes systematic information collection (monitoring) and comparing achievements against plans (evaluation). Our evaluation covers feasibility, ongoing monitoring, and post-completion assessment.",
      icon: "ri-bar-chart-line",
      image: "https://readdy.ai/api/search-image?query=Data%20analysis%20and%20monitoring%20evaluation%20session%20with%20charts%20and%20graphs%20displayed%20on%20screens%2C%20professional%20team%20reviewing%20impact%20metrics%2C%20modern%20analytics%20environment%2C%20collaborative%20assessment&width=600&height=400&seq=service-2&orientation=landscape"
    },
    {
      title: "Fundraising & Proposal Writing",
      description: "We help secure financial resources through donation solicitations, events, and income-generating activities like Social Enterprise incubations. Our proposal writing strategies cover both unsolicited funding and formal Calls for Proposals, ensuring strong applications with clear project ideas and detailed budgets.",
      icon: "ri-funds-line",
      image: "https://readdy.ai/api/search-image?query=Successful%20fundraising%20event%20with%20professional%20team%20celebrating%20grant%20approval%2C%20modern%20office%20environment%2C%20achievement%20celebration%2C%20collaborative%20success%20in%20nonprofit%20funding&width=600&height=400&seq=service-3&orientation=landscape"
    },
    {
      title: "Policies & Procedures Development",
      description: "Strong internal operations are key to mitigating risk and ensuring consistency. We assist in elaborating essential organizational policies, robust governance structures, and clear operational procedures that create transparency, accountability, and efficiency.",
      icon: "ri-file-text-line",
      image: "https://readdy.ai/api/search-image?query=Board%20governance%20meeting%20with%20professional%20team%20reviewing%20organizational%20policies%20and%20procedures%2C%20formal%20meeting%20room%20setting%2C%20collaborative%20policy%20development%2C%20structured%20business%20environment&width=600&height=400&seq=service-4&orientation=landscape"
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6">
            Our Core Pillars of Service
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive capacity building solutions structured around proven methodologies for maximum organizational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeService === index
                      ? 'bg-gradient-to-r from-indigo-50 to-sky-50 shadow-xl border-l-4 border-indigo-500'
                      : 'bg-gray-50 hover:bg-indigo-50 shadow-md'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeService === index ? 'bg-indigo-500 text-white' : 'bg-white text-indigo-500'
                    }`}>
                      <i className={`${service.icon} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        activeService === index ? 'text-indigo-900' : 'text-gray-800'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                        activeService === index ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Image */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-96 object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold text-indigo-900 mb-1">{services[activeService].title}</h4>
                  <div className="flex gap-2">
                    {services.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === activeService ? 'bg-indigo-500 w-8' : 'bg-gray-300 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
