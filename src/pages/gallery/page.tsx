import { useTranslation } from 'react-i18next';
import { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from '../../content/pages/gallery.json';
// Text, images and links: src/content/pages/gallery.json (editable in the website editors).

/** * DATA MANAGEMENT 
 * To add more images in the future, simply add a new object to this array.
 */
const NEW_GALLERY_IMAGES = copy.photos;

const GalleryHero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/90 via-blue-700/85 to-indigo-800/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{copy.galleryHero.title}</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 mb-8">{copy.galleryHero.text}</p>
      </div>
    </section>
  );
};

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const categories = copy.categories;

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
              alt={copy.lightbox.imageAlt}
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
    <Suspense fallback={<div className="h-screen flex items-center justify-center">{copy.page.text}</div>}>
      <div className="min-h-screen bg-gray-50">
        <GalleryHero />
        <PhotoGallery />
        <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-700 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">{copy.page.heading}</h2>
            <div className="flex gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">{copy.page.text2}</Link>
            </div>
        </section>
      </div>
    </Suspense>
  );
}