import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp 
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Physiotherapy Consultation',
      description: 'Comprehensive assessment and personalized treatment planning for optimal recovery outcomes.',
      features: ['Initial Assessment', 'Treatment Planning', 'Progress Monitoring']
    },
    {
      icon: Heart,
      title: 'Pain Management',
      description: 'Advanced techniques for chronic and acute pain relief using evidence-based approaches.',
      features: ['Chronic Pain Relief', 'Acute Injury Care', 'Pain Education']
    },
    {
      icon: Activity,
      title: 'Musculoskeletal Therapy',
      description: 'Specialized treatment for muscle, joint, and bone conditions to restore function.',
      features: ['Joint Mobilization', 'Soft Tissue Work', 'Postural Correction']
    },
    {
      icon: Users,
      title: 'Rehabilitation Sessions',
      description: 'Structured rehabilitation programs tailored to individual needs and goals.',
      features: ['Post-Surgery Rehab', 'Injury Recovery', 'Functional Training']
    },
    {
      icon: Target,
      title: 'Exercise Prescription',
      description: 'Customized exercise programs with ongoing monitoring and progression.',
      features: ['Home Exercise Programs', 'Gym-Based Training', 'Progress Tracking']
    },
    {
      icon: Zap,
      title: 'Functional Movement Screening',
      description: 'Assessment of movement patterns to identify and prevent potential injuries.',
      features: ['Movement Analysis', 'Risk Assessment', 'Prevention Strategies']
    },
    {
      icon: Shield,
      title: 'Sports Injury Management',
      description: 'Specialized care for athletic injuries with focus on safe return to sport.',
      features: ['Injury Assessment', 'Sport-Specific Rehab', 'Return-to-Play Protocols']
    },
    {
      icon: TrendingUp,
      title: 'Recovery Optimization',
      description: 'Advanced recovery techniques to enhance healing and performance.',
      features: ['Recovery Planning', 'Performance Enhancement', 'Injury Prevention']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive physiotherapy services designed to restore function, reduce pain, and optimize performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-0 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom duration-1000 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Book a consultation today and take the first step towards pain-free living and optimal physical function.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Call Now: 0784356207
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}