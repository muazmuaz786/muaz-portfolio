import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 px-6 bg-[#252B37]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#0066FF] text-sm font-bold mb-2 flex items-center gap-2">
            <span className="text-[#0066FF]">/</span> ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I've been developing<br />websites since 2024
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            Born in Korea to Egyptian-Uzbek parents, I started coding at a young age. 
            Now I work as a fullstack developer specializing in Django REST Framework with 
            high-end JWT authentication paired with modern React frontends.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-medium border-b-2 border-white pb-1 hover:border-[#0066FF] hover:text-[#0066FF] transition-all group"
          >
            More about me
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold">2+</span>
              <div className="text-left">
                <p className="text-lg font-semibold">Years of</p>
                <p className="text-lg font-semibold">experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold">8+</span>
              <div className="text-left">
                <p className="text-lg font-semibold">Successful</p>
                <p className="text-lg font-semibold">projects</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-gray-400 max-w-3xl leading-relaxed">
          <p>
            I have expertise in high-end Django REST Framework, React, 
            and have working knowledge of Node.js and FastAPI for database interactions and basic API development(not a primary focus ). 
            I've also developed games using Godot Engine and am currently studying Neural Networks and deep learning. 
            I'm fluent in Korean, Egyptian Arabic, English, and Uzbek, with conversational Russian.
          </p>
        </div>
    
      </motion.div>
    </section>
  );
}
