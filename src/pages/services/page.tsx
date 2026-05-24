
import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20consulting%20team%20providing%20capacity%20building%20services%2C%20diverse%20Black%20professionals%20in%20modern%20office%2C%20brown%20skin%20professionals%2C%20organizational%20development%2C%20strategic%20planning%2C%20collaborative%20work%20environment%2C%20natural%20lighting&width=1920&height=1080&seq=services-hero-bg-v2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-800/85 to-purple-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Comprehensive Consulting Services
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-95">
          Eight specialized consulting areas designed to strengthen organizational capacity, 
          enhance operational efficiency, and drive sustainable growth across diverse sectors
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">✓ Bilingual Services</span>
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">✓ Expert Consultants</span>
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">✓ Proven Results</span>
          <span className="bg-white/20 px-4 py-2 rounded-full shadow-md">✓ Customized Solutions</span>
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
  const processes = [
    {
      step: "01",
      title: "Initial Consultation & Assessment",
      description: "We begin with a comprehensive organizational assessment to identify strengths, weaknesses, opportunities, and areas for improvement. This includes stakeholder interviews, document review, and organizational analysis.",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Strategic Planning & Design",
      description: "Develop customized strategic plans and implementation roadmaps aligned with your organization's mission, vision, and goals. We create detailed action plans with clear timelines and measurable outcomes.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Implementation Support & Training",
      description: "Provide ongoing support and guidance throughout the implementation process. This includes staff training, system setup, and continuous monitoring to ensure successful outcomes.",
      duration: "Ongoing"
    },
    {
      step: "04",
      title: "Monitoring, Evaluation & Optimization",
      description: "Establish robust M&E frameworks to track progress and measure the impact of implemented strategies. Regular reviews and adjustments ensure continuous improvement and sustainability.",
      duration: "Quarterly"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, evidence-based approach to organizational capacity building that ensures sustainable results and measurable impact
          </p>
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
  const serviceAreas = [
    {
      title: "Organizational Capacity Building",
      description: "Comprehensive organizational development including board, staff, and volunteer training",
      icon: "ri-building-line",
      details: [
        "Board governance and leadership development",
        "Staff capacity building and professional development",
        "Volunteer management and training programs",
        "Organizational structure optimization",
        "Change management and transformation"
      ]
    },
    {
      title: "Research & Development",
      description: "Fundraising strategies and funding proposal writing expertise",
      icon: "ri-search-line",
      details: [
        "Grant research and identification",
        "Proposal writing and development",
        "Fundraising strategy development",
        "Donor relationship management",
        "Social enterprise development"
      ]
    },
    {
      title: "Human Resources & Procedures",
      description: "Complete HR policy development and management systems",
      icon: "ri-team-line",
      details: [
        "HR policy development and implementation",
        "Recruitment and selection procedures",
        "Performance management systems",
        "Employee handbook creation",
        "Workplace safety and compliance"
      ]
    },
    {
      title: "Financial Service Support",
      description: "Comprehensive financial management and accounting services",
      icon: "ri-money-dollar-circle-line",
      details: [
        "Budget development and management",
        "Financial statement preparation",
        "Accounting system setup and training",
        "Tax preparation and filing",
        "Financial controls and procedures"
      ]
    },
    {
      title: "Monitoring & Evaluation",
      description: "Robust M&E frameworks for program assessment and impact measurement",
      icon: "ri-bar-chart-line",
      details: [
        "M&E framework design and implementation",
        "Data collection and analysis systems",
        "Impact assessment and evaluation",
        "Reporting and documentation",
        "Continuous improvement processes"
      ]
    },
    {
      title: "Translation & Interpretation",
      description: "Professional bilingual services for diverse communication needs",
      icon: "ri-translate-line",
      details: [
        "Document translation services",
        "Simultaneous interpretation",
        "Cultural adaptation and localization",
        "Multilingual content development",
        "Cross-cultural communication training"
      ]
    },
    {
      title: "Employment Readiness",
      description: "Comprehensive job preparation and career development programs",
      icon: "ri-briefcase-line",
      details: [
        "Resume and cover letter development",
        "Interview preparation and coaching",
        "Skills assessment and development",
        "Job search strategies and networking",
        "Career planning and advancement"
      ]
    },
    {
      title: "International Development",
      description: "Global capacity building and overseas placement programs",
      icon: "ri-global-line",
      details: [
        "International development project design",
        "Cross-cultural competency training",
        "Overseas placement and support",
        "Global partnership development",
        "Cultural exchange programs"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eight Specialized Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting solutions across diverse organizational needs and sectors
          </p>
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
  const industries = [
    {
      name: "Non-Profit Organizations",
      description: "Specialized support for charitable organizations, foundations, and community groups",
      icon: "ri-heart-line",
      color: "red"
    },
    {
      name: "Healthcare & Social Services",
      description: "Capacity building for healthcare providers and social service organizations",
      icon: "ri-hospital-line",
      color: "green"
    },
    {
      name: "Educational Institutions",
      description: "Strategic planning and development for schools, colleges, and training centers",
      icon: "ri-school-line",
      color: "blue"
    },
    {
      name: "Government Agencies",
      description: "Public sector consulting and capacity building for government departments",
      icon: "ri-government-line",
      color: "purple"
    },
    {
      name: "Small & Medium Enterprises",
      description: "Business development and strategic planning for growing companies",
      icon: "ri-store-line",
      color: "orange"
    },
    {
      name: "International Development",
      description: "Cross-border capacity building and international cooperation projects",
      icon: "ri-earth-line",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep sector knowledge and specialized experience across diverse industries and organizational types
          </p>
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

  const services = [
    {
      title: "Strategic Planning & Implementation",
      description: "Comprehensive strategic planning services that help organizations define their vision, mission, and create actionable roadmaps for success.",
      detailedDescription: "Our strategic planning process involves extensive stakeholder consultation, environmental scanning, SWOT analysis, and the development of clear strategic priorities. We work with your team to create implementation roadmaps with specific timelines, resource requirements, and performance indicators to ensure successful execution.",
      features: [
        "Vision and Mission Development",
        "SWOT Analysis and Strategic Priorities",
        "Implementation Roadmap Creation",
        "Stakeholder Engagement Strategies",
        "Performance Measurement Systems",
        "Strategic Plan Documentation",
        "Board and Staff Alignment",
        "Quarterly Review Processes"
      ],
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20team%20working%20on%20strategic%20planning%20with%20charts%20and%20documents%2C%20modern%20office%20environment%2C%20collaborative%20meeting%2C%20business%20strategy%20development%2C%20clean%20corporate%20setting%2C%20natural%20lighting%2C%20professional%20atmosphere&width=400&height=300&seq=strategic-planning&orientation=landscape"
    },
    {
      title: "Monitoring & Evaluation Framework",
      description: "Develop robust M&E systems to assess program effectiveness, track progress, and demonstrate impact to stakeholders and funders.",
      detailedDescription: "Our M&E frameworks are designed to provide systematic information collection and analysis throughout your program lifecycle. We establish clear indicators, data collection methods, and reporting systems that enable evidence-based decision making and continuous improvement.",
      features: [
        "M&E Framework Design",
        "Logic Model Development",
        "Data Collection Systems",
        "Impact Assessment Tools",
        "Reporting Templates",
        "Evaluation Training",
        "Database Setup and Management",
        "Stakeholder Reporting Systems"
      ],
      image: "https://readdy.ai/api/search-image?query=Data%20analysis%20and%20monitoring%20dashboard%20on%20computer%20screens%2C%20charts%20and%20graphs%2C%20evaluation%20metrics%2C%20professional%20analyst%20reviewing%20performance%20data%2C%20modern%20office%20setup%2C%20clean%20business%20environment&width=400&height=300&seq=monitoring-evaluation&orientation=landscape"
    },
    {
      title: "Fundraising & Proposal Writing",
      description: "Expert guidance in developing fundraising strategies, writing compelling grant proposals, and building sustainable revenue streams.",
      detailedDescription: "Our fundraising expertise covers the full spectrum from individual donor cultivation to major grant applications. We help organizations develop diversified funding strategies, write compelling proposals, and build lasting relationships with funders and supporters.",
      features: [
        "Grant Writing and Proposal Development",
        "Fundraising Strategy Development",
        "Donor Relationship Management",
        "Social Enterprise Development",
        "Revenue Diversification Planning",
        "Grant Research and Identification",
        "Proposal Review and Editing",
        "Funder Relationship Building"
      ],
      image: "https://readdy.ai/api/search-image?query=Professional%20woman%20writing%20grant%20proposal%20at%20desk%20with%20laptop%2C%20documents%20and%20coffee%2C%20focused%20work%20environment%2C%20modern%20office%20space%2C%20natural%20lighting%2C%20business%20professional%20setting&width=400&height=300&seq=fundraising-writing&orientation=landscape"
    },
    {
      title: "Policies & Procedures Development",
      description: "Comprehensive policy development covering all aspects of organizational governance, HR, and operational procedures.",
      detailedDescription: "We develop complete policy frameworks that ensure legal compliance, operational efficiency, and organizational effectiveness. Our policies are tailored to your specific context while meeting industry standards and regulatory requirements.",
      features: [
        "Code of Conduct and Ethics Policies",
        "HR Policies and Procedures",
        "Financial Management Policies",
        "Health and Safety Guidelines",
        "Board Governance Frameworks",
        "Operational Procedures Manual",
        "Risk Management Policies",
        "Compliance and Regulatory Policies"
      ],
      image: "https://readdy.ai/api/search-image?query=Legal%20documents%20and%20policy%20manuals%20on%20desk%2C%20professional%20office%20setting%2C%20organized%20paperwork%2C%20compliance%20documentation%2C%20business%20governance%20materials%2C%20clean%20corporate%20environment&width=400&height=300&seq=policies-procedures&orientation=landscape"
    },
    {
      title: "Financial Management & Budgeting",
      description: "Training and support in financial management, budgeting, accounting practices, and tax preparation for organizations.",
      detailedDescription: "Our financial management services ensure your organization maintains sound fiscal practices, meets regulatory requirements, and maximizes resource utilization. We provide both training and hands-on support to build internal capacity.",
      features: [
        "Budget Development and Management",
        "Financial Statement Analysis",
        "Accounting System Setup",
        "Tax Preparation and Filing",
        "Financial Controls Implementation",
        "Cash Flow Management",
        "Financial Reporting Systems",
        "Audit Preparation and Support"
      ],
      image: "https://readdy.ai/api/search-image?query=Financial%20charts%20and%20budget%20spreadsheets%20on%20computer%20screen%2C%20calculator%20and%20documents%2C%20professional%20accountant%20working%2C%20modern%20office%20environment%2C%20business%20financial%20planning&width=400&height=300&seq=financial-management&orientation=landscape"
    },
    {
      title: "Training & Capacity Building",
      description: "Customized training programs for board members, staff, and volunteers to enhance organizational effectiveness.",
      detailedDescription: "Our training programs are designed to build individual and organizational capacity through interactive workshops, seminars, and ongoing coaching. We customize content to meet specific learning objectives and organizational needs.",
      features: [
        "Board Governance Training",
        "Leadership Development",
        "Employment Readiness Programs",
        "Skills Development Workshops",
        "Organizational Training Programs",
        "Professional Development Planning",
        "Mentoring and Coaching",
        "Train-the-Trainer Programs"
      ],
      image: "https://readdy.ai/api/search-image?query=Professional%20training%20session%20with%20instructor%20presenting%20to%20diverse%20group%20of%20participants%2C%20modern%20conference%20room%2C%20interactive%20workshop%2C%20capacity%20building%20seminar%2C%20collaborative%20learning%20environment&width=400&height=300&seq=training-capacity&orientation=landscape"
    }
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <ServicesHero />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a full range of capacity-building services designed to strengthen your organization from the ground up
              </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Strengthen Your Organization?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our capacity-building services can help your organization achieve its goals and maximize its impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Schedule Consultation
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Learn About Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}