import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/policies.json';
// Text, images and links: src/content/pages/policies.json (editable in the website editors).

const PoliciesHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${copy.hero.backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-800/85 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{copy.hero.title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">{copy.hero.text}</p>
      </div>
    </section>
  );
};

const PolicyCard = ({ title, description, items, icon }: {
  title: string;
  description: string;
  items: string[];
  icon: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-8">
        <div className="flex items-start mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <i className={`${icon} text-blue-600 text-xl`}></i>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mb-4"
        >
          <span>{copy.policyCard.label}</span>
          <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line ml-2 transition-transform`}></i>
        </button>
        
        {isExpanded && (
          <div className="border-t pt-6">
            <h4 className="font-semibold text-gray-900 mb-4">{copy.policyCard.subheading}</h4>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="ri-check-line text-green-500 text-lg mr-3 mt-0.5 flex-shrink-0"></i>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const CorePolicies = () => {
  const policies = copy.policies;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.corePolicies.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.corePolicies.text}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <PolicyCard key={index} {...policy} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PolicyDevelopmentProcess = () => {
  const steps = copy.steps;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.policyDevelopmentProcess.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.policyDevelopmentProcess.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
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
          to="/contact" 
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >{copy.ctasection.text3}</Link>
      </div>
    </div>
  </section>
);

export default function PoliciesPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{copy.page.text}</div>}>
      <div className="min-h-screen">
        <PoliciesHero />
        <CorePolicies />
        <PolicyDevelopmentProcess />
        <CTASection />
      </div>
    </Suspense>
  );
}
