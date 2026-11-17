import site from '../../content/site.json';
import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import copy from '../../content/pages/contact.json';
// Text, images and links: src/content/pages/contact.json (editable in the website editors).

const ContactHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${copy.hero.backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-blue-800/85 to-indigo-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{copy.hero.title}</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-300">{copy.hero.heading}</h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">{copy.hero.text}</p>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const contactMethods = copy.contactMethods;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.contactInfo.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.contactInfo.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${method.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">{method.info}</p>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  // FIX: Formspree URL applied here
  const FORMSPREE_URL = 'https://formspree.io/f/xvglzkwz'; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(''); 
    
    try {
      // Send form data as JSON to the Formspree endpoint
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear the form fields on successful submission
        setFormData({
          name: '',
          email: '',
          organization: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        console.error("Formspree Error:", errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.contactForm.heading}</h2>
          <p className="text-xl text-gray-600">{copy.contactForm.text}</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{copy.nameField.fieldLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={copy.nameField.placeholder}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{copy.emailField.fieldLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={copy.emailField.placeholder}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Organization Field */}
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">{copy.organizationField.fieldLabel}</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={copy.organizationField.placeholder}
                />
              </div>
              
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">{copy.phoneField.fieldLabel}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={copy.phoneField.placeholder}
                />
              </div>
            </div>
            
            {/* Service Field */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">{copy.serviceField.fieldLabel}</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">{copy.serviceField.option}</option>
                <option value="strategic-planning">{copy.serviceField.option2}</option>
                <option value="monitoring-evaluation">{copy.serviceField.option3}</option>
                <option value="fundraising">{copy.serviceField.option4}</option>
                <option value="policies">{copy.serviceField.option5}</option>
                <option value="financial-management">{copy.serviceField.option6}</option>
                <option value="training">{copy.serviceField.option7}</option>
                <option value="other">{copy.serviceField.option8}</option>
              </select>
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{copy.messageField.fieldLabel}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder={copy.messageField.placeholder}
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">
                {formData.message.length}{copy.messageField.text}</p>
            </div>
            
            {/* Submission Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-500 text-xl mr-3"></i>
                  <p className="text-green-700">{copy.submissionStatusMessages.text}</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                  <p className="text-red-700">{copy.submissionStatusMessages.text2}</p>
                </div>
              </div>
            )}
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || formData.message.length > 500}
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>{copy.submitButton.label}</span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.mapSection.heading}</h2>
          <p className="text-xl text-gray-600">{copy.mapSection.text}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Office Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{copy.mainOfficeMap.subheading}</h3>
            <p className="text-gray-600 mb-4">{copy.mainOfficeMap.text}<br />{copy.mainOfficeMap.text2}<br />{copy.mainOfficeMap.text3}</p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src={copy.mainOfficeMap.embedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={copy.mainOfficeMap.title}
              ></iframe>
            </div>
          </div>
          
          {/* Satellite Office Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{copy.satelliteOfficeMap.subheading}</h3>
            <p className="text-gray-600 mb-4">{copy.satelliteOfficeMap.text}<br />{copy.satelliteOfficeMap.text2}</p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src={copy.satelliteOfficeMap.embedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={copy.satelliteOfficeMap.title}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInformation = () => {
  const socialLinks = site.socials.map((x) => ({ name: x.name, href: x.url, icon: x.icon }));

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.contactInformation.heading}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.contactInformation.text}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Office */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-building-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{copy.mainOffice.subheading}</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-blue-600 text-xl mt-1"></i>
                <div>
                  <p className="font-semibold text-gray-900">{copy.mainOffice.text}</p>
                  <p className="text-gray-700">{copy.mainOffice.text2}</p>
                  <p className="text-gray-700">{copy.mainOffice.text3}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-blue-600 text-xl"></i>
                <a href={copy.mainOffice.phoneLink} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">{copy.mainOffice.link}</a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-blue-600 text-xl"></i>
                <a href={copy.mainOffice.emailLink} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">{copy.mainOffice.link2}</a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-global-line text-blue-600 text-xl"></i>
                <a href={copy.mainOffice.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">{copy.mainOffice.link3}</a>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">{copy.mainOffice.subheading2}</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-blue-600 text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Satellite Office */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-building-2-line text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{copy.satelliteOffice.subheading}</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-purple-600 text-xl mt-1"></i>
                <div>
                  <p className="text-gray-700">{copy.satelliteOffice.text}</p>
                  <p className="text-gray-700">{copy.satelliteOffice.text2}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-purple-600 text-xl"></i>
                <a href={copy.satelliteOffice.phoneLink} className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">{copy.satelliteOffice.link}</a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-fax-line text-purple-600 text-xl"></i>
                <span className="text-gray-700">{copy.satelliteOffice.label}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-purple-600 text-xl"></i>
                <a href={copy.satelliteOffice.emailLink} className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">{copy.satelliteOffice.link2}</a>
              </div>
            </div>
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
        <a 
          href={copy.ctasection.phoneLink} 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-phone-line"></i>{copy.ctasection.link}</a>
        <a 
          href={copy.ctasection.emailLink} 
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-mail-line"></i>{copy.ctasection.link2}</a>
      </div>
    </div>
  </section>
);

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>{copy.page.text}</div>}>
      <div className="min-h-screen">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <MapSection />
        <ContactInformation />
        <CTASection />
      </div>
    </Suspense>
  );
}