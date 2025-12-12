import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building, Users, Smartphone, BarChart3, Target, Lightbulb } from 'lucide-react'

export default function FutureGoals() {
  const goals = [
    {
      icon: Building,
      title: 'Physiotherapy Center',
      description: 'Opening a comprehensive physiotherapy and rehabilitation center equipped with state-of-the-art facilities and advanced treatment modalities.',
      timeline: '2025-2026',
      status: 'Planning Phase'
    },
    {
      icon: Users,
      title: 'Athlete Recovery Programs',
      description: 'Launching specialized recovery programs for professional and amateur athletes, focusing on performance optimization and injury prevention.',
      timeline: '2025',
      status: 'Development'
    },
    {
      icon: Smartphone,
      title: 'Digital Therapy Plans',
      description: 'Building innovative digital platforms for remote physiotherapy consultations and personalized exercise program delivery.',
      timeline: '2026',
      status: 'Research Phase'
    },
    {
      icon: BarChart3,
      title: 'Sports Analytics Integration',
      description: 'Integrating sports analytics and movement analysis technology to provide data-driven rehabilitation and performance insights.',
      timeline: '2026-2027',
      status: 'Conceptual'
    }
  ]

  const visionPoints = [
    {
      icon: Target,
      title: 'Excellence in Care',
      description: 'Providing world-class physiotherapy services that set new standards in patient care and treatment outcomes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Leading innovation in rehabilitation technology and evidence-based treatment methodologies.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Making quality physiotherapy accessible to all members of the community, regardless of background or economic status.'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Future <span className="text-blue-600 dark:text-blue-400">Vision</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ambitious goals and innovative projects that will shape the future of physiotherapy and rehabilitation services
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {goals.map((goal, index) => (
            <Card 
              key={index}
              className="group border-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom duration-1000 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 relative">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    goal.status === 'Planning Phase' 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : goal.status === 'Development'
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                      : goal.status === 'Research Phase'
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                      : 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
                  }`}>
                    {goal.status}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <goal.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {goal.title}
                    </h3>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      Timeline: {goal.timeline}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 rounded-2xl transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-2xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Vision for the Future
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto">
                "To become a leading force in physiotherapy innovation, creating accessible, technology-enhanced rehabilitation solutions that empower individuals to achieve their highest potential for physical health and performance. Through continuous learning, research, and community engagement, we aim to transform lives and set new standards in evidence-based care."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          {visionPoints.map((point, index) => (
            <Card 
              key={index}
              className="border-0 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {point.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
          <Card className="border-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Join Our Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Be part of the future of physiotherapy. Whether you're a patient, colleague, or partner, let's work together to achieve these ambitious goals.
              </p>
              <Button 
                size="lg"
                className="rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Involved
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}