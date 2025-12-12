import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      period: 'November 2023 - Present',
      title: 'Full-time Physiotherapist',
      organization: 'Inkurunziza Orthopedic Specialized Hospital',
      location: 'Kigali, Rwanda',
      type: 'Current Position',
      description: 'Providing comprehensive physiotherapy services in a specialized orthopedic setting, treating complex musculoskeletal conditions and post-surgical rehabilitation.',
      highlights: [
        'Orthopedic rehabilitation specialist',
        'Post-surgical care and recovery',
        'Complex musculoskeletal conditions',
        'Multidisciplinary team collaboration'
      ]
    },
    {
      period: 'September 2022 - October 2023',
      title: 'Full-time Physiotherapist',
      organization: 'Unique Rehabilitation Clinic',
      location: 'Kigali, Rwanda',
      type: 'Previous Role',
      description: 'Delivered personalized physiotherapy treatments and rehabilitation programs in a private clinic setting, focusing on patient-centered care and functional outcomes.',
      highlights: [
        'Private practice experience',
        'Personalized treatment plans',
        'Functional rehabilitation',
        'Patient education and empowerment'
      ]
    },
    {
      period: '2022 - 2024',
      title: 'Team Physiotherapist',
      organization: 'Botswana National Cricket Teams',
      location: 'International Tournaments',
      type: 'Sports Medicine',
      description: 'Served as team physiotherapist for both male and female national cricket teams during international competitions, providing injury prevention, treatment, and performance optimization.',
      highlights: [
        'International tournament experience',
        'T20 World Cup qualifiers',
        'Kwibuka tournament specialist',
        'Elite athlete management'
      ]
    },
    {
      period: 'May - October 2022',
      title: 'Professional Internship',
      organization: 'Unique Rehabilitation Clinic',
      location: 'Kigali, Rwanda',
      type: 'Training',
      description: 'Completed comprehensive professional internship, gaining hands-on experience in clinical physiotherapy practice and patient management.',
      highlights: [
        'Clinical skill development',
        'Patient assessment mastery',
        'Treatment planning expertise',
        'Professional mentorship'
      ]
    },
    {
      period: '2019 - 2022',
      title: 'Clinical Internships',
      organization: 'Multiple Healthcare Facilities',
      location: 'Rwanda',
      type: 'Education',
      description: 'Completed extensive clinical rotations across various healthcare settings including district hospitals, rehabilitation centers, and military hospital.',
      highlights: [
        'Kabgayi District Hospital',
        'Gahini Rehabilitation Center',
        'Rwanda Military Hospital',
        'King Faisal Hospital'
      ]
    }
  ]

  const certifications = [
    {
      year: '2025',
      title: 'Essential Pain Management Training',
      issuer: 'Professional Development'
    },
    {
      year: '2024',
      title: 'Africa Club Foot Basic Training',
      issuer: 'Gahini Rehabilitation Center'
    },
    {
      year: '2022',
      title: 'Physitrack Level 1&2 Certification',
      issuer: 'Physitrack Program'
    },
    {
      year: '2022',
      title: 'Licensed Physiotherapist',
      issuer: 'Rwanda Allied Health Professions Council'
    },
    {
      year: '2022',
      title: 'Bachelor of Science in Physiotherapy',
      issuer: 'University of Rwanda'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive journey through clinical practice, sports medicine, and specialized rehabilitation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-in fade-in slide-in-from-left duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"></div>
                )}
                
                <Card className="border-0 bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ml-12 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-16 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
                  
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge 
                        className={`px-3 py-1 text-sm font-medium ${
                          exp.type === 'Current Position' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-0' 
                            : exp.type === 'Sports Medicine'
                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-0'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0'
                        }`}
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.organization}</span>
                      <MapPin className="h-4 w-4 ml-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Certifications Sidebar */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Certifications & Education
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 animate-in fade-in slide-in-from-right duration-1000"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {cert.year}
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">
                        {cert.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Career Highlights
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Healthcare Facilities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Certifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}