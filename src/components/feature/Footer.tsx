import { Link } from 'react-router-dom';
import site from '../../content/site.json';
import copy from '../../content/layout/footer.json';
// Text, images and links: src/content/layout/footer.json (editable in the website editors).
// Define __BASE_PATH__ for development/deployment context if it's used elsewhere
declare const __BASE_PATH__: string;
// Utility function to scroll to the top of the page (Instant for Footer navigation)
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = copy.quickLinks;
  const resources = copy.resources;
// This function ensures an instant jump to the top of the destination page.
  const handleHomeLinkClick = () => {
    scrollToTop();
  };
  const socialLinks = site.socials.map((x) => ({ name: x.name, href: x.url, icon: x.icon }));
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
                  src={copy.logoContainer.image} 
                  alt={copy.logoContainer.imageAlt} 
                  className="w-full h-full object-contain"
              
                />
              </div>
              <div>
                <Link 
                  to="/" 
                  onClick={handleHomeLinkClick} 
               
                  className="text-3xl font-bold mb-4 block hover:text-yellow-300 transition-colors cursor-pointer"
                >{copy.logoContainer.text}</Link>
                <p className="text-indigo-300 text-sm">{copy.logoContainer.text2}</p>
              </div>
     
            </Link>
            
            <p className="text-indigo-300 text-sm leading-relaxed mb-6 max-w-md">{copy.logoContainer.text3}</p>
            
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
   
            <h4 className="text-lg font-bold mb-6 border-b-2 border-sky-500 inline-block pb-1">{copy.quickLinksSection.subheading}</h4>
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
            <h4 className="text-lg font-bold mb-6 border-b-2 border-sky-500 inline-block pb-1">{copy.resourcesSection.subheading}</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
      
                  <Link
                    to={resource.href}
                    onClick={handleHomeLinkClick}
                    className="text-indigo-300 hover:text-sky-400 transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {resource.name}
     
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            
            <h4 className="text-lg font-bold mb-6 border-b-2 border-sky-500 inline-block pb-1">{copy.contactInfo.subheading}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <h5 className="font-semibold text-white mb-2">{copy.contactInfo.smallHeading}</h5>
                <p className="text-indigo-300 
                  leading-relaxed">{copy.contactInfo.text}<br />{copy.contactInfo.text2}<br />{copy.contactInfo.text3}</p>
              </div>
    
           
              <div>
                <p className="text-indigo-300">{copy.contactInfo.text4}</p>
              </div>
              
              <div>
               
                <a href={copy.contactInfo.emailLink} className="text-indigo-300 hover:text-sky-400 transition-colors duration-300 block">{copy.contactInfo.link}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
    
        <div className="pt-8">
          <div className="text-sm text-indigo-400 text-center">
            © {currentYear}{copy.bottomFooter.text}</div>
        </div>
      </div>
    </footer>
  );
}