import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

const PoliciesHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20business%20professionals%20reviewing%20policy%20documents%2C%20diverse%20Black%20professionals%20in%20governance%20meeting%2C%20brown%20skin%20professionals%2C%20organizational%20policy%20development%2C%20modern%20boardroom%2C%20professional%20consultation%2C%20natural%20lighting&width=1920&height=1080&seq=policies-hero-bg-v2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-800/85 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Policies & Procedures
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
          Comprehensive policy development services to ensure your organization operates with clarity, compliance, and best practices.
        </p>
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
          <span>View Details</span>
          <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line ml-2 transition-transform`}></i>
        </button>
        
        {isExpanded && (
          <div className="border-t pt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Key Components:</h4>
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
  const policies = [
    {
      title: "Code of Conduct & Ethics",
      description: "Comprehensive ethical guidelines that outline organizational expectations for employee behavior, creating a safe and professional workplace environment.",
      icon: "ri-shield-check-line",
      items: [
        "Professional dress code standards",
        "Conflict of interest policies and procedures",
        "Confidentiality and privacy protection guidelines",
        "Anti-violence and harassment prevention measures",
        "Social media and communication protocols",
        "Whistleblower protection procedures",
        "Clear roles and responsibilities for staff and volunteers",
        "Client rights and responsibilities framework",
        "Emergency procedures for natural disasters and snow days"
      ]
    },
    {
      title: "Human Resources Policies",
      description: "Complete HR framework covering recruitment, performance management, and employee relations to ensure fair and consistent practices.",
      icon: "ri-team-line",
      items: [
        "Recruitment and candidate selection criteria",
        "New employee onboarding processes",
        "Performance evaluation and promotion procedures",
        "Termination policies and procedures",
        "Working hours and overtime compensation",
        "Attendance and remote work guidelines",
        "Leave policies (vacation, sick, parental, etc.)",
        "Benefits and compensation structures",
        "Professional development opportunities"
      ]
    },
    {
      title: "Financial Management Policies",
      description: "Robust financial controls and procedures to ensure transparency, accountability, and proper stewardship of organizational resources.",
      icon: "ri-money-dollar-circle-line",
      items: [
        "Budget development and approval processes",
        "Expense management and reimbursement procedures",
        "Financial reporting and accountability measures",
        "Procurement and purchasing guidelines",
        "Cash handling and banking procedures",
        "Asset management and inventory control",
        "Audit preparation and compliance requirements",
        "Grant management and reporting protocols",
        "Financial risk management strategies"
      ]
    },
    {
      title: "Health & Safety Policies",
      description: "Comprehensive safety protocols to protect employees, volunteers, and clients while ensuring compliance with occupational health standards.",
      icon: "ri-shield-line",
      items: [
        "Workplace safety procedures and protocols",
        "Emergency response and evacuation plans",
        "Incident reporting and investigation processes",
        "Communicable disease prevention measures",
        "Personal protective equipment guidelines",
        "Workplace ergonomics and injury prevention",
        "Mental health and wellness support programs",
        "Safety training and certification requirements",
        "Regular safety audits and assessments"
      ]
    },
    {
      title: "Board Governance Policies",
      description: "Clear governance framework defining board roles, responsibilities, and decision-making processes to ensure effective organizational leadership.",
      icon: "ri-government-line",
      items: [
        "Board composition and member qualifications",
        "Meeting procedures and decision-making protocols",
        "Committee structures and responsibilities",
        "Board member orientation and training",
        "Strategic planning and oversight responsibilities",
        "Executive director evaluation and support",
        "Risk management and compliance oversight",
        "Stakeholder engagement and communication",
        "Board performance evaluation processes"
      ]
    },
    {
      title: "Fundraising & Donation Policies",
      description: "Ethical fundraising guidelines and donor stewardship practices to build trust and ensure sustainable revenue generation.",
      icon: "ri-hand-heart-line",
      items: [
        "Donor privacy and data protection measures",
        "Gift acceptance and recognition policies",
        "Planned giving and legacy donation procedures",
        "Fundraising event management guidelines",
        "Grant application and management protocols",
        "Corporate partnership and sponsorship policies",
        "Volunteer fundraiser training and support",
        "Financial transparency and reporting to donors",
        "Ethical fundraising practices and standards"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Essential Organizational Policies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The 12 critical policies every nonprofit organization should have to ensure effective governance and operations
          </p>
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
  const steps = [
    {
      step: "01",
      title: "Assessment & Analysis",
      description: "We conduct a comprehensive review of your current policies and identify gaps in your organizational framework."
    },
    {
      step: "02",
      title: "Stakeholder Consultation",
      description: "Engage with board members, staff, and key stakeholders to understand specific needs and organizational culture."
    },
    {
      step: "03",
      title: "Policy Development",
      description: "Create customized policies that align with best practices, legal requirements, and your organization's mission."
    },
    {
      step: "04",
      title: "Review & Refinement",
      description: "Collaborate with your team to review, refine, and finalize policies ensuring they meet your specific needs."
    },
    {
      step: "05",
      title: "Implementation Support",
      description: "Provide training and support to ensure smooth implementation and adoption of new policies across the organization."
    },
    {
      step: "06",
      title: "Ongoing Maintenance",
      description: "Establish review schedules and update procedures to keep policies current and compliant with changing regulations."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Policy Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to creating comprehensive, practical policies that strengthen your organization
          </p>
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
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Strengthen Your Governance?
      </h2>
      <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
        Let us help you develop comprehensive policies that protect your organization and empower your team to succeed.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-calendar-line"></i>
          Schedule Policy Assessment
        </Link>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          Get Expert Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default function PoliciesPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <PoliciesHero />
        <CorePolicies />
        <PolicyDevelopmentProcess />
        <CTASection />
      </div>
    </Suspense>
  );
}
