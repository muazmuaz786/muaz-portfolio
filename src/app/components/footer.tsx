import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, ArrowRight } from 'lucide-react';
import me from "../../../public/me.jpg";

export function Footer() {
  return (
    <footer className="bg-[#252B37] border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Profile */}
          <div className="flex items-start gap-6">
            <img
              src={me}
              alt="Muaz Tillaev"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Muaz Tillaev</h3>
              <p className="text-gray-400 mb-4">Fullstack Developer</p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/18EirU3Hsa/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/muaztillaev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muaz-tillaev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/muazmuaz786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Get in Touch */}
          <div>
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-3">
              Get in touch
              <ArrowRight size={36} className="text-[#0066FF]" />
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                  Email me:
                </p>
                <a
                  href="mailto:koreanmuaz@gmail.com"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#0066FF] transition-colors group"
                >
                  koreanmuaz@gmail.com
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div>
                <p className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                  Call me:
                </p>
                <a
                  href="tel:+99893329116"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#0066FF] transition-colors group mb-2"
                >
                  +998 93 329 11 63
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <br />
                <a
                  href="tel:+821027020692"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#0066FF] transition-colors group"
                >
                  +82 10 2702 0692
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
              Or follow me on social media
            </p>
            
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/18EirU3Hsa/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/muaztillaev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muaz-tillaev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/muazmuaz786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1f242e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <p>
              Copyright © Muaz Tillaev | Designed by{' '}
              <a href="#" className="text-white hover:text-[#0066FF] transition-colors">
                Muaz Tillaev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
