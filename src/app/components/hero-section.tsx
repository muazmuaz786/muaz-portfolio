import { motion } from 'motion/react';
import { ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube, Github, ArrowRight } from 'lucide-react';
import me from "../../../public/me.jpg";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,300px] gap-12 items-center">
        {/* Left Side - Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={me}
              alt="Muaz Tillaev"
              className="w-80 h-auto object-cover rounded-lg"
            />
            
            {/* Scroll Down Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 0.8, duration: 0.5 },
                y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
              }}
              onClick={scrollToAbout}
              className="absolute -bottom-6 left-12 w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center hover:bg-[#0052CC] transition-colors cursor-pointer shadow-lg"
              aria-label="Scroll down"
            >
              <ChevronDown size={32} className="text-white" />
            </motion.button>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1"
          >
            <div className="w-12 h-1 bg-white mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm Muaz, a<br />Full Stack Developer
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Egyptian-Uzbek developer born and raised in Korea, specializing in Django REST Framework and React. 
            </p>
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-12"
        >
          {/* About Me */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-4 uppercase">About Me</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Born December 17, 2012. Fluent in Korean, Egyptian Arabic, English, and Uzbek. 
              Conversational in Russian.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-[#0066FF] transition-colors group"
            >
              LEARN MORE
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* My Work */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-4 uppercase">My Work</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-stack applications with Django DRF backends and React frontends. 
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-[#0066FF] transition-colors group"
            >
              BROWSE PORTFOLIO
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Follow Me */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-4 uppercase">Follow Me</h3>
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
        </motion.div>
      </div>
    </section>
  );
}
