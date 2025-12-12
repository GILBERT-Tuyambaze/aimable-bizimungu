import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon, Monitor, Menu, Phone, Mail } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const ThemeToggle = ({ isMobile = false }) => (
    <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center space-x-1'} bg-gray-100 dark:bg-gray-800 rounded-full ${isMobile ? 'p-3' : 'p-1'}`}>
      <Button
        variant={theme === 'light' ? 'default' : 'ghost'}
        size={isMobile ? 'default' : 'sm'}
        onClick={() => setTheme('light')}
        className={`rounded-full ${isMobile ? 'w-full justify-start' : 'h-8 w-8 p-0'} ${theme === 'light' ? 'bg-white text-gray-900 shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
      >
        <Sun className={`${isMobile ? 'mr-2' : ''} h-4 w-4`} />
        {isMobile && 'Light'}
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'ghost'}
        size={isMobile ? 'default' : 'sm'}
        onClick={() => setTheme('dark')}
        className={`rounded-full ${isMobile ? 'w-full justify-start' : 'h-8 w-8 p-0'} ${theme === 'dark' ? 'bg-gray-900 text-white shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
      >
        <Moon className={`${isMobile ? 'mr-2' : ''} h-4 w-4`} />
        {isMobile && 'Dark'}
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'ghost'}
        size={isMobile ? 'default' : 'sm'}
        onClick={() => setTheme('system')}
        className={`rounded-full ${isMobile ? 'w-full justify-start' : 'h-8 w-8 p-0'} ${theme === 'system' ? 'bg-blue-600 text-white shadow-sm' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
      >
        <Monitor className={`${isMobile ? 'mr-2' : ''} h-4 w-4`} />
        {isMobile && 'System'}
      </Button>
    </div>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <img
               src="/assets/icon-512x512.png"
               alt="Gilbert Tuyambaze"
               className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <span className="md:hidden flex text-white font-bold text-lg">Aimable</span>
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Aimable Bizimungu</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400">Physiotherapist</p>
            </div>
          </div>

          {/* Desktop nav links (md+) */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Theme Toggle & Contact Button (unchanged, always visible) */}
          <div className="flex items-center space-x-4 animate-in fade-in slide-in-from-right duration-700 delay-500">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:block rounded-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger - only visible below md */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:rotate-90"
                >
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top duration-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full">
                        <img
                          src="/assets/icon-512x512.png"
                          alt="Gilbert Tuyambaze"
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Aimable Bizimungu</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Physiotherapist</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex-1 space-y-1 p-4">
                    {navItems.map((item, index) => (
                      <Button
                        key={item.name}
                        variant="ghost"
                        onClick={() => scrollToSection(item.href)}
                        className="w-full justify-start text-left rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in fade-in slide-in-from-right duration-500"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>

                  {/* Mobile Contact Section */}
                  <div className="border-t border-gray-200 dark:border-gray-700 p-2 space-y-1 animate-in fade-in slide-in-from-bottom duration-500 delay-900">
                    <Button
                      onClick={() => scrollToSection('#contact')}
                      className="w-full rounded-xl py-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>0784356207</span>
                      </div>
                      <div className="flex items-center space-x-2 hover:text-orange-500 transition-colors duration-300">
                        <Mail className="h-4 w-4 text-orange-500" />
                        <span>aimable.bizimungu@example.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
