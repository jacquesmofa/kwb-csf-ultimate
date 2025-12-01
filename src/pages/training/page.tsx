import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

const TrainingHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20training%20workshop%2C%20diverse%20Black%20professionals%20in%20learning%20session%2C%20brown%20skin%20professionals%2C%20capacity%20building%20training%2C%20modern%20conference%20room%2C%20interactive%20professional%20development%2C%20natural%20lighting&width=1920&height=1080&seq=training-hero-bg-v2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-teal-800/85 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Professional Training Programs
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95 mb-8">
          Comprehensive capacity-building training solutions for board members, staff, volunteers, 
          and individuals seeking professional development
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Interactive Workshops</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Customized Programs</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Expert Facilitators</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Bilingual Delivery</span>
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
            <div className="text-sm text-gray-600">Duration</div>
            <div className="font-semibold text-gray-900">{program.duration}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <i className="ri-group-line text-green-600 text-xl mb-2"></i>
            <div className="text-sm text-gray-600">Participants</div>
            <div className="font-semibold text-gray-900">{program.participants}</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <i className="ri-presentation-line text-purple-600 text-xl mb-2"></i>
            <div className="text-sm text-gray-600">Format</div>
            <div className="font-semibold text-gray-900">{program.format}</div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="space-y-6 mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Learning Objectives</h4>
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
              <h4 className="text-lg font-bold text-gray-900 mb-3">Key Topics Covered</h4>
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
              <h4 className="text-lg font-bold text-gray-900 mb-3">Expected Outcomes</h4>
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
  const approaches = [
    {
      title: "Interactive Learning",
      description: "Engaging workshops that combine theory with practical exercises and real-world case studies",
      icon: "ri-presentation-line",
      color: "blue"
    },
    {
      title: "Customized Content",
      description: "Training programs tailored to your organization's specific needs, context, and challenges",
      icon: "ri-settings-line",
      color: "green"
    },
    {
      title: "Expert Facilitation",
      description: "Led by experienced professionals with deep expertise in organizational development",
      icon: "ri-user-star-line",
      color: "purple"
    },
    {
      title: "Practical Application",
      description: "Focus on immediately applicable skills and knowledge that participants can use right away",
      icon: "ri-tools-line",
      color: "orange"
    },
    {
      title: "Ongoing Support",
      description: "Post-training coaching and support to ensure successful implementation of new skills",
      icon: "ri-support-line",
      color: "red"
    },
    {
      title: "Bilingual Delivery",
      description: "Training available in both English and French to serve diverse communities",
      icon: "ri-translate-line",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Training Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based, interactive training methodologies that ensure effective learning and skill development
          </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Professional Development
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Investing in professional development training creates lasting positive impact for individuals, 
              teams, and organizations as a whole.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-arrow-up-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Performance</h3>
                  <p className="text-gray-600">Improved skills and knowledge lead to better job performance and organizational effectiveness</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stronger Leadership</h3>
                  <p className="text-gray-600">Develop confident, capable leaders who can guide organizations through challenges and change</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Better Governance</h3>
                  <p className="text-gray-600">Improved board governance and organizational oversight through proper training and development</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-rocket-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Career Advancement</h3>
                  <p className="text-gray-600">Enhanced employability and career prospects through professional skill development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20development%20success%2C%20diverse%20team%20celebrating%20achievement%2C%20workplace%20training%20results%2C%20career%20advancement%2C%20organizational%20growth%2C%20modern%20office%20environment&width=600&height=400&seq=training-benefits&orientation=landscape"
              alt="Training Benefits"
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
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Invest in Professional Development?
      </h2>
      <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
        Contact us to discuss customized training solutions that meet your organization's specific needs and goals.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-calendar-line"></i>
          Schedule Training Consultation
        </Link>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          View All Services
        </Link>
      </div>
    </div>
  </section>
);

export default function TrainingPage() {
  const { t } = useTranslation();
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const trainingPrograms = [
    {
      title: "Board Governance Training",
      description: "Comprehensive training program designed to enhance board effectiveness, governance practices, and strategic oversight capabilities.",
      duration: "2-3 Days",
      participants: "Board Members",
      format: "Workshop",
      color: "blue",
      icon: "ri-shield-check-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20board%20meeting%20training%20session%2C%20diverse%20board%20members%2C%20governance%20workshop%2C%20modern%20conference%20room%2C%20facilitator%20presenting%2C%20collaborative%20environment&width=400&height=300&seq=board-training&orientation=landscape",
      objectives: [
        "Understand roles and responsibilities of board members",
        "Develop effective governance policies and procedures",
        "Enhance strategic planning and oversight capabilities",
        "Improve board meeting effectiveness and decision-making",
        "Strengthen fiduciary responsibilities and legal compliance"
      ],
      topics: [
        "Board Roles and Responsibilities",
        "Governance Best Practices",
        "Strategic Planning Oversight",
        "Financial Oversight and Accountability",
        "Risk Management",
        "Board Meeting Management",
        "Conflict of Interest Policies",
        "Executive Director Evaluation"
      ],
      outcomes: "Participants will gain comprehensive understanding of effective board governance, develop practical skills for board leadership, and create action plans for improving their organization's governance practices."
    },
    {
      title: "Leadership Development Program",
      description: "Strategic leadership training focused on developing essential management and leadership skills for organizational excellence.",
      duration: "1-2 Days",
      participants: "Senior Management",
      format: "Interactive Workshop",
      color: "green",
      icon: "ri-user-star-line",
      image: "https://readdy.ai/api/search-image?query=Leadership%20development%20workshop%2C%20professional%20facilitator%20training%20executives%2C%20management%20skills%20development%2C%20modern%20training%20room%2C%20interactive%20session&width=400&height=300&seq=leadership-training&orientation=landscape",
      objectives: [
        "Develop authentic leadership style and presence",
        "Enhance communication and interpersonal skills",
        "Master change management and organizational transformation",
        "Build high-performing teams and foster collaboration",
        "Strengthen decision-making and problem-solving abilities"
      ],
      topics: [
        "Leadership Styles and Emotional Intelligence",
        "Strategic Thinking and Vision Development",
        "Team Building and Motivation",
        "Communication and Conflict Resolution",
        "Change Management",
        "Performance Management",
        "Delegation and Empowerment",
        "Innovation and Creativity"
      ],
      outcomes: "Leaders will develop enhanced self-awareness, improved management capabilities, and practical tools for driving organizational success and team performance."
    },
    {
      title: "Employment Readiness Training",
      description: "Comprehensive job preparation program designed to enhance employability and career development prospects.",
      duration: "4-6 Weeks",
      participants: "Job Seekers",
      format: "Multi-session Program",
      color: "purple",
      icon: "ri-briefcase-line",
      image: "https://readdy.ai/api/search-image?query=Employment%20readiness%20training%20session%2C%20diverse%20job%20seekers%2C%20career%20development%20workshop%2C%20professional%20skills%20training%2C%20modern%20classroom%20environment&width=400&height=300&seq=employment-training&orientation=landscape",
      objectives: [
        "Develop effective job search strategies and techniques",
        "Create compelling resumes and cover letters",
        "Master interview skills and professional presentation",
        "Build networking and relationship-building capabilities",
        "Enhance workplace readiness and professional skills"
      ],
      topics: [
        "Resume and Cover Letter Writing",
        "Interview Preparation and Practice",
        "Job Search Strategies",
        "Networking and Professional Relationships",
        "Workplace Communication",
        "Professional Etiquette",
        "Career Planning and Goal Setting",
        "Digital Literacy and Online Presence"
      ],
      outcomes: "Participants will gain confidence in job searching, develop professional presentation skills, and create personalized career action plans for successful employment."
    },
    {
      title: "Skills Development Workshops",
      description: "Targeted skill-building sessions focused on specific competencies needed for professional and organizational success.",
      duration: "1 Day",
      participants: "Staff & Volunteers",
      format: "Hands-on Workshop",
      color: "orange",
      icon: "ri-tools-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20skills%20workshop%2C%20hands-on%20training%20session%2C%20diverse%20participants%20learning%2C%20interactive%20skill%20development%2C%20modern%20training%20facility&width=400&height=300&seq=skills-workshop&orientation=landscape",
      objectives: [
        "Develop specific technical and soft skills",
        "Enhance productivity and work efficiency",
        "Improve communication and collaboration abilities",
        "Build problem-solving and critical thinking skills",
        "Strengthen project management capabilities"
      ],
      topics: [
        "Communication and Presentation Skills",
        "Project Management Fundamentals",
        "Time Management and Productivity",
        "Customer Service Excellence",
        "Teamwork and Collaboration",
        "Problem-Solving Techniques",
        "Technology and Digital Skills",
        "Quality Improvement Methods"
      ],
      outcomes: "Participants will acquire practical skills immediately applicable to their work, improved confidence in their abilities, and enhanced contribution to organizational success."
    },
    {
      title: "Organizational Training Programs",
      description: "Customized training solutions designed to address specific organizational needs and capacity-building requirements.",
      duration: "Flexible",
      participants: "All Staff",
      format: "Customized",
      color: "red",
      icon: "ri-building-line",
      image: "https://readdy.ai/api/search-image?query=Organizational%20training%20program%2C%20company-wide%20workshop%2C%20professional%20development%20session%2C%20diverse%20employees%2C%20modern%20corporate%20training%20room&width=400&height=300&seq=org-training&orientation=landscape",
      objectives: [
        "Address specific organizational capacity gaps",
        "Align staff skills with organizational goals",
        "Improve overall organizational performance",
        "Foster a culture of continuous learning",
        "Enhance employee engagement and retention"
      ],
      topics: [
        "Organizational Culture and Values",
        "Policy and Procedure Training",
        "Customer Service Standards",
        "Health and Safety Protocols",
        "Diversity and Inclusion",
        "Ethics and Professional Conduct",
        "Technology and System Training",
        "Quality Assurance and Standards"
      ],
      outcomes: "Organizations will see improved staff performance, better alignment with organizational goals, enhanced workplace culture, and increased operational effectiveness."
    },
    {
      title: "Professional Development Planning",
      description: "Strategic career development program focused on creating personalized professional growth pathways.",
      duration: "2 Days",
      participants: "Individual Professionals",
      format: "Coaching & Workshop",
      color: "teal",
      icon: "ri-roadmap-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20development%20planning%20session%2C%20career%20coaching%2C%20individual%20consultation%2C%20professional%20growth%20planning%2C%20modern%20office%20consultation%20room&width=400&height=300&seq=prof-development&orientation=landscape",
      objectives: [
        "Assess current skills and competencies",
        "Identify career goals and development opportunities",
        "Create personalized professional development plans",
        "Develop strategies for skill enhancement",
        "Build networks and mentoring relationships"
      ],
      topics: [
        "Skills Assessment and Gap Analysis",
        "Career Goal Setting and Planning",
        "Professional Development Strategies",
        "Networking and Relationship Building",
        "Mentoring and Coaching",
        "Continuing Education Options",
        "Performance Improvement Planning",
        "Work-Life Balance and Wellness"
      ],
      outcomes: "Individuals will have clear career direction, personalized development plans, enhanced self-awareness, and practical strategies for achieving professional goals."
    }
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <TrainingHero />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Training Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional development programs designed to build capacity, enhance skills, and drive organizational success
              </p>
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