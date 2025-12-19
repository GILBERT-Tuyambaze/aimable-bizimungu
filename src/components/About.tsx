import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTheme } from '@/hooks/useTheme'
import { Award, Users, Target, Heart } from 'lucide-react'

export default function About() {
  const { resolvedTheme } = useTheme()

  const highlights = [
    {
      icon: Award,
      title: 'Pain Management',
      description: 'Specialized techniques for chronic and acute pain relief'
    },
    {
      icon: Users,
      title: 'Mobility Restoration',
      description: 'Comprehensive rehabilitation for improved movement'
    },
    {
      icon: Target,
      title: 'Exercise Therapy',
      description: 'Personalized exercise programs for optimal recovery'
    },
    {
      icon: Heart,
      title: 'Athlete Recovery',
      description: 'Sports-specific rehabilitation and performance enhancement'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Aimable</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Licensed physiotherapist with expertise in orthopedic rehabilitation and sports medicine
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={resolvedTheme === 'dark' 
                  ? '/images/Aimable-bizimungu-about-dark.jpg .jpg' 
                  : '/images/ Aimable-bizimungu-about-light.jpg'
                }
                alt="Aimable Bizimungu in therapy session"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Currently Working At
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Inkurunziza Orthopedic Specialized Hospital
                    </p>
                  </div>
                  <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-0">
                    Active
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Professional Journey & Mission
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As a licensed physiotherapist graduated from the University of Rwanda's College of Medicine and Health Sciences, I bring comprehensive expertise in orthopedic and musculoskeletal rehabilitation to every patient interaction.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently serving at Inkurunziza Orthopedic Specialized Hospital, I specialize in evidence-based rehabilitation techniques, sports injury management, and personalized treatment plans that restore function and enhance quality of life.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My experience extends to international sports teams, having served as team physiotherapist for Botswana's national cricket teams, combining clinical expertise with sports performance optimization.
              </p>
            </div>

            {/* Mission & Vision */}
            <Card className="border-0 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mission & Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide exceptional physiotherapy care that empowers individuals to achieve optimal physical function, reduce pain, and return to their desired activities with confidence and strength.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="border-0 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
