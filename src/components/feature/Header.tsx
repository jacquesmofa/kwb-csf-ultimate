import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Define __BASE_PATH__ for development/deployment context if it's used elsewhere
declare const __BASE_PATH__: string;
// Utility function to scroll to the top of the page with adjustable behavior
const scrollToTop = (behavior: ScrollBehavior = 'instant') => {
  window.scrollTo({ top: 0, behavior });
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
// 1. Initial Load/External Navigation: Always INSTANTLY jump to top on path change
// This ensures a clean view when navigating to a new page.
  useEffect(() => {
    scrollToTop('instant'); 
  }, [location.pathname]);
// Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

// 2. Click handler for navigation links/Logo: Smooth scroll if same page, otherwise React Router handles navigation.
  const handleNavigationClick = (href: string) => {
    // Check if the link being clicked points to the CURRENT page (handling base path variability)
    const currentPath = location.pathname.replace(/\/$/, '');
    const targetPath = href.replace(/\/$/, '');
    
    const isSamePage = currentPath === targetPath || 
                       (targetPath === '' && currentPath === `${__BASE_PATH__}`);
    if (isSamePage) {
        // If on the same page, use SMOOTH scroll to the top
        scrollToTop('smooth');
    }

    // For mobile menu, close it after a click
    setIsMobileMenuOpen(false);
  };
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.training'), href: '/training' },
    { name: t('nav.policies'), href: '/policies' },
    { name: t('nav.contact'), href: '/contact' }
  ];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo: Link to Home, uses the smooth scroll click handler */}
          <Link 
            to="/" 
            onClick={() => handleNavigationClick('/')} 
            className="flex items-center group cursor-pointer"
          >
            {/* LOGO CONTAINER: Increased size to w-16 h-16 */}
            <div className="w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300">
              <img 
                // FIXED: Updated logo URL
                src="https://kwb-csf.com/logos%20png/KWB%20Logo%20Shot%20.png" 
                alt="Knowledge Without Borders Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold text-indigo-900 group-hover:text-sky-600 transition-colors duration-300">
                KNOWLEDGE WITHOUT BORDERS
              </span>
              <span className="text-xs mt-0.5 text-indigo-500">
                CONNAISSANCE SANS FRONTIÈRES
              </span>
            </div>
          </Link>

       
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavigationClick(item.href)} // Uses click handler
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-sky-600 bg-sky-50 font-bold'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
   
          
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-500 to-sky-500 text-white rounded-lg hover:from-indigo-600 hover:to-sky-600 transition-all duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
        
              <i className="ri-global-line"></i>
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
          
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-6 py-3 text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? 'text-sky-600 bg-sky-50 font-bold'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
                onClick={() => handleNavigationClick(item.href)} // Uses click handler
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-6 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-global-line mr-2"></i>
              {i18n.language === 'en' ? 'Français' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}