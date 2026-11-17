import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/about.json';
// Text, images and links: src/content/pages/about.json (editable in the website editors).

const AboutHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${copy.hero.backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-800/85 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{copy.hero.title}</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-300">{copy.hero.heading}</h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">{copy.hero.text}</p>
      </div>
    </section>
  );
};

const CompanyOverview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.companyOverview.heading}</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{copy.companyOverview.text}</p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{copy.companyOverview.text2}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{copy.companyOverview.text3}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{copy.companyOverview.subheading}</h3>
                <p className="text-blue-800">{copy.companyOverview.text4}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">{copy.companyOverview.subheading2}</h3>
                <p className="text-green-800">{copy.companyOverview.text5}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={copy.companyOverview.image}
              alt={copy.companyOverview.imageAlt}
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{copy.companyOverview.text6}</div>
                <div className="text-sm text-gray-600">{copy.companyOverview.text7}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.leadershipSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.leadershipSection.text}</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src={copy.leadershipSection.image}
                    alt={copy.leadershipSection.imageAlt}
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{copy.leadershipSection.subheading}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{copy.leadershipSection.text2}</p>
                  <p className="text-lg text-gray-600 mb-4">{copy.leadershipSection.text3}</p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{copy.leadershipSection.text4}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <i className="ri-graduation-cap-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">{copy.leadershipSection.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-briefcase-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">{copy.leadershipSection.label2}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-award-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">{copy.leadershipSection.label3}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-global-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">{copy.leadershipSection.label4}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{copy.leadershipSection.subheading2}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{copy.leadershipSection.text5}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{copy.leadershipSection.subheading3}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{copy.leadershipSection.text6}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{copy.leadershipSection.subheading4}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{copy.leadershipSection.text7}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaShowcaseSection = () => {
  const mediaItems = copy.mediaItems;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.mediaShowcaseSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.mediaShowcaseSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                {item.type === 'image' ? (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="relative">
                    <img 
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-play-fill text-blue-600 text-2xl ml-1"></i>
                      </div>
                    </div>
                    {item.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {item.duration}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <i className={`${item.type === 'image' ? 'ri-image-line' : 'ri-video-line'} text-blue-600`}></i>
                    <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <i className="ri-gallery-line text-xl"></i>{copy.mediaShowcaseSection.text2}<i className="ri-arrow-right-line text-xl"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CoreValuesSection = () => {
  const values = copy.values;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.coreValuesSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.coreValuesSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${value.icon} text-${value.color}-600 text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.approachSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.approachSection.text}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{copy.approachSection.subheading}</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{copy.approachSection.text2}</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-search-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{copy.approachSection.subheading2}</h4>
                  <p className="text-gray-600">{copy.approachSection.text3}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-bar-chart-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{copy.approachSection.subheading3}</h4>
                  <p className="text-gray-600">{copy.approachSection.text4}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-presentation-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{copy.approachSection.subheading4}</h4>
                  <p className="text-gray-600">{copy.approachSection.text5}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={copy.approachSection.image}
              alt={copy.approachSection.imageAlt}
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSuccessSection = () => {
  const clientCategories = copy.clientCategories;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.clientSuccessSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.clientSuccessSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                  <i className={`${category.icon} text-${category.color}-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.clients.map((client, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <i className="ri-arrow-right-s-line text-gray-400 mr-1 mt-0.5"></i>
                    {client}
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

const ExpertiseHighlightsSection = () => {
  const achievements = copy.achievements;

  const expertiseAreas = copy.expertiseAreas;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.expertiseHighlightsSection.heading}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">{copy.expertiseHighlightsSection.text}</p>
        </div>
        
        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${achievement.icon} text-2xl`}></i>
              </div>
              <div className="text-4xl font-bold mb-2">{achievement.number}</div>
              <div className="text-xl font-semibold mb-2">{achievement.label}</div>
              <p className="text-sm opacity-90">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <i className={`${area.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="opacity-90 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >{copy.expertiseAreasSection.text}<i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{copy.page.text}</div>}>
      <div className="min-h-screen">
        <AboutHero />
        <CompanyOverview />
        <LeadershipSection />
        <MediaShowcaseSection />
        <CoreValuesSection />
        <ApproachSection />
        <ClientSuccessSection />
        <ExpertiseHighlightsSection />
      </div>
    </Suspense>
  );
}