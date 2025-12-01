import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20photo%20gallery%20showcase%20with%20African%20Canadian%20professionals%2C%20modern%20exhibition%20space%2C%20Black%20professionals%20celebrating%20organizational%20achievements%2C%20success%20stories%20presentation%2C%20brown%20skin%20professionals%2C%20clean%20contemporary%20design&width=1920&height=1080&seq=gallery-hero-bg-v2&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 via-blue-700/85 to-indigo-800/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Our Achievements Gallery
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95 mb-8">
          Showcasing our successful projects, training sessions, organizational transformations, 
          and the positive impact we've created together with our clients
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Project Highlights</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Training Sessions</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Success Stories</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">✓ Client Testimonials</span>
        </div>
      </div>
    </section>
  );
};

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Photos', icon: 'ri-image-line' },
    { id: 'workshops', name: 'Workshops', icon: 'ri-presentation-line' },
    { id: 'training', name: 'Training Sessions', icon: 'ri-graduation-cap-line' },
    { id: 'meetings', name: 'Strategic Meetings', icon: 'ri-team-line' },
    { id: 'events', name: 'Events', icon: 'ri-calendar-event-line' },
    { id: 'achievements', name: 'Achievements', icon: 'ri-trophy-line' }
  ];

  const photos = [
    {
      id: 1,
      title: "Strategic Planning Workshop - African Canadian Seniors Network",
      category: "workshops",
      image: "https://readdy.ai/api/search-image?query=Professional%20strategic%20planning%20workshop%20with%20diverse%20African%20Canadian%20senior%20participants%2C%20Black%20facilitator%20presenting%2C%20collaborative%20meeting%2C%20brown%20skin%20professionals%2C%20modern%20conference%20room%2C%20organizational%20development%20session&width=400&height=300&seq=gallery-1-v2&orientation=landscape",
      description: "3-day intensive strategic planning session resulting in comprehensive 5-year organizational roadmap"
    },
    {
      id: 2,
      title: "Board Governance Training - Connecture Canada",
      category: "training",
      image: "https://readdy.ai/api/search-image?query=Board%20governance%20training%20session%2C%20African%20Canadian%20facilitator%2C%20diverse%20Black%20board%20members%2C%20governance%20workshop%2C%20brown%20skin%20professionals%2C%20modern%20meeting%20room%2C%20capacity%20building&width=400&height=300&seq=gallery-2-v2&orientation=landscape",
      description: "Comprehensive board training program enhancing governance practices and oversight capabilities"
    },
    {
      id: 3,
      title: "Policy Development Success - Youth Connect Services",
      category: "achievements",
      image: "https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20team%20reviewing%20policy%20documents%2C%20Black%20professionals%2C%20organizational%20development%2C%20policy%20framework%20meeting%2C%20brown%20skin%20professionals%2C%20collaborative%20work%20environment%2C%20successful%20completion&width=400&height=300&seq=gallery-3-v2&orientation=landscape",
      description: "Complete policy framework implementation including 12 essential organizational policies"
    },
    {
      id: 4,
      title: "Employment Readiness Program Graduation",
      category: "events",
      image: "https://readdy.ai/api/search-image?query=Employment%20readiness%20program%20graduation%20ceremony%2C%20diverse%20African%20Canadian%20graduates%20celebrating%2C%20Black%20professionals%2C%20career%20development%20success%2C%20brown%20skin%20professionals%2C%20modern%20venue&width=400&height=300&seq=gallery-4-v2&orientation=landscape",
      description: "Celebrating 25 graduates from our 6-week employment readiness training program"
    },
    {
      id: 5,
      title: "Fundraising Strategy Workshop - UZIMA International",
      category: "workshops",
      image: "https://readdy.ai/api/search-image?query=Fundraising%20strategy%20workshop%2C%20African%20Canadian%20nonprofit%20professionals%2C%20Black%20professionals%2C%20grant%20writing%20training%2C%20brown%20skin%20professionals%2C%20collaborative%20planning%20session%2C%20modern%20training%20room&width=400&height=300&seq=gallery-5-v2&orientation=landscape",
      description: "Intensive fundraising and proposal writing workshop resulting in $150K grant success"
    },
    {
      id: 6,
      title: "Leadership Development Program - Great Grace Ministries",
      category: "training",
      image: "https://readdy.ai/api/search-image?query=Leadership%20development%20training%2C%20diverse%20African%20Canadian%20participants%2C%20Black%20facilitator%2C%20professional%20workshop%2C%20brown%20skin%20professionals%2C%20interactive%20session%2C%20capacity%20building%2C%20modern%20conference%20room&width=400&height=300&seq=gallery-6-v2&orientation=landscape",
      description: "2-day leadership development program for senior management and emerging leaders"
    },
    {
      id: 7,
      title: "M&E Framework Implementation - Dar Wadi",
      category: "meetings",
      image: "https://readdy.ai/api/search-image?query=Monitoring%20evaluation%20framework%20meeting%2C%20African%20Canadian%20professionals%2C%20Black%20professionals%20analyzing%20data%2C%20professional%20consultation%2C%20brown%20skin%20professionals%2C%20organizational%20assessment%2C%20modern%20office%20setting&width=400&height=300&seq=gallery-7-v2&orientation=landscape",
      description: "Successful implementation of comprehensive monitoring and evaluation framework"
    },
    {
      id: 8,
      title: "Annual Client Appreciation Event",
      category: "events",
      image: "https://readdy.ai/api/search-image?query=Professional%20appreciation%20event%2C%20diverse%20African%20Canadian%20clients%20networking%2C%20Black%20professionals%2C%20celebration%20gathering%2C%20brown%20skin%20professionals%2C%20modern%20venue%2C%20organizational%20success%20recognition&width=400&height=300&seq=gallery-8-v2&orientation=landscape",
      description: "Annual gathering celebrating partnerships and organizational achievements"
    },
    {
      id: 9,
      title: "Financial Management Training - H & H Family Care",
      category: "training",
      image: "https://readdy.ai/api/search-image?query=Financial%20management%20training%20session%2C%20African%20Canadian%20professionals%2C%20Black%20facilitator%2C%20budget%20planning%20workshop%2C%20brown%20skin%20professionals%2C%20participants%20with%20laptops%2C%20modern%20training%20room&width=400&height=300&seq=gallery-9-v2&orientation=landscape",
      description: "Comprehensive financial management and budgeting training for nonprofit staff"
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visual documentation of our capacity-building work and organizational transformations
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: "Strategic Planning Process Overview",
      description: "Learn about our comprehensive strategic planning methodology and approach",
      thumbnail: "https://readdy.ai/api/search-image?query=Video%20thumbnail%20strategic%20planning%20presentation%2C%20African%20Canadian%20presenter%2C%20Black%20professional%2C%20modern%20conference%20room%2C%20brown%20skin%20professional%2C%20organizational%20development%2C%20clean%20design&width=400&height=225&seq=video-1-v2&orientation=landscape",
      duration: "5:30"
    },
    {
      id: 2,
      title: "Board Governance Best Practices",
      description: "Key insights into effective board governance and oversight responsibilities",
      thumbnail: "https://readdy.ai/api/search-image?query=Video%20thumbnail%20board%20governance%20presentation%2C%20African%20Canadian%20professional%20meeting%2C%20Black%20professionals%2C%20governance%20training%2C%20brown%20skin%20professionals%2C%20modern%20boardroom%2C%20educational%20content&width=400&height=225&seq=video-2-v2&orientation=landscape",
      duration: "8:15"
    },
    {
      id: 3,
      title: "Client Success Story - Youth Connect Services",
      description: "Testimonial and case study of successful organizational transformation",
      thumbnail: "https://readdy.ai/api/search-image?query=Video%20thumbnail%20client%20testimonial%2C%20African%20Canadian%20professional%20interview%2C%20Black%20professional%2C%20success%20story%20presentation%2C%20brown%20skin%20professional%2C%20modern%20office%2C%20positive%20outcome&width=400&height=225&seq=video-3-v2&orientation=landscape",
      duration: "3:45"
    },
    {
      id: 4,
      title: "Employment Readiness Training Highlights",
      description: "Overview of our comprehensive employment preparation program",
      thumbnail: "https://readdy.ai/api/search-image?query=Video%20thumbnail%20employment%20training%2C%20African%20Canadian%20job%20readiness%20workshop%2C%20Black%20professionals%2C%20diverse%20participants%2C%20brown%20skin%20professionals%2C%20professional%20development%2C%20modern%20training%20room&width=400&height=225&seq=video-4-v2&orientation=landscape",
      duration: "6:20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our training sessions, client testimonials, and organizational development insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-play-fill text-blue-600 text-2xl ml-1"></i>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Executive Director",
      organization: "African Canadian Seniors Network",
      image: "https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20woman%20executive%2C%20confident%20Black%20female%20leader%2C%20business%20portrait%2C%20brown%20skin%20professional%2C%20modern%20office%20background%2C%20professional%20attire&width=150&height=150&seq=testimonial-1-v2&orientation=squarish",
      quote: "Knowledge Without Borders transformed our organization's strategic planning process. Their bilingual approach and deep understanding of our community needs made all the difference.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Board Chair",
      organization: "Youth Connect Services",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20Canadian%20business%20executive%2C%20board%20chair%2C%20confident%20leader%2C%20modern%20office%20portrait%2C%20professional%20setting&width=150&height=150&seq=testimonial-2-v2&orientation=squarish",
      quote: "The board governance training we received was exceptional. Our board is now more effective, engaged, and confident in our oversight responsibilities.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Amina Hassan",
      position: "Program Manager",
      organization: "Dar Wadi for Refugees and Immigrants",
      image: "https://readdy.ai/api/search-image?query=Professional%20African%20woman%20doctor%2C%20Black%20female%20program%20manager%2C%20confident%20professional%2C%20brown%20skin%20professional%2C%20modern%20healthcare%20setting%2C%20professional%20attire&width=150&height=150&seq=testimonial-3-v2&orientation=squarish",
      quote: "Their M&E framework implementation has revolutionized how we track and measure our program impact. The results speak for themselves.",
      rating: 5
    },
    {
      id: 4,
      name: "James Thompson",
      position: "CEO",
      organization: "Connecture Canada",
      image: "https://readdy.ai/api/search-image?query=Professional%20African%20Canadian%20business%20CEO%2C%20Black%20male%20executive%2C%20confident%20leader%2C%20brown%20skin%20professional%2C%20modern%20corporate%20portrait%2C%20business%20suit%2C%20professional%20office%20background&width=150&height=150&seq=testimonial-4-v2&orientation=squarish",
      quote: "The financial management training and policy development services have strengthened our organization's foundation significantly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our clients about their experience and the impact of our capacity-building services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-semibold">{testimonial.position}</p>
                  <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UploadSection = () => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file upload logic here
    console.log('Files dropped:', e.dataTransfer.files);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Share Your Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload photos and videos from your training sessions or organizational achievements to be featured in our gallery
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              dragOver 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-upload-cloud-line text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Photos & Videos</h3>
            <p className="text-gray-600 mb-6">
              Drag and drop your files here, or click to browse
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Choose Files
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Supported formats: JPG, PNG, MP4, MOV (Max 50MB per file)
            </p>
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Photo Guidelines</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                  High resolution (minimum 1200px width)
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                  Clear, well-lit images
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                  Include brief description and context
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Video Guidelines</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                  HD quality (1080p preferred)
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                  Maximum 10 minutes duration
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                  Clear audio and professional content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <GalleryHero />
        <PhotoGallery />
        <VideoGallery />
        <TestimonialsSection />
        <UploadSection />
        
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing community of successful organizations and start your capacity-building journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Start Your Project
              </Link>
              <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}