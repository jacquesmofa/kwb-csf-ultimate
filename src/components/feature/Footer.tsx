import { Link } from 'react-router-dom';
// Define __BASE_PATH__ for development/deployment context if it's used elsewhere
declare const __BASE_PATH__: string;
// Utility function to scroll to the top of the page (Instant for Footer navigation)
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Publications', href: '#' }
  ];
  const resources = [
    { name: 'Articles & Insights', href: '#' },
    { name: 'Client Testimonials', href: '#' },
    { name: 'Events Calendar', href: '#' },
    { name: 'Career Opportunities', href: '#' }
  ];
// This function ensures an instant jump to the top of the destination page.
  const handleHomeLinkClick = () => {
    scrollToTop();
  };
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/kwbcsf', icon: 'ri-linkedin-fill' },
    { name: 'Facebook', href: 'https://facebook.com/kwbcsf', icon: 'ri-facebook-fill' },
    { name: 'Instagram', href: 'https://instagram.com/kwbcsf', icon: 'ri-instagram-fill' },
    { name: 'X', href: 'https://x.com/kwbcsf', icon: 'ri-twitter-x-fill' },
    { name: 'YouTube', href: 'https://youtube.com/kwbcsf', icon: 'ri-youtube-fill' }
  ];
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 border-b border-indigo-700 pb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
             
              to="/" 
              onClick={handleHomeLinkClick} 
              className="flex items-center mb-6 group cursor-pointer"
            >
              {/* LOGO CONTAINER */}
              <div className="w-20 h-20 flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300">
             
                <img 
                  // FIXED: Updated logo URL
                  src="https://kwb-csf.com/logos%20png/KWB%20Logo%20Shot%20.png" 
                  alt="Knowledge Without Borders Logo" 
                  className="w-full h-full object-contain"
              
                />
              </div>
              <div>
                <Link 
                  to="/" 
                  onClick={handleHomeLinkClick} 
               
                  className="text-3xl font-bold mb-4 block hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  KWB / CSF
                </Link>
                <p className="text-indigo-300 text-sm">Knowledge Without Borders</p>
              </div>
     
            </Link>
            
            <p className="text-indigo-300 text-sm leading-relaxed mb-6 max-w-md">
              Driving capacity building and sustainable growth for community organizations worldwide.
              Empowering communities through strategic transformation and organizational excellence.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-indigo-700 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={social.name}
              
                  >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
   
            <h4 className="text-lg font-bold mb-6 border-b-2 border-sky-500 inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
           
                  <Link
                    to={link.href}
                    onClick={handleHomeLinkClick} 
                    className="text-indigo-300 hover:text-sky-400 transition-colors duration-300 text-sm cursor-pointer"
                  >
         
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
       
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-sky-500 inline-block pb-1">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
      
                  <a
                    href={resource.href}
                    className="text-indigo-300 hover:text-sky-400 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {resource.name}
     
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            
            <h4 className="text-lg font-bold mb-6 border-b-2 border-sky-500 inline-block pb-1">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <h5 className="font-semibold text-white mb-2">Main Office</h5>
                <p className="text-indigo-300 
                  leading-relaxed">
                  Mozia Professional Business Centre<br />
                  10 Belfield Road, 2nd Floor<br />
                  Etobicoke ON M9W 1G1
                </p>
              </div>
    
           
              <div>
                <p className="text-indigo-300">Phone: (437) 875-8045</p>
              </div>
              
              <div>
               
                <a href="mailto:kwb.csfglobal@gmail.com" className="text-indigo-300 hover:text-sky-400 transition-colors duration-300 block">
                  kwb.csfglobal@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
    
        <div className="pt-8">
          <div className="text-sm text-indigo-400 text-center">
            © {currentYear} Knowledge Without Borders.
            All Rights Reserved MJ.
          </div>
        </div>
      </div>
    </footer>
  );
}