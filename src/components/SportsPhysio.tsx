import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Trophy, Zap, Target, Users, Timer, Award } from 'lucide-react'

export default function SportsPhysio() {
  const sportsServices = [
    {
      icon: Trophy,
      title: 'Athlete Injury Recovery',
      description: 'Specialized rehabilitation programs for sports-related injuries with focus on safe return to competition.',
      highlight: 'International Experience'
    },
    {
      icon: Zap,
      title: 'Performance Enhancement',
      description: 'Strength and conditioning support to optimize athletic performance and prevent future injuries.',
      highlight: 'Evidence-Based'
    },
    {
      icon: Target,
      title: 'Flexibility & Mobility',
      description: 'Comprehensive mobility sessions designed to improve range of motion and movement quality.',
      highlight: 'Sport-Specific'
    },
    {
      icon: Users,
      title: 'Injury Prevention',
      description: 'Proactive programs to identify risk factors and prevent injuries before they occur.',
      highlight: 'Team Approach'
    }
  ]

  const achievements = [
    'Team Physiotherapist - Botswana National Cricket Teams',
    'International Tournament Experience',
    'Sports Injury Specialist Certification',
    'Performance Optimization Expert'
  ]

  return (
    <section id="sports" className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-orange-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-400/30 px-4 py-2 text-sm">
            Sports Medicine Specialist
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Sports <span className="text-orange-400">Physiotherapy</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Combining medical expertise with athletic performance optimization for elite and recreational athletes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                International Sports Medicine Experience
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                As team physiotherapist for Botswana's national cricket teams, I've gained invaluable experience in high-performance sports medicine, working with elite athletes in international competitions including T20 World Cup qualifiers and Kwibuka tournaments.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                My approach blends clinical expertise with sports-specific knowledge to ensure athletes not only recover from injuries but return stronger and more resilient than before.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-orange-400">Key Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <span className="text-blue-100">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg"
              className="rounded-full px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Timer className="mr-2 h-5 w-5" />
              Schedule Sports Assessment
            </Button>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid gap-6 animate-in fade-in slide-in-from-right duration-1000 delay-500">
            {sportsServices.map((service, index) => (
              <Card 
                key={index}
                className="border-0 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{service.title}</h4>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs">
                          {service.highlight}
                        </Badge>
                      </div>
                      <p className="text-blue-100 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">5+</div>
              <div className="text-blue-100">International Tournaments</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-blue-100">Athletes Treated</div>
            </CardContent>
          </Card>
          
          <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-blue-100">Return-to-Play Success</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}