import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ZoomIn } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: '/assets/gallery-clinic-interior.jpg',
      alt: 'Modern physiotherapy clinic interior',
      title: 'Modern Clinic Facilities',
      category: 'Facilities'
    },
    {
      src: '/assets/gallery-sports-equipment.jpg',
      alt: 'Sports rehabilitation equipment',
      title: 'Sports Rehabilitation Equipment',
      category: 'Equipment'
    },
    {
      src: '/images/Aimable-bizimungu-about-dark.jpg .jpg',
      alt: 'Physiotherapy treatment session',
      title: 'Treatment Session',
      category: 'Treatment'
    },
    {
      src: '/images/hero-dark-physiotherapist.jpg',
      alt: 'Professional physiotherapist portrait',
      title: 'Professional Practice',
      category: 'Professional'
    },
    
    {
      src: '/images/Aimable-bizimungu-proffession-1.jpg',
      alt: 'Professional physiotherapist portrait',
      title: 'Professional Practice',
      category: 'Professional'
    },
    
    {
      src: '/images/Aimable-bizimungu-proffession-2.jpg',
      alt: 'Professional physiotherapist portrait',
      title: 'Professional Practice',
      category: 'Professional'
    },
    
    {
      src: '/images/Aimable-bizimungu-proffession-3.jpg',
      alt: 'Professional physiotherapist portrait',
      title: 'Professional Practice',
      category: 'Professional'
    },
    {
      src: '/images/Aimable-bizimungu-proffession-4.jpg',
      alt: 'Professional physiotherapist portrait',
      title: 'Professional Practice',
      category: 'Professional'
    },
    {
      src: '/images/Aimable-bizimungu-proffession-5.jpg',
      alt: 'Professional physiotherapist portrait',
      title: 'Professional Practice',
      category: 'Professional'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Physical therapy equipment',
      title: 'Therapy Equipment',
      category: 'Equipment'
    },
    {
      src: '/images/Rehabilitation.jpg',
      alt: 'Rehabilitation exercises',
      title: 'Rehabilitation Exercises',
      category: 'Treatment'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Sports medicine facility',
      title: 'Sports Medicine Facility',
      category: 'Facilities'
    }
  ]

  const categories = ['All', 'Facilities', 'Equipment', 'Treatment', 'Professional']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Practice <span className="text-blue-600 dark:text-blue-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A glimpse into our modern facilities, advanced equipment, and professional practice environment
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'hover:bg-blue-50 dark:hover:bg-slate-800'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={index}
              className="group break-inside-avoid border-0 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {image.category}
                      </p>
                    </div>
                    
                    <Button
                      size="icon"
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="relative max-w-4xl max-h-full">
              <Button
                size="icon"
                className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <Card className="border-0 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Experience Our Modern Facilities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Visit our state-of-the-art clinic equipped with the latest physiotherapy and rehabilitation technology.
              </p>
              <Button 
                size="lg"
                className="rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Visit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
