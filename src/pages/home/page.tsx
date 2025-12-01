import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero Section Component
  const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20business%20team%20collaborating%20in%20modern%20conference%20room%20with%20natural%20lighting%2C%20Black%20professionals%20in%20strategic%20planning%20meeting%2C%20brown-skinned%20multicultural%20team%20working%20together%2C%20diverse%20African%20descent%20professionals%2C%20clean%20minimalist%20corporate%20environment%2C%20left%20side%20has%20subtle%20gradient%20overlay%20for%20text%20readability&width=1920&height=1080&seq=hero-bg-african-canadian&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/80 to-sky-700/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl font-semibold text-yellow-300 uppercase tracking-widest mb-6 animate-pulse">
              Bilingual Capacity Building Excellence
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
              KNOWLEDGE WITHOUT
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-yellow-300">
                BORDERS
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-indigo-200 leading-tight mb-8 drop-shadow-lg">
              CONNAISSANCE SANS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-sky-300">
                FRONTIÈRES
              </span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                A bilingual firm incorporated in November 2018, providing capacity-building services to individuals, organizations, and businesses across 8 specialized consulting areas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/services" className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 hover:shadow-sky-500/25 whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-3">
                  Explore Our Services
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </Link>
              
              <Link to="/contact" className="group px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-3">
                  <i className="ri-calendar-line"></i>
                  Schedule Consultation
                </span>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-indigo-200">
              <span className="flex items-center gap-2">
                <i className="ri-phone-line"></i>
                (437) 875-8045
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-mail-line"></i>
                kwb.csfglobal@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-global-line"></i>
                www.kwb-csf.com
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  };

  // Mission & Vision Section
  const MissionSection = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building organizational capacity through comprehensive, bilingual consulting services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <i className="ri-target-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide comprehensive capacity-building services to individuals, organizations, and businesses, 
              empowering them to achieve sustainable growth and meaningful impact in their communities through 
              strategic planning, organizational development, and professional excellence.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
              <i className="ri-eye-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading bilingual consulting firm that bridges knowledge gaps and removes barriers, 
              creating a world where organizations thrive through enhanced capacity, strategic excellence, 
              and sustainable development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Services Preview Section
  const ServicesPreview = () => (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Eight specialized consulting areas designed to strengthen your organization
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Services <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Strategic Planning & Implementation",
              description: "Comprehensive strategic planning services that focus on three fundamental questions: What does your organization want to do? How will it achieve its goals? What impact will success create? Our process involves developing vision, mission, values, programs, SWOT analysis, and strategic priorities with a complete implementation roadmap.",
              icon: "ri-roadmap-line",
              color: "blue",
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20strategic%20planning%20workshop%20with%20Black%20professionals%20around%20conference%20table%20reviewing%20organizational%20roadmap%2C%20brown-skinned%20diverse%20team%20members%2C%20modern%20office%20setting%2C%20collaborative%20planning%20session%2C%20professional%20business%20environment&width=600&height=400&seq=service-strategic-african&orientation=landscape"
            },
            {
              title: "Monitoring & Evaluation Frameworks",
              description: "Design comprehensive M&E frameworks to assess program effectiveness and efficiency. Our systematic approach includes information collection during project progression, comparing achievements against plans, and conducting feasibility studies, ongoing monitoring, and post-completion evaluations to ensure organizational success.",
              icon: "ri-bar-chart-line",
              color: "green",
              image: "https://readdy.ai/api/search-image?query=African%20descent%20data%20analysis%20team%20reviewing%20charts%20and%20graphs%2C%20Black%20professionals%20in%20monitoring%20evaluation%20session%2C%20brown-skinned%20team%20assessing%20impact%20metrics%2C%20modern%20analytics%20environment%2C%20collaborative%20assessment&width=600&height=400&seq=service-monitoring-african&orientation=landscape"
            },
            {
              title: "Fundraising & Proposal Writing",
              description: "Secure financial resources through expert fundraising strategies including donation solicitations, events, income-generating activities, and Social Enterprise incubations. Our proposal writing covers both unsolicited funding applications and formal Calls for Proposals with strong project ideas and detailed budgets.",
              icon: "ri-funds-line",
              color: "purple",
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20fundraising%20event%20with%20Black%20professionals%20celebrating%20grant%20approval%2C%20brown-skinned%20team%20achievement%20celebration%2C%20modern%20office%20environment%2C%20collaborative%20success%20in%20nonprofit%20funding&width=600&height=400&seq=service-fundraising-african&orientation=landscape"
            },
            {
              title: "Human Resources & Procedures",
              description: "Comprehensive HR solutions including recruitment policies, performance evaluation systems, and essential organizational procedures. We help develop robust governance structures, clear operational procedures, and personnel policies that create transparency, accountability, and organizational efficiency.",
              icon: "ri-team-line",
              color: "orange",
              image: "https://readdy.ai/api/search-image?query=African%20descent%20HR%20professionals%20conducting%20employee%20training%20session%2C%20Black%20team%20members%20in%20diverse%20workplace%2C%20brown-skinned%20professionals%20in%20development%20session%2C%20modern%20office%20environment%2C%20collaborative%20team%20building&width=600&height=400&seq=service-hr-african&orientation=landscape"
            },
            {
              title: "Financial Service Support",
              description: "Expert financial management including budgeting, accounting, and tax preparation services. We provide comprehensive support for operating budget development, financial statement analysis, audited financial statement review, and both personal and business income tax preparation and filing.",
              icon: "ri-money-dollar-circle-line",
              color: "indigo",
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20financial%20planning%20meeting%20with%20Black%20accountants%20reviewing%20budget%20documents%2C%20brown-skinned%20professionals%20in%20financial%20consultation%2C%20modern%20office%20setting%2C%20collaborative%20financial%20analysis&width=600&height=400&seq=service-financial-african&orientation=landscape"
            },
            {
              title: "Translation & Interpretation",
              description: "Professional bilingual services in English and French to ensure your organization can effectively communicate with diverse communities. Our translation and interpretation services help break down language barriers and expand your organizational reach and impact.",
              icon: "ri-translate-2",
              color: "teal",
              image: "https://readdy.ai/api/search-image?query=African%20descent%20professional%20translator%20working%20with%20documents%20in%20multiple%20languages%2C%20Black%20bilingual%20services%20professional%2C%20brown-skinned%20multicultural%20communication%20specialist%2C%20modern%20office%20environment%2C%20professional%20interpretation&width=600&height=400&seq=service-translation-african&orientation=landscape"
            },
            {
              title: "Employment Readiness Training",
              description: "Comprehensive job preparation programs designed to enhance employability and career development. Our training covers resume writing, interview skills, workplace communication, professional development, and career planning to help individuals successfully enter or advance in the workforce.",
              icon: "ri-briefcase-line",
              color: "red",
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20employment%20readiness%20workshop%20with%20Black%20participants%2C%20brown-skinned%20diverse%20job%20seekers%20in%20training%20session%2C%20professional%20development%2C%20modern%20training%20facility%2C%20career%20preparation%20program&width=600&height=400&seq=service-employment-african&orientation=landscape"
            },
            {
              title: "Business Plan Development",
              description: "Expert guidance in creating comprehensive business plans that attract investors and guide organizational growth. Our services include market analysis, financial projections, operational planning, and strategic positioning to help your business or organization achieve sustainable success.",
              icon: "ri-file-chart-line",
              color: "cyan",
              image: "https://readdy.ai/api/search-image?query=African%20descent%20business%20planning%20consultation%20with%20Black%20entrepreneurs%20reviewing%20business%20plan%20documents%2C%20brown-skinned%20professionals%20in%20strategic%20meeting%2C%20modern%20office%20environment%2C%20strategic%20business%20development&width=600&height=400&seq=service-business-african&orientation=landscape"
            }
          ].map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border hover:border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 bg-${service.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
              </div>
              
              <div className="mb-6">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>
              
              <Link 
                to="/services" 
                className={`inline-flex items-center gap-2 bg-${service.color}-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-${service.color}-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer`}
              >
                Read More <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // About Preview Section
  const AboutPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Knowledge Without Borders
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Founded in November 2018, we are a bilingual consulting firm dedicated to building 
              organizational capacity across diverse sectors. Our multidisciplinary approach combines 
              academic excellence with practical experience.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">Bilingual services in English and French</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">8 specialized consulting areas</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-green-500 text-xl"></i>
                <span className="text-gray-700">Led by Dr. François Yabit MA, MBA, PgD, PhD, CFA</span>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Learn More About Us <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20business%20team%20in%20modern%20office%20environment%2C%20Black%20multicultural%20professionals%20collaborating%2C%20brown-skinned%20organizational%20development%20team%2C%20capacity%20building%20consultants%2C%20clean%20corporate%20setting%2C%20natural%20lighting&width=600&height=400&seq=about-preview-african&orientation=landscape"
              alt="About Knowledge Without Borders"
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Training Preview Section
  const TrainingPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive training solutions for board members, staff, and volunteers
          </p>
          <Link to="/training" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
            Explore Training Programs <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Board Governance & Leadership Training",
              description: "Comprehensive training program designed to enhance board effectiveness and governance excellence. Our program covers strategic planning competence, board roles and responsibilities, fiduciary duties, risk management, and leadership development. Perfect for board members seeking to maximize their organizational impact and governance effectiveness.",
              duration: "2-3 Days",
              participants: "Board Members & Directors",
              topics: ["Strategic Planning", "Governance Excellence", "Risk Management", "Leadership Development"],
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20professional%20board%20meeting%20with%20Black%20directors%20around%20conference%20table%2C%20brown-skinned%20diverse%20board%20members%20in%20governance%20training%20session%2C%20modern%20boardroom%2C%20collaborative%20leadership%20development&width=600&height=400&seq=training-board-african&orientation=landscape"
            },
            {
              title: "Strategic Planning & Implementation",
              description: "Intensive training focused on developing strategic thinking capabilities and implementation excellence. Participants learn to create comprehensive strategic plans, develop implementation roadmaps, monitor progress, and adapt strategies for maximum organizational effectiveness and sustainable growth.",
              duration: "2-4 Days",
              participants: "Senior Management & Leaders",
              topics: ["Strategic Thinking", "Implementation Planning", "Performance Monitoring", "Change Management"],
              image: "https://readdy.ai/api/search-image?query=African%20descent%20strategic%20planning%20workshop%20with%20Black%20facilitator%20and%20diverse%20team%20members%2C%20brown-skinned%20professionals%20in%20collaborative%20planning%20session%2C%20modern%20training%20facility%2C%20professional%20development&width=600&height=400&seq=training-strategic-african&orientation=landscape"
            },
            {
              title: "Financial Management & Budgeting",
              description: "Essential financial literacy training covering budget development, financial statement analysis, and fiscal responsibility. Participants gain practical skills in reading financial statements, developing operating budgets, understanding audit processes, and implementing sound financial management practices for organizational sustainability.",
              duration: "1-2 Days",
              participants: "Finance Staff & Managers",
              topics: ["Budget Development", "Financial Analysis", "Audit Processes", "Fiscal Responsibility"],
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20financial%20training%20workshop%20with%20Black%20participants%20reviewing%20budget%20documents%20and%20charts%2C%20brown-skinned%20professionals%20in%20financial%20education%2C%20modern%20classroom%20setting&width=600&height=400&seq=training-financial-african&orientation=landscape"
            },
            {
              title: "Fundraising & Grant Writing Excellence",
              description: "Comprehensive training in fundraising strategies and proposal writing techniques. Learn to identify funding opportunities, develop compelling grant proposals, create fundraising campaigns, and build sustainable donor relationships. Includes hands-on practice with real proposal development and presentation skills.",
              duration: "2-3 Days",
              participants: "Development Staff & Volunteers",
              topics: ["Grant Writing", "Donor Relations", "Campaign Development", "Proposal Presentation"],
              image: "https://readdy.ai/api/search-image?query=African%20descent%20fundraising%20workshop%20with%20Black%20participants%20learning%20grant%20writing%20techniques%2C%20brown-skinned%20professionals%20in%20training%20session%2C%20collaborative%20learning%20environment%2C%20modern%20classroom&width=600&height=400&seq=training-fundraising-african&orientation=landscape"
            },
            {
              title: "Employment Readiness & Career Development",
              description: "Comprehensive job preparation program designed to enhance employability and career advancement. Covers resume writing, interview skills, workplace communication, professional networking, career planning, and job search strategies. Includes practical exercises, mock interviews, and personalized career coaching.",
              duration: "4-6 Weeks",
              participants: "Job Seekers & Career Changers",
              topics: ["Resume Writing", "Interview Skills", "Professional Networking", "Career Planning"],
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20employment%20readiness%20training%20with%20Black%20participants%20in%20professional%20development%20workshop%2C%20brown-skinned%20diverse%20job%20seekers%20in%20preparation%20session%2C%20modern%20training%20facility&width=600&height=400&seq=training-employment-african&orientation=landscape"
            },
            {
              title: "Human Resources & Policy Development",
              description: "Essential HR training covering recruitment, performance management, policy development, and workplace compliance. Participants learn to create effective HR policies, manage employee relations, conduct performance evaluations, and ensure legal compliance while fostering positive workplace culture and organizational effectiveness.",
              duration: "2-3 Days",
              participants: "HR Staff & Managers",
              topics: ["Policy Development", "Performance Management", "Employee Relations", "Legal Compliance"],
              image: "https://readdy.ai/api/search-image?query=African%20descent%20HR%20training%20workshop%20with%20Black%20professionals%20learning%20policy%20development%2C%20brown-skinned%20human%20resources%20team%20in%20education%20session%2C%20modern%20training%20room%2C%20collaborative%20learning&width=600&height=400&seq=training-hr-african&orientation=landscape"
            }
          ].map((program, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-blue-200">
              <div className="mb-6">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{program.title}</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{program.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-blue-600 text-lg"></i>
                  <span className="text-gray-700 font-medium">Duration: {program.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-group-line text-blue-600 text-lg"></i>
                  <span className="text-gray-700 font-medium">For: {program.participants}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {program.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/training" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Read More <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Policies Preview Section
  const PoliciesPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Essential Organizational Policies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            12 critical policies every nonprofit organization should have for effective governance
          </p>
          <Link to="/policies" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            View All Policies <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Code of Conduct & Ethics",
            "Recruitment Policy",
            "Health & Safety Policy",
            "Financial Management"
          ].map((policy, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-shield-check-line text-indigo-600 text-xl"></i>
                <h3 className="font-bold text-gray-900">{policy}</h3>
              </div>
              <p className="text-gray-600 text-sm">Essential policy framework for organizational excellence</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Gallery Preview Section
  const GalleryPreview = () => (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Achievements Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing our successful projects, training sessions, and organizational transformations
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            View Full Gallery <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Strategic Planning Workshop",
              description: "Successful 3-day strategic planning session with local nonprofit",
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20professional%20workshop%20session%20with%20Black%20participants%2C%20brown-skinned%20diverse%20team%20in%20strategic%20planning%20meeting%2C%20facilitator%20presenting%2C%20collaborative%20environment%2C%20modern%20conference%20room&width=400&height=300&seq=gallery-1-african&orientation=landscape"
            },
            {
              title: "Board Training Program",
              description: "Comprehensive board governance training for community organization",
              image: "https://readdy.ai/api/search-image?query=African%20descent%20board%20meeting%20training%20session%2C%20Black%20professional%20facilitator%2C%20brown-skinned%20diverse%20board%20members%2C%20governance%20workshop%2C%20modern%20meeting%20room&width=400&height=300&seq=gallery-2-african&orientation=landscape"
            },
            {
              title: "Policy Development Success",
              description: "Complete policy framework implementation for growing organization",
              image: "https://readdy.ai/api/search-image?query=African%20Canadian%20professional%20team%20reviewing%20policy%20documents%2C%20Black%20organizational%20development%20team%2C%20brown-skinned%20professionals%20in%20policy%20framework%20meeting%2C%20collaborative%20work%20environment&width=400&height=300&seq=gallery-3-african&orientation=landscape"
            }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Preview Section
  const ContactPreview = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our capacity-building services can help your organization achieve its goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="opacity-90">(437) 875-8045</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="opacity-90">kwb.csfglobal@gmail.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="opacity-90">Etobicoke, Ontario</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Get In Touch <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );

  // Client Success Stories
  const ClientStories = () => (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Valued Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by organizations across various sectors for capacity-building excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Abundant Living",
            "Action for Women and Family Foundation",
            "African Canadian Seniors Network",
            "African Social Development Council",
            "Canadian and African Women Aid Program",
            "Connecture Canada",
            "Dar Wadi for Refugees and Immigrants",
            "Eritrean Parents Liaison Council",
            "Great Grace Ministries",
            "Ontario Council of Agencies Serving Immigrants",
            "Overcomer Community Development Centre",
            "Youth Connect Services"
          ].map((client, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <i className="ri-building-line text-blue-600 text-xl"></i>
                <h3 className="font-semibold text-gray-900">{client}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PartnersSection = () => {
    const partners = [
      {
        name: "Government of Canada",
        logo: "https://readdy.ai/api/search-image?query=Government%20of%20Canada%20official%20logo%2C%20federal%20government%20emblem%2C%20professional%20government%20branding%2C%20official%20seal&width=200&height=100&seq=partner-gov-canada&orientation=landscape",
        website: "https://www.canada.ca",
        description: "Federal Government Partnership"
      },
      {
        name: "United Way",
        logo: "https://readdy.ai/api/search-image?query=United%20Way%20official%20logo%2C%20nonprofit%20organization%20branding%2C%20community%20support%20emblem%2C%20charitable%20organization&width=200&height=100&seq=partner-united-way&orientation=landscape",
        website: "https://www.unitedway.ca",
        description: "Community Development Partner"
      },
      {
        name: "Ontario Trillium Foundation",
        logo: "https://readdy.ai/api/search-image?query=Ontario%20Trillium%20Foundation%20logo%2C%20provincial%20funding%20organization%2C%20grant%20foundation%20emblem%2C%20Ontario%20government&width=200&height=100&seq=partner-trillium&orientation=landscape",
        website: "https://otf.ca",
        description: "Funding & Grants Partner"
      },
      {
        name: "Canadian Red Cross",
        logo: "https://readdy.ai/api/search-image?query=Canadian%20Red%20Cross%20official%20logo%2C%20humanitarian%20organization%20emblem%2C%20disaster%20relief%20branding%2C%20health%20services&width=200&height=100&seq=partner-red-cross&orientation=landscape",
        website: "https://www.redcross.ca",
        description: "Humanitarian Services Partner"
      },
      {
        name: "YMCA",
        logo: "https://readdy.ai/api/search-image?query=YMCA%20official%20logo%2C%20community%20organization%20branding%2C%20youth%20services%20emblem%2C%20recreational%20services&width=200&height=100&seq=partner-ymca&orientation=landscape",
        website: "https://www.ymca.ca",
        description: "Youth Development Partner"
      },
      {
        name: "United Nations",
        logo: "https://readdy.ai/api/search-image?query=United%20Nations%20official%20logo%2C%20UN%20emblem%2C%20international%20organization%20branding%2C%20global%20development&width=200&height=100&seq=partner-un&orientation=landscape",
        website: "https://www.un.org",
        description: "International Development Partner"
      },
      {
        name: "World Bank",
        logo: "https://readdy.ai/api/search-image?query=World%20Bank%20official%20logo%2C%20international%20financial%20institution%20emblem%2C%20development%20finance%20branding&width=200&height=100&seq=partner-world-bank&orientation=landscape",
        website: "https://www.worldbank.org",
        description: "Development Finance Partner"
      },
      {
        name: "African Development Bank",
        logo: "https://readdy.ai/api/search-image?query=African%20Development%20Bank%20official%20logo%2C%20AfDB%20emblem%2C%20African%20financial%20institution%20branding%2C%20development%20bank&width=200&height=100&seq=partner-afdb&orientation=landscape",
        website: "https://www.afdb.org",
        description: "African Development Partner"
      }
    ];

    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to deliver exceptional capacity-building solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-20 mb-4 flex items-center justify-center">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-600">{partner.description}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Interested in partnering with Knowledge Without Borders?
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-handshake-line text-xl"></i>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />
      <MissionSection />
      <ServicesPreview />
      <AboutPreview />
      <TrainingPreview />
      <PoliciesPreview />
      <GalleryPreview />
      <ClientStories />
      <PartnersSection />
      <ContactPreview />
    </div>
  );
};

export default HomePage;