
import { useState, useEffect, useRef } from 'react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ organizations: 0, countries: 0, projects: 0, years: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = { organizations: 150, countries: 25, projects: 300, years: 15 };

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
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          organizations: Math.floor(finalCounts.organizations * progress),
          countries: Math.floor(finalCounts.countries * progress),
          projects: Math.floor(finalCounts.projects * progress),
          years: Math.floor(finalCounts.years * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://readdy.ai/api/search-image?query=Global%20network%20visualization%20with%20interconnected%20nodes%20representing%20worldwide%20organizational%20connections%2C%20modern%20digital%20interface%2C%20professional%20business%20network%2C%20collaborative%20international%20partnerships%2C%20clean%20minimalist%20design&width=1920&height=800&seq=impact-bg&orientation=landscape"
          alt="Global Impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-indigo-800/90 to-sky-700/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            KWB's Global Impact: Knowledge Without Borders
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Transforming communities worldwide through strategic capacity building and sustainable organizational development.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { key: 'organizations', label: 'Organizations Served', suffix: '+', icon: 'ri-building-line' },
            { key: 'countries', label: 'Countries Reached', suffix: '+', icon: 'ri-global-line' },
            { key: 'projects', label: 'Projects Completed', suffix: '+', icon: 'ri-checkbox-circle-line' },
            { key: 'years', label: 'Years of Experience', suffix: '', icon: 'ri-time-line' }
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {counters[stat.key as keyof typeof counters]}{stat.suffix}
                </div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 hover:shadow-sky-500/25 whitespace-nowrap cursor-pointer">
            <span className="flex items-center gap-3">
              View Our Mission
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
