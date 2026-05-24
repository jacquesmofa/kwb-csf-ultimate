import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';

const ContactHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20business%20consultation%2C%20diverse%20Black%20professionals%20in%20welcoming%20office%20environment%2C%20brown%20skin%20professionals%2C%20client%20meeting%2C%20modern%20professional%20space%2C%20collaborative%20discussion%2C%20natural%20lighting&width=1920&height=1080&seq=contact-hero-bg-v2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-blue-800/85 to-indigo-900/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Contact Knowledge Without Borders
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-yellow-300">
          Contactez Connaissance Sans Frontières
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
          Ready to transform your organization? Get in touch with our capacity-building experts today
        </p>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: "ri-phone-line",
      title: "Phone",
      info: "(437) 875-8045",
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: "ri-printer-line", 
      title: "Fax",
      info: "(416) 438-9938",
      description: "Send us documents and formal communications"
    },
    {
      icon: "ri-mail-line",
      title: "Email",
      info: "kwb.csfglobal@gmail.com",
      description: "Send us your inquiries and we'll respond within 24 hours"
    },
    {
      icon: "ri-time-line",
      title: "Business Hours",
      info: "Monday - Friday: 9:00 AM - 5:00 PM",
      description: "We're here to help during regular business hours"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us - choose what works best for you
          </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Organization Field */}
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your organization name"
                />
              </div>
              
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            {/* Service Field */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="strategic-planning">Strategic Planning & Implementation</option>
                <option value="monitoring-evaluation">Monitoring & Evaluation</option>
                <option value="fundraising">Fundraising & Proposal Writing</option>
                <option value="policies">Policies & Procedures</option>
                <option value="financial-management">Financial Management</option>
                <option value="training">Training & Capacity Building</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your organization and how we can help..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </p>
            </div>
            
            {/* Submission Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-500 text-xl mr-3"></i>
                  <p className="text-green-700">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                  <p className="text-red-700">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
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
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Sending Message...
                </span>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Offices
          </h2>
          <p className="text-xl text-gray-600">
            Two convenient locations in Etobicoke, Ontario - easily accessible by public transit and car
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Office Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Office</h3>
            <p className="text-gray-600 mb-4">
              Mozia Professional Business Centre<br />
              10 Belfield Road, 2nd Floor<br />
              Etobicoke ON M9W 1G1
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8!2d-79.5567!3d43.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a1e8e8e8e8e%3A0x1234567890abcdef!2s10%20Belfield%20Rd%2C%20Etobicoke%2C%20ON%20M9W%201G1!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Knowledge Without Borders Main Office Location"
              ></iframe>
            </div>
          </div>
          
          {/* Satellite Office Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Satellite Office</h3>
            <p className="text-gray-600 mb-4">
              64 Vanevery Street<br />
              Etobicoke ON M8V 1Y6
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2!2d-79.4789!3d43.6012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a1e8e8e8e8e%3A0xabcdef1234567890!2s64%20Vanevery%20St%2C%20Etobicoke%2C%20ON%20M8V%201Y6!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Knowledge Without Borders Satellite Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInformation = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/kwbcsf', icon: 'ri-linkedin-fill' },
    { name: 'Facebook', href: 'https://facebook.com/kwbcsf', icon: 'ri-facebook-fill' },
    { name: 'Instagram', href: 'https://instagram.com/kwbcsf', icon: 'ri-instagram-fill' },
    { name: 'X', href: 'https://x.com/kwbcsf', icon: 'ri-twitter-x-fill' },
    { name: 'YouTube', href: 'https://youtube.com/kwbcsf', icon: 'ri-youtube-fill' }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to connect with our capacity-building experts
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Office */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-building-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Main Office</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-blue-600 text-xl mt-1"></i>
                <div>
                  <p className="font-semibold text-gray-900">Mozia Professional Business Centre</p>
                  <p className="text-gray-700">10 Belfield Road, 2nd Floor</p>
                  <p className="text-gray-700">Etobicoke ON M9W 1G1</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-blue-600 text-xl"></i>
                <a href="tel:+14378758045" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  (437) 875-8045
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-blue-600 text-xl"></i>
                <a href="mailto:kwb.csfglobal@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  kwb.csfglobal@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-global-line text-blue-600 text-xl"></i>
                <a href="https://www.kwb-csf.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  www.kwb-csf.com
                </a>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
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
              <h3 className="text-2xl font-bold text-gray-900">Satellite Office</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-purple-600 text-xl mt-1"></i>
                <div>
                  <p className="text-gray-700">64 Vanevery Street</p>
                  <p className="text-gray-700">Etobicoke ON M8V 1Y6</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-purple-600 text-xl"></i>
                <a href="tel:+14378758045" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  (437) 875-8045
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-fax-line text-purple-600 text-xl"></i>
                <span className="text-gray-700">(416) 438-9938</span>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-purple-600 text-xl"></i>
                <a href="mailto:kwb.csfglobal@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  kwb.csfglobal@gmail.com
                </a>
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
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let's Start Building Your Success
      </h2>
      <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
        Every great organization starts with a conversation. Reach out today and let's discuss how we can help strengthen your capacity and impact.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a 
          href="tel:(437) 875-8045" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-phone-line"></i>
          Call Now: (437) 875-8045
        </a>
        <a 
          href="mailto:kwb.csfglobal@gmail.com" 
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-mail-line"></i>
          Email Us
        </a>
      </div>
    </div>
  </section>
);

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
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