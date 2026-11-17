import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/training.json';
// Text, images and links: src/content/pages/training.json (editable in the website editors).

const TrainingHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${copy.hero.backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-teal-800/85 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{copy.hero.title}</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95 mb-8">{copy.hero.text}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full">{copy.hero.label}</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">{copy.hero.label2}</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">{copy.hero.label3}</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">{copy.hero.label4}</span>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ program, isExpanded, onToggle }: {
  program: any;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 bg-${program.color}-100 rounded-lg flex items-center justify-center`}>
            <i className={`${program.icon} text-${program.color}-600 text-xl`}></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <i className="ri-time-line text-blue-600 text-xl mb-2"></i>
            <div className="text-sm text-gray-600">{copy.programCard.text}</div>
            <div className="font-semibold text-gray-900">{program.duration}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <i className="ri-group-line text-green-600 text-xl mb-2"></i>
            <div className="text-sm text-gray-600">{copy.programCard.text2}</div>
            <div className="font-semibold text-gray-900">{program.participants}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <i className="ri-presentation-line text-purple-600 text-xl mb-2"></i>
            <div className="text-sm text-gray-600">{copy.programCard.text3}</div>
            <div className="font-semibold text-gray-900">{program.format}</div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="space-y-6 mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{copy.programCard.subheading}</h4>
              <ul className="space-y-2">
                {program.objectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-check-line text-green-500 text-xl mr-3 mt-0.5"></i>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{copy.programCard.subheading2}</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {program.topics.map((topic: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <i className="ri-arrow-right-s-line text-blue-500 mr-2"></i>
                    <span className="text-gray-700 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{copy.programCard.subheading3}</h4>
              <p className="text-gray-700 leading-relaxed">{program.outcomes}</p>
            </div>
          </div>
        )}
        
        <button 
          onClick={onToggle}
          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
          <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-line`}></i>
        </button>
      </div>
    </div>
  );
};

const TrainingApproachSection = () => {
  const approaches = copy.approaches;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.trainingApproachSection.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.trainingApproachSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 bg-${approach.color}-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${approach.icon} text-${approach.color}-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
              <p className="text-gray-600 leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.benefitsSection.heading}</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{copy.benefitsSection.text}</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-arrow-up-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.benefitsSection.subheading}</h3>
                  <p className="text-gray-600">{copy.benefitsSection.text2}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.benefitsSection.subheading2}</h3>
                  <p className="text-gray-600">{copy.benefitsSection.text3}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.benefitsSection.subheading3}</h3>
                  <p className="text-gray-600">{copy.benefitsSection.text4}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-rocket-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.benefitsSection.subheading4}</h3>
                  <p className="text-gray-600">{copy.benefitsSection.text5}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={copy.benefitsSection.image}
              alt={copy.benefitsSection.imageAlt}
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{copy.ctasection.heading}</h2>
      <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">{copy.ctasection.text}</p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-calendar-line"></i>{copy.ctasection.text2}</Link>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >{copy.ctasection.text3}</Link>
      </div>
    </div>
  </section>
);

export default function TrainingPage() {
  const { t } = useTranslation();
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const trainingPrograms = copy.trainingPrograms;

  return (
    <Suspense fallback={<div>{copy.page.text}</div>}>
      <div className="min-h-screen">
        <TrainingHero />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.page.heading}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.page.text2}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <ProgramCard 
                  key={index} 
                  program={program}
                  isExpanded={expandedProgram === index}
                  onToggle={() => setExpandedProgram(expandedProgram === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <TrainingApproachSection />
        <BenefitsSection />

        <CTASection />
      </div>
    </Suspense>
  );
}