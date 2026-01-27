import { useTranslation } from 'react-i18next';
import { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/** * DATA MANAGEMENT 
 * To add more images in the future, simply add a new object to this array.
 */
const NEW_GALLERY_IMAGES = [
  { id: 1, category: 'workshops', title: 'Community Session', url: 'https://i.imgur.com/jZQ3NqP.png' },
  { id: 2, category: 'training', title: 'Professional Development', url: 'https://i.imgur.com/LAznKX0.png' },
  { id: 3, category: 'meetings', title: 'Strategic Planning', url: 'https://i.imgur.com/ng8UgtI.png' },
  { id: 4, category: 'events', title: 'Annual Gathering', url: 'https://i.imgur.com/kFdmf6B.png' },
  { id: 5, category: 'achievements', title: 'Program Success', url: 'https://i.imgur.com/pNoljJc.png' },
  { id: 6, category: 'workshops', title: 'Skill Building', url: 'https://i.imgur.com/BCnL9sQ.png' },
  { id: 7, category: 'training', title: 'Capacity Building', url: 'https://i.imgur.com/R1KXnio.png' },
  { id: 8, category: 'meetings', title: 'Leadership Sync', url: 'https://i.imgur.com/2Yu3Px8.png' },
  { id: 9, category: 'events', title: 'Community Outreach', url: 'https://i.imgur.com/OG2MtRO.png' },
  { id: 10, category: 'achievements', title: 'Milestone Celebration', url: 'https://i.imgur.com/EBgoezX.png' },
  { id: 11, category: 'workshops', title: 'Workshop Highlight', url: 'https://i.imgur.com/vpUJcIx.png' },
  { id: 12, category: 'training', title: 'Group Training', url: 'https://i.imgur.com/uDPG4Pc.png' },
  { id: 13, category: 'meetings', title: 'Board Meeting', url: 'https://i.imgur.com/M05LmNo.png' },
  { id: 14, category: 'events', title: 'Networking Event', url: 'https://i.imgur.com/KH6njqF.png' },
  { id: 15, category: 'achievements', title: 'Project Completion', url: 'https://i.imgur.com/xuJG6eA.png' },
  { id: 16, category: 'workshops', title: 'Collaborative Space', url: 'https://i.imgur.com/71jd7E0.png' },
  { id: 17, category: 'training', title: 'Empowerment Session', url: 'https://i.imgur.com/twN1TUa.png' },
  { id: 18, category: 'meetings', title: 'Consultation', url: 'https://i.imgur.com/EmYZKXx.png' },
  { id: 19, category: 'events', title: 'Partner Recognition', url: 'https://i.imgur.com/acgPfaN.png' },
  { id: 20, category: 'achievements', title: 'Impact Report', url: 'https://i.imgur.com/n4FABIU.png' },
  { id: 21, category: 'workshops', title: 'Innovation Workshop', url: 'https://i.imgur.com/OQeCxDV.png' },
  { id: 22, category: 'training', title: 'Staff Development', url: 'https://i.imgur.com/woMMspL.png' },
  { id: 23, category: 'meetings', title: 'Executive Session', url: 'https://i.imgur.com/tAM8kht.png' },
  { id: 24, category: 'events', title: 'Forum Discussion', url: 'https://i.imgur.com/258rsQt.png' },
  { id: 25, category: 'achievements', title: 'Excellence Award', url: 'https://i.imgur.com/bKWXzMw.png' },
  { id: 26, category: 'workshops', title: 'Hands-on Learning', url: 'https://i.imgur.com/mG5Ls7y.png' },
  { id: 27, category: 'training', title: 'Educational Seminar', url: 'https://i.imgur.com/cTeUZtm.png' },
];

const GalleryHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 via-blue-700/85 to-indigo-800/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Our Achievements Gallery</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 mb-8">
          Visual documentation of our capacity-building work and organizational transformations.
        </p>
      </div>
    </section>
  );
};

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const categories = [
    { id: 'all', name: 'All Photos', icon: 'ri-image-line' },
    { id: 'workshops', name: 'Workshops', icon: 'ri-presentation-line' },
    { id: 'training', name: 'Training', icon: 'ri-graduation-cap-line' },
    { id: 'meetings', name: 'Meetings', icon: 'ri-team-line' },
    { id: 'events', name: 'Events', icon: 'ri-calendar-event-line' },
    { id: 'achievements', name: 'Achievements', icon: 'ri-trophy-line' }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? NEW_GALLERY_IMAGES 
    : NEW_GALLERY_IMAGES.filter(p => p.category === selectedCategory);

  const openLightbox = (index) => setLightbox({ isOpen: true, index });
  const closeLightbox = () => setLightbox({ isOpen: false, index: 0 });
  const nextImage = (e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index + 1) % filteredPhotos.length })); };
  const prevImage = (e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index - 1 + filteredPhotos.length) % filteredPhotos.length })); };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                  selectedCategory === cat.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={cat.icon}></i> {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid optimized for fast scanning */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, idx) => (
            <div 
              key={photo.id} 
              className="relative group cursor-zoom-in overflow-hidden rounded-xl bg-gray-200 aspect-square"
              onClick={() => openLightbox(idx)}
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Slider for Swipe-like experience */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fadeIn" onClick={closeLightbox}>
          <button className="absolute top-5 right-5 text-white text-4xl" onClick={closeLightbox}>&times;</button>
          
          <button className="absolute left-4 text-white p-4 hover:bg-white/10 rounded-full transition" onClick={prevImage}>
            <i className="ri-arrow-left-s-line text-4xl"></i>
          </button>
          
          <div className="max-w-5xl max-h-[80vh] px-4 flex flex-col items-center">
            <img 
              src={filteredPhotos[lightbox.index].url} 
              className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded"
              alt="Expanded view"
            />
            <p className="text-white mt-4 text-lg">{filteredPhotos[lightbox.index].title}</p>
            <p className="text-gray-400 text-sm">{lightbox.index + 1} / {filteredPhotos.length}</p>
          </div>

          <button className="absolute right-4 text-white p-4 hover:bg-white/10 rounded-full transition" onClick={nextImage}>
            <i className="ri-arrow-right-s-line text-4xl"></i>
          </button>
        </div>
      )}
    </section>
  );
};

// ... VideoGallery, TestimonialsSection, and UploadSection remain similar to previous but simplified for focus ...

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Gallery...</div>}>
      <div className="min-h-screen bg-gray-50">
        <GalleryHero />
        <PhotoGallery />
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-700 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <div className="flex gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Start Your Project</Link>
            </div>
        </section>
      </div>
    </Suspense>
  );
}