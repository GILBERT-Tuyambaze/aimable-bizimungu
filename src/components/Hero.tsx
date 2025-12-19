import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from '@/hooks/useTheme'
import { Calendar, Phone, FileText, Award, Users, Star, Zap } from 'lucide-react'

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const titles = [
    'Professional Physiotherapist',
    'Sports Rehabilitation Specialist',
    'Musculoskeletal Therapist',
    'Pain Management Expert'
  ]

  const badges = [
    '3+ Years Experience',
    'Hospital Physiotherapy',
    'Musculoskeletal Therapy',
    'Sports Injury Rehab'
  ]

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentTitleText = titles[currentTitle]

    if (isTyping) {
      if (displayText.length < currentTitleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitleText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentTitle, titles])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 8 columns on desktop */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            {/* Floating particles animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
              <div className="absolute top-40 left-32 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
              <div className="absolute top-60 left-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
            </div>

            {/* Name and Title */}
            <div className="space-y-6 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block mb-2 animate-in fade-in slide-in-from-left duration-1000 delay-200">
                  <span className="inline-block hover:scale-110 transition-transform duration-300">A</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">I</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">M</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">A</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">B</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">L</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300">E</span>
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 bg-clip-text text-transparent animate-in fade-in slide-in-from-left duration-1000 delay-400 hover:from-cyan-500 hover:to-blue-600 transition-all duration-500">
                  BIZIMUNGU
                </span>
              </h1>
              
              <div className="h-16 flex items-center animate-in fade-in slide-in-from-left duration-1000 delay-600">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-orange-500 dark:text-orange-400">
                  {displayText}
                  <span className="animate-pulse text-blue-500">|</span>
                </h2>
              </div>
            </div>

            {/* Description with enhanced animation */}
            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-800">
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl relative">
                <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
                Dedicated physiotherapist committed to restoring mobility, reducing pain, and improving athletic performance through evidence-based rehabilitation techniques and personalized care.
              </p>
            </div>

            {/* Professional Badges with stagger animation */}
            <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-left duration-1000 delay-1000">
              {badges.map((badge, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0 text-sm font-medium hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${1200 + index * 200}ms` }}
                >
                  <Star className="w-3 h-3 mr-1" />
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Action Buttons with advanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-left duration-1000 delay-1400">
              <Button 
                size="lg"
                className="group rounded-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
                onClick={() => scrollToSection('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
                <Zap className="ml-2 h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="group rounded-full px-8 py-6 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/25 relative overflow-hidden"
                onClick={() => scrollToSection('services')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                <FileText className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">View Services</span>
              </Button>
            </div>

            {/* Contact Info Quick Access with pulse animation */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-in fade-in slide-in-from-left duration-1000 delay-1600">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium">0784356207</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer group">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-4 w-4 text-orange-500" />
                </div>
                <span className="text-sm font-medium">Licensed Physiotherapist</span>
              </div>
            </div>
          </div>

          {/* Right Content - 4 columns on desktop, properly positioned */}
          <div className="lg:col-span-4 xl:col-span-5 relative animate-in fade-in slide-in-from-right duration-1000 delay-300 order-last lg:order-last">
            {/* Enhanced floating background elements */}
            <div className="absolute -inset-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Main Image Container with advanced effects */}
            <div className="relative group">
              {/* Animated background decoration */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -top-3 -right-3 w-full h-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
              
              {/* Main Image */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 border border-white/50 dark:border-slate-700/50">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={resolvedTheme === 'dark' 
                      ? '/images/hero-dark-physiotherapist.jpg' 
                      : '/images/Aimable-bizimungu-hero-light.jpg'
                    }
                    alt="Aimable Bizimungu - Professional Physiotherapist"
                    className="w-full h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group-hover:shadow-2xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-2 mx-auto animate-pulse">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Years</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group-hover:shadow-2xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-2 mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xl font-bold text-orange-500">500+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Patients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Achievement Grid with animations */}
            <div className="grid grid-cols-3 gap-3 mt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-1800">
              {[
                { title: 'Licensed', subtitle: 'Physiotherapist', color: 'blue', delay: '0ms' },
                { title: 'Sports', subtitle: 'Specialist', color: 'orange', delay: '200ms' },
                { title: 'International', subtitle: 'Experience', color: 'cyan', delay: '400ms' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-900/20 dark:to-${item.color}-800/20 rounded-xl p-4 text-center hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:shadow-lg animate-in fade-in slide-in-from-bottom duration-500`}
                  style={{ animationDelay: item.delay }}
                >
                  <div className={`text-sm font-semibold text-${item.color}-700 dark:text-${item.color}-300 group-hover:scale-110 transition-transform duration-300`}>
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Achievement Highlights with advanced animations */}
        <div className="mt-20 grid md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-2000">
          {[
            { title: 'Hospital', subtitle: 'Orthopedic Specialist', color: 'blue', icon: Award },
            { title: 'International', subtitle: 'Team Physiotherapist', color: 'orange', icon: Users },
            { title: 'Evidence-Based', subtitle: 'Treatment Approach', color: 'cyan', icon: Zap },
            { title: 'Personalized', subtitle: 'Care Plans', color: 'green', icon: Star }
          ].map((item, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl cursor-pointer animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${2200 + index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`text-xl font-bold text-${item.color}-600 dark:text-${item.color}-400 mb-1 group-hover:scale-110 transition-transform duration-300`}>
                {item.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
