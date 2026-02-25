import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Code } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C3444]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white font-bold text-xl">
            <Code className="text-[#0066FF]" size={24} />
            <span>Muaz Tillaev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-white hover:text-[#0066FF] transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
              Skills
            </a>  
            <a href="#certificates" className="text-gray-300 hover:text-white transition-colors">
              Certificates
            </a>
            <a href="#hobbies" className="text-gray-300 hover:text-white transition-colors">
              Hobbies
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block text-white hover:text-[#0066FF] transition-colors">
              Home
            </a>
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#certificates" className="block text-gray-300 hover:text-white transition-colors">
              Certificates
            </a>
            <a href="#hobbies" className="block text-gray-300 hover:text-white transition-colors">
              Hobbies
            </a>
            <a href="#portfolio" className="block text-gray-300 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
