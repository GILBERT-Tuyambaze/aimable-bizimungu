import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Stethoscope, 
  Activity, 
  Heart, 
  Users, 
  Brain, 
  Target,
  MessageCircle,
  UserCheck,
  Handshake,
  Clock
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Physiotherapy Skills',
      icon: Stethoscope,
      color: 'from-blue-600 to-cyan-500',
      skills: [
        { name: 'Injury Diagnosis', level: 95, icon: Activity },
        { name: 'Manual Therapy', level: 90, icon: Heart },
        { name: 'Exercise Therapy', level: 92, icon: Target },
        { name: 'Pain Reduction Techniques', level: 88, icon: Brain },
        { name: 'Rehabilitation Planning', level: 94, icon: Users }
      ]
    },
    {
      title: 'Sports Medicine',
      icon: Target,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Performance Recovery', level: 90, icon: Activity },
        { name: 'Flexibility Programs', level: 88, icon: Heart },
        { name: 'Strength & Conditioning', level: 85, icon: Target },
        { name: 'Sports Injury Prevention', level: 92, icon: Brain },
        { name: 'Return-to-Play Protocols', level: 89, icon: Users }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Empathy & Compassion', level: 98, icon: MessageCircle },
        { name: 'Communication', level: 95, icon: UserCheck },
        { name: 'Team Collaboration', level: 92, icon: Handshake },
        { name: 'Follow-up Consistency', level: 96, icon: Clock },
        { name: 'Patient Education', level: 94, icon: Brain }
      ]
    }
  ]

  const specializations = [
    {
      title: 'Orthopedic Physiotherapy',
      description: 'Specialized treatment for bone, joint, and muscle conditions',
      expertise: 'Expert'
    },
    {
      title: 'Musculoskeletal Therapy',
      description: 'Comprehensive care for musculoskeletal disorders',
      expertise: 'Expert'
    },
    {
      title: 'Sports Rehabilitation',
      description: 'Athletic injury recovery and performance optimization',
      expertise: 'Advanced'
    },
    {
      title: 'Pain Management',
      description: 'Evidence-based approaches to chronic and acute pain',
      expertise: 'Advanced'
    },
    {
      title: 'Neurological Physiotherapy',
      description: 'Treatment for neurological conditions and disorders',
      expertise: 'Intermediate'
    },
    {
      title: 'Cardiorespiratory Therapy',
      description: 'Rehabilitation for heart and lung conditions',
      expertise: 'Intermediate'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set combining technical expertise with compassionate patient care
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-0 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations Grid */}
        <div className="space-y-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Clinical Specializations
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Areas of specialized knowledge and clinical expertise developed through education and practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Card 
                key={index}
                className="group border-0 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {spec.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      spec.expertise === 'Expert' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : spec.expertise === 'Advanced'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                    }`}>
                      {spec.expertise}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-2xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Continuous Professional Development
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                Committed to staying current with the latest evidence-based practices and advancing skills through ongoing education and training programs.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-white">
                <div>
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-blue-100">Continuing Education Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-blue-100">Professional Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Evidence-Based Practice</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}