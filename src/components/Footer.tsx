import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sports Physio', href: '#sports' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Physiotherapy Consultation',
    'Pain Management',
    'Sports Rehabilitation',
    'Musculoskeletal Therapy',
    'Exercise Therapy',
    'Post-Surgery Rehabilitation'
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Aimable Bizimungu</h3>
                <p className="text-gray-400 text-sm">Licensed Physiotherapist</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Dedicated to restoring mobility, reducing pain, and improving athletic performance through evidence-based rehabilitation techniques and personalized care.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: 'https://www.instagram.com/mungu_aimable?igsh=MTk0bGRmdWxhcTNuaw%3D%3D&utm_source=qr', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">0784356207</p>
                  <p className="text-gray-300 text-sm">0725134307</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">aimablebizimungu@gmail.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Gikondo, Kicukiro</p>
                  <p className="text-gray-300 text-sm">Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact Card */}
            <Card className="border-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-xl">
              <CardContent className="p-4">
                <h5 className="text-white font-semibold mb-2 text-sm">Emergency Contact</h5>
                <p className="text-blue-200 text-xs mb-3">Available 24/7 for urgent cases</p>
                <Button 
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs"
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">            
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">  
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 <a href="https://tuyambaze-gilbert.vercel.app" className="text-gray-300 hover:text-orange-500" target="_blank" rel="noopener noreferrer">developed by Gilbert TUYAMBAZE, click here to visit me too  </a>. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for better health</span>
              
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <button className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
