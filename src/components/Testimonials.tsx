import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Athlete',
      image: '/images/Testimonials.jpg',
      rating: 5,
      quote: 'Aimable helped me recover from a serious knee injury and get back to competitive sports. His expertise in sports physiotherapy is exceptional, and his personalized approach made all the difference in my recovery journey.'
    },
    {
      name: 'Michael Chen',
      role: 'Office Worker',
      image: '/images/Testimonials.jpg',
      rating: 5,
      quote: 'After years of chronic back pain from desk work, Aimable developed a treatment plan that not only relieved my pain but also taught me how to prevent future issues. Highly professional and caring.'
    },
    {
      name: 'Emma Williams',
      role: 'Senior Patient',
      image: '/images/Testimonials.jpg',
      rating: 5,
      quote: 'The post-surgery rehabilitation program designed by Aimable was comprehensive and effective. His patience and encouragement throughout the recovery process were invaluable. I regained full mobility faster than expected.'
    },
    {
      name: 'David Mukamana',
      role: 'Cricket Player',
      image: '/images/Testimonials.jpg',
      rating: 5,
      quote: 'Having worked with Aimable during international tournaments, I can attest to his exceptional skills in sports medicine. His injury prevention strategies and recovery protocols are world-class.'
    },
    {
      name: 'Grace Uwimana',
      role: 'Physical Therapy Patient',
      image: '/images/Testimonials.jpg',
      rating: 5,
      quote: 'Aimable\'s holistic approach to physiotherapy addresses not just the symptoms but the root cause of problems. His exercise programs are well-designed and his follow-up care is exceptional.'
    },
    {
      name: 'Robert Nkurunziza',
      role: 'Former Patient',
      image: '/images/Testimonials.jpg',
      rating: 5,
      quote: 'Professional, knowledgeable, and genuinely caring. Aimable helped me overcome a shoulder injury that had been bothering me for months. His treatment approach is both scientific and compassionate.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Patient <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from patients who have experienced successful recovery and improved quality of life through our care
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group border-0 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom duration-1000 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-blue-100 dark:border-blue-900">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 rounded-2xl transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Patients Treated</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Patient Satisfaction</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Recovery Success Rate</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-2xl max-w-3xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Join Our Success Stories
              </h3>
              <p className="text-blue-100 text-lg mb-8">
                Experience the same level of professional care and successful outcomes. Start your recovery journey today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Book Your Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  Read More Reviews
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
