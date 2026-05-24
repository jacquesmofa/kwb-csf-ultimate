import { useState, useEffect, useRef } from 'react';

const TeamSection = () => {
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

  const articles = [
    {
      title: "Strategic Planning Best Practices",
      excerpt: "Essential frameworks for developing comprehensive organizational strategies that drive sustainable growth and community impact.",
      category: "Strategy",
      readTime: "5 min read",
      image: "https://readdy.ai/api/search-image?query=Professional%20strategic%20planning%20document%20with%20charts%20and%20graphs%20on%20modern%20desk%2C%20African%20Canadian%20business%20professional%20reviewing%20plans%2C%20Black%20professional%2C%20brown%20skin%20professional%2C%20business%20planning%20materials%2C%20organizational%20development%20resources%2C%20clean%20office%20environment&width=400&height=250&seq=article-1-v2&orientation=landscape"
    },
    {
      title: "M&E Trends in Nonprofit Sector",
      excerpt: "Latest monitoring and evaluation methodologies that help organizations measure impact and improve program effectiveness.",
      category: "Evaluation",
      readTime: "7 min read",
      image: "https://readdy.ai/api/search-image?query=Data%20visualization%20dashboard%20showing%20nonprofit%20impact%20metrics%2C%20African%20Canadian%20professional%20analyzing%20evaluation%20results%2C%20Black%20professional%2C%20brown%20skin%20professional%2C%20modern%20analytics%20interface%2C%20monitoring%20evaluation%20tools%2C%20professional%20assessment%20environment&width=400&height=250&seq=article-2-v2&orientation=landscape"
    },
    {
      title: "Governance & Ethics Framework",
      excerpt: "Building robust governance structures and ethical frameworks that ensure organizational accountability and transparency.",
      category: "Governance",
      readTime: "6 min read",
      image: "https://readdy.ai/api/search-image?query=Board%20governance%20meeting%20with%20diverse%20African%20Canadian%20professionals%20discussing%20organizational%20ethics%20and%20policies%2C%20Black%20professionals%2C%20brown%20skin%20professionals%2C%20formal%20meeting%20room%2C%20collaborative%20governance%20session%2C%20professional%20business%20environment&width=400&height=250&seq=article-3-v2&orientation=landscape"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Articles */}
        <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6">
              Featured Articles & Thought Leadership
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insights and expertise from our capacity building practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <i className="ri-arrow-right-line text-indigo-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leader Section */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6">
              Meet Our Founder and CEO
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/0a417ae60d1ad419d8e37dd49426b93b.jpeg"
                  alt="Dr. François Yabit - CEO and Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-indigo-900 mb-2">Dr. François Yabit</h3>
                  <p className="text-xl text-indigo-600 font-medium mb-4">MA, MBA, PgD, PhD, CFA</p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Currently led by Dr. François Yabit, a multidisciplinary and poly-experienced individual 
                    with extensive expertise in organizational capacity building, strategic planning, and 
                    sustainable development across multiple sectors and international contexts.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-indigo-600"></i>
                    </div>
                    <span className="text-gray-700">Multiple Advanced Degrees & Certifications</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <i className="ri-global-line text-indigo-600"></i>
                    </div>
                    <span className="text-gray-700">International Development Experience</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <i className="ri-lightbulb-line text-indigo-600"></i>
                    </div>
                    <span className="text-gray-700">Strategic Innovation Leadership</span>
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

export default TeamSection;
