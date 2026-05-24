
import { useState, useEffect, useRef } from 'react';

const MissionSection = () => {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6">
            Our Mission: Driving Sustainable Growth
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            KWB / CSF: Driving capacity building and sustainable growth for community organizations worldwide. 
            Knowledge Without Borders, Connaissance Sans Frontières. We are your partner in strategic transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Image Grid */}
          <div className={`lg:col-span-2 grid grid-cols-2 gap-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20training%20workshop%20with%20diverse%20participants%20engaged%20in%20strategic%20planning%20session%2C%20modern%20conference%20room%20setting%2C%20collaborative%20learning%20environment%2C%20natural%20lighting%2C%20business%20professional%20atmosphere&width=400&height=300&seq=mission-1&orientation=landscape"
                  alt="Training Event"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://readdy.ai/api/search-image?query=Community%20development%20project%20site%20visit%20with%20team%20members%20reviewing%20progress%2C%20outdoor%20setting%2C%20professional%20consultation%2C%20collaborative%20work%20environment%2C%20natural%20daylight&width=400&height=200&seq=mission-3&orientation=landscape"
                  alt="Team Collaboration"
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="space-y-6 mt-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://readdy.ai/api/search-image?query=Successful%20community%20project%20implementation%20showing%20positive%20impact%20results%2C%20professional%20documentation%2C%20achievement%20celebration%2C%20modern%20office%20environment%2C%20collaborative%20success&width=400&height=200&seq=mission-4&orientation=landscape"
                  alt="Impact Results"
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="https://readdy.ai/api/search-image?query=Strategic%20planning%20project%20site%20with%20team%20members%20conducting%20field%20assessment%2C%20professional%20consultation%20environment%2C%20collaborative%20planning%20session%2C%20natural%20outdoor%20setting&width=400&height=300&seq=mission-2&orientation=landscape"
                  alt="Project Site"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className={`lg:col-span-1 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-indigo-100 to-sky-100 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer">
              <div className="aspect-[9/16] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-play-fill text-3xl text-indigo-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">Founder's Message</h3>
                  <p className="text-indigo-700">Watch our vision in action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
