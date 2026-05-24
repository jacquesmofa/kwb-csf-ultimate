import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20diverse%20African%20Canadian%20business%20team%20in%20modern%20office%20environment%2C%20Black%20professionals%20collaborating%2C%20multicultural%20African%20descent%20team%20members%2C%20organizational%20development%20consultants%2C%20clean%20corporate%20setting%2C%20natural%20lighting%2C%20brown%20skin%20professionals&width=1920&height=1080&seq=about-hero-bg-v2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-800/85 to-blue-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          About Knowledge Without Borders
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-300">
          Connaissance Sans Frontières
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
          A bilingual consulting firm dedicated to building organizational capacity and removing barriers to success since November 2018
        </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Knowledge Without Borders / Connaissance Sans Frontières was incorporated in November 2018 
              with a clear vision: to provide comprehensive capacity-building services that empower 
              organizations to achieve their full potential.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a bilingual firm, we bridge language and cultural barriers, ensuring that organizations 
              across diverse communities have access to high-quality consulting services. Our approach 
              combines academic rigor with practical experience, delivering solutions that are both 
              theoretically sound and practically applicable.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that knowledge should be accessible to all, regardless of organizational size, 
              budget constraints, or geographical location. This philosophy drives our commitment to 
              providing flexible, culturally sensitive, and cost-effective consulting solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h3>
                <p className="text-blue-800">
                  To provide capacity-building services that strengthen organizations and empower 
                  communities to achieve sustainable growth and meaningful impact.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">Our Vision</h3>
                <p className="text-green-800">
                  A world where organizational excellence is achievable for all, creating stronger 
                  communities and lasting positive change.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20professional%20office%20building%20exterior%20with%20African%20Canadian%20professionals%20entering%2C%20corporate%20headquarters%2C%20business%20consulting%20firm%2C%20diverse%20Black%20professionals%2C%20clean%20architecture%2C%20professional%20environment%2C%20natural%20lighting%2C%20contemporary%20design&width=600&height=500&seq=company-building-v2&orientation=landscape"
              alt="Knowledge Without Borders Office"
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2018</div>
                <div className="text-sm text-gray-600">Established</div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leadership & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by experienced professionals with deep expertise across multiple disciplines
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://i.imgur.com/twN1TUa.png"
                    alt="Dr. François Yabit"
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. François Yabit</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">MA, MBA, PgD, PhD, CFA</p>
                  <p className="text-lg text-gray-600 mb-4">CEO & Founder</p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Dr. François Yabit is a multidisciplinary and poly-experienced professional who brings 
                    extensive expertise in organizational development, strategic planning, and capacity building. 
                    His academic credentials combined with practical experience make him uniquely qualified 
                    to lead complex organizational transformation initiatives.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <i className="ri-graduation-cap-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">PhD in Organizational Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-briefcase-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">MBA in Strategic Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-award-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">Chartered Financial Analyst (CFA)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-global-line text-blue-600 text-xl"></i>
                      <span className="text-gray-700">International Development Specialist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our leadership combines rigorous academic training with practical field experience, 
                ensuring evidence-based solutions that deliver measurable results.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Professional Network</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We collaborate with academics and professionals across our 8 consulting areas, 
                expanding our expertise when needed for specialized projects.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bilingual Expertise</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native fluency in both English and French enables us to serve diverse communities 
                and facilitate cross-cultural organizational development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaShowcaseSection = () => {
  const mediaItems = [
    {
      type: 'image',
      title: 'Strategic Planning Workshop',
      image: 'https://readdy.ai/api/search-image?query=Professional%20strategic%20planning%20workshop%20with%20diverse%20African%20Canadian%20participants%2C%20Black%20facilitator%20presenting%2C%20collaborative%20meeting%2C%20African%20descent%20professionals%2C%20modern%20conference%20room%2C%20organizational%20development%20session%2C%20brown%20skin%20professionals&width=400&height=300&seq=about-media-1-v2&orientation=landscape',
      description: 'Intensive strategic planning session with African Canadian Seniors Network'
    },
    {
      type: 'video',
      title: 'Board Governance Training',
      thumbnail: 'https://readdy.ai/api/search-image?query=Video%20thumbnail%20board%20governance%20training%2C%20African%20Canadian%20facilitator%2C%20diverse%20Black%20board%20members%2C%20governance%20workshop%2C%20brown%20skin%20professionals%2C%20modern%20meeting%20room&width=400&height=225&seq=about-media-2-v2&orientation=landscape',
      description: 'Comprehensive board training program for enhanced governance practices',
      duration: '8:30'
    },
    {
      type: 'image',
      title: 'Employment Readiness Program',
      image: 'https://readdy.ai/api/search-image?query=Employment%20readiness%20training%20session%2C%20diverse%20African%20Canadian%20participants%2C%20Black%20professionals%2C%20job%20skills%20workshop%2C%20brown%20skin%20professionals%2C%20professional%20development%2C%20modern%20training%20room&width=400&height=300&seq=about-media-3-v2&orientation=landscape',
      description: 'Successful completion of 6-week employment preparation program'
    },
    {
      type: 'video',
      title: 'Client Success Story',
      thumbnail: 'https://readdy.ai/api/search-image?query=Video%20thumbnail%20client%20testimonial%20interview%2C%20African%20Canadian%20professional%2C%20success%20story%20presentation%2C%20Black%20professional%2C%20modern%20office%2C%20positive%20outcome%2C%20brown%20skin%20professional&width=400&height=225&seq=about-media-4-v2&orientation=landscape',
      description: 'Testimonial from Youth Connect Services on organizational transformation',
      duration: '5:15'
    },
    {
      type: 'image',
      title: 'Fundraising Workshop Success',
      image: 'https://readdy.ai/api/search-image?query=Fundraising%20strategy%20workshop%2C%20African%20Canadian%20nonprofit%20professionals%2C%20Black%20professionals%2C%20grant%20writing%20training%2C%20collaborative%20planning%20session%2C%20brown%20skin%20professionals%2C%20modern%20training%20room&width=400&height=300&seq=about-media-5-v2&orientation=landscape',
      description: 'UZIMA International fundraising workshop resulting in $150K grant success'
    },
    {
      type: 'image',
      title: 'Team Building Session',
      image: 'https://readdy.ai/api/search-image?query=Professional%20team%20building%20workshop%2C%20diverse%20African%20Canadian%20participants%2C%20Black%20professionals%2C%20collaborative%20activities%2C%20brown%20skin%20professionals%2C%20modern%20conference%20room%2C%20organizational%20development&width=400&height=300&seq=about-media-6-v2&orientation=landscape',
      description: 'Leadership development program for Great Grace Ministries'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our capacity-building services in action through photos and videos from recent projects and training sessions
          </p>
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
            <i className="ri-gallery-line text-xl"></i>
            See More in Gallery
            <i className="ri-arrow-right-line text-xl"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CoreValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in all our consulting services, delivering solutions that exceed expectations and create lasting value.",
      icon: "ri-star-line",
      color: "blue"
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices, building trust through consistent and reliable service delivery.",
      icon: "ri-shield-check-line",
      color: "green"
    },
    {
      title: "Innovation",
      description: "We embrace creative approaches and cutting-edge methodologies to solve complex organizational challenges and drive meaningful change.",
      icon: "ri-lightbulb-line",
      color: "purple"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnership, working closely with clients and stakeholders to co-create solutions that reflect their unique context.",
      icon: "ri-team-line",
      color: "orange"
    },
    {
      title: "Inclusivity",
      description: "We champion diversity and ensure our services are accessible to organizations of all sizes, sectors, and cultural backgrounds.",
      icon: "ri-heart-line",
      color: "red"
    },
    {
      title: "Sustainability",
      description: "We focus on building long-term organizational capacity that ensures sustainable growth and continued success beyond our engagement.",
      icon: "ri-plant-line",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to organizational excellence
          </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Approach & Guiding Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we build organizational capacity through context-sensitive, evidence-based solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Context-Driven Solutions</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We build the capacity of organizations and businesses by providing support based on the 
              client context, capacities, type of task, challenges, and needs to address. Our approach 
              recognizes that every organization is unique and requires tailored solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-search-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Feasibility Studies</h4>
                  <p className="text-gray-600">Comprehensive assessment of organizational readiness and project viability</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-bar-chart-line text-green-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Monitoring & Evaluation</h4>
                  <p className="text-gray-600">Ongoing assessment and continuous improvement throughout implementation</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-presentation-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Multiple Delivery Methods</h4>
                  <p className="text-gray-600">Workshops, seminars, conferences, and individual/group coaching</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20consulting%20team%20facilitating%20workshop%2C%20Black%20facilitator%2C%20diverse%20African%20descent%20participants%20engaged%20in%20strategic%20planning%2C%20collaborative%20meeting%20environment%2C%20brown%20skin%20professionals%2C%20modern%20conference%20room%2C%20interactive%20session&width=600&height=400&seq=approach-method-v2&orientation=landscape"
              alt="Our Consulting Approach"
              className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSuccessSection = () => {
  const clientCategories = [
    {
      category: "Community Organizations",
      clients: [
        "Abundant Living",
        "Action for Women and Family Foundation",
        "African Canadian Seniors Network",
        "African Social Development Council",
        "Overcomer Community Development Centre"
      ],
      icon: "ri-community-line",
      color: "blue"
    },
    {
      category: "Healthcare & Social Services",
      clients: [
        "H & H Family Care Support Services",
        "Tumaini Nurses International",
        "Canadian and African Women Aid Program",
        "Women Empowerment Ministry"
      ],
      icon: "ri-hospital-line",
      color: "green"
    },
    {
      category: "Immigration & Settlement",
      clients: [
        "Dar Wadi for Refugees and Immigrants",
        "Wadi Kaja Organization for Refugees and Immigrants",
        "Ontario Council of Agencies Serving Immigrants",
        "Eritrean Parents Liaison Council"
      ],
      icon: "ri-global-line",
      color: "purple"
    },
    {
      category: "Youth & Education",
      clients: [
        "Youth Connect Services",
        "Youth Now On Track",
        "Step Up Now Community Programs",
        "Nigerian Canadian Community Sports Development"
      ],
      icon: "ri-graduation-cap-line",
      color: "orange"
    },
    {
      category: "Faith-Based Organizations",
      clients: [
        "Great Grace Ministries",
        "Jesus Revival For All Nations",
        "Kingdom of Glory Ministry"
      ],
      icon: "ri-building-line",
      color: "red"
    },
    {
      category: "Business & Investment",
      clients: [
        "CamCan Investment Group Inc.",
        "Connecture Canada",
        "UZIMA International",
        "Uplift Community Foundation"
      ],
      icon: "ri-briefcase-line",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Valued Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by diverse organizations across multiple sectors for capacity-building excellence
          </p>
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
  const achievements = [
    {
      number: "50+",
      label: "Organizations Served",
      description: "Successfully supported diverse organizations across multiple sectors",
      icon: "ri-building-line",
      color: "blue"
    },
    {
      number: "8",
      label: "Consulting Areas",
      description: "Comprehensive expertise across all organizational development needs",
      icon: "ri-service-line",
      color: "green"
    },
    {
      number: "2018",
      label: "Established",
      description: "Years of proven track record in capacity building excellence",
      icon: "ri-calendar-line",
      color: "purple"
    },
    {
      number: "100%",
      label: "Bilingual Services",
      description: "Full English and French language support for all programs",
      icon: "ri-translate-2",
      color: "orange"
    }
  ];

  const expertiseAreas = [
    {
      title: "Strategic Excellence",
      description: "Comprehensive strategic planning and implementation frameworks that drive organizational success and sustainable growth.",
      icon: "ri-roadmap-line",
      color: "blue"
    },
    {
      title: "Governance Mastery",
      description: "Expert policy development and governance structures that ensure transparency, accountability, and operational excellence.",
      icon: "ri-shield-check-line",
      color: "green"
    },
    {
      title: "Financial Expertise",
      description: "Professional financial management, budgeting, and fundraising strategies that secure organizational sustainability.",
      icon: "ri-money-dollar-circle-line",
      color: "purple"
    },
    {
      title: "Capacity Building",
      description: "Comprehensive training and development programs that enhance organizational capabilities and human resources.",
      icon: "ri-graduation-cap-line",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Knowledge Without Borders?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Proven expertise, measurable results, and unwavering commitment to your organizational success
          </p>
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
          >
            Start Your Transformation <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
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