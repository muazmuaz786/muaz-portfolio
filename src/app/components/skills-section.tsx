import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import type { PointerEvent as PointerEvt, WheelEvent as WheelEvt } from 'react';
import DjangoLogo from '../../assets/skill-logos/django.svg';
import ReactLogo from '../../assets/skill-logos/react.svg';
import cpp from '../../assets/skill-logos/c++.svg';
import NodeLogo from '../../assets/skill-logos/nodejs.svg';
import FastApiLogo from '../../assets/skill-logos/fastapi.svg';
import GodotLogo from '../../assets/skill-logos/godot.svg';
import TensorFlowLogo from '../../assets/skill-logos/tensorflow.svg';
import PostgresLogo from '../../assets/skill-logos/postgresql.svg';

type Skill = {
  name: string;
  description: string;
  logo: string;
};

const skills: Skill[] = [
  {
    name: 'Django REST',
    logo: DjangoLogo,
    description: 'Production-ready APIs with high-end JWT auth and clean architecture.'
  },
  {
    name: 'React',
    logo: ReactLogo,
    description: 'Responsive UIs with hooks, routing, and polished Tailwind styling.'
  },
    {
    name: 'C++',
    logo: cpp,
    description: 'algorithms, small projects and OOP fundamentals through competitive programming.'
  },
  {
    name: 'Node.js',
    logo: NodeLogo,
    description: 'Lightweight Express services and tooling (not a primary focus).'
  },
  {
    name: 'FastAPI',
    logo: FastApiLogo,  
    description: 'Typed Python microservices and quick prototypes (not a primary focus).'
  },
  {
    name: 'Godot',
    logo: GodotLogo,
    description: 'GDScript basics and exported a playable Windows build.'
  },
  {
    name: 'TensorFlow',
    logo: TensorFlowLogo,
    description: 'Learning neural network fundamentals and small experiments.'
  },
  {
    name: 'PostgreSQL',
    logo: PostgresLogo,
    description: 'Schema design and query tuning for API backends.'
  }
];

export function SkillsSection() {
  const { ref, isInView } = useInView();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPointerDown = useRef(false);
  const pointerStartX = useRef(0);
  const scrollStartX = useRef(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-[#2C3444]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-[#0066FF] text-sm font-bold mb-2 flex items-center gap-2">
              <span className="text-[#0066FF]">/</span> MY SKILLS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">My extensive list of skills</h2>
            <p className="md:hidden text-sm text-gray-400 mt-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                <ChevronRight size={14} />
              </span>
              Swipe to explore the skills carousel
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-[#3d4557] hover:bg-[#4a5163] rounded-full flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-[#0066FF] hover:bg-[#0052CC] rounded-full flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-5 md:pb-6 pr-4 md:pr-0 -mr-4 md:mr-0 snap-x md:snap-none snap-mandatory scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
          }}
          onPointerDown={(event: PointerEvt<HTMLDivElement>) => {
            if (!scrollContainerRef.current) return;
            isPointerDown.current = true;
            pointerStartX.current = event.clientX;
            scrollStartX.current = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.setPointerCapture?.(event.pointerId);
          }}
          onPointerMove={(event: PointerEvt<HTMLDivElement>) => {
            if (!isPointerDown.current || !scrollContainerRef.current) return;
            const deltaX = event.clientX - pointerStartX.current;
            scrollContainerRef.current.scrollLeft = scrollStartX.current - deltaX;
            event.preventDefault();
          }}
          onPointerUp={(event: PointerEvt<HTMLDivElement>) => {
            isPointerDown.current = false;
            scrollContainerRef.current?.releasePointerCapture?.(event.pointerId);
          }}
          onPointerCancel={(event: PointerEvt<HTMLDivElement>) => {
            isPointerDown.current = false;
            scrollContainerRef.current?.releasePointerCapture?.(event.pointerId);
          }}
          onPointerLeave={(event: PointerEvt<HTMLDivElement>) => {
            isPointerDown.current = false;
            scrollContainerRef.current?.releasePointerCapture?.(event.pointerId);
          }}
          onWheel={(event: WheelEvt<HTMLDivElement>) => {
            if (!scrollContainerRef.current) return;
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
              scrollContainerRef.current.scrollLeft += event.deltaY;
              event.preventDefault();
            }
          }}
        >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex-shrink-0 w-72 min-w-[16rem] md:w-80 md:min-w-[20rem] bg-[#3d4557] rounded-2xl p-6 md:p-8 hover:bg-[#4a5163] transition-colors snap-start md:snap-none"
              >
                <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mb-6">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 object-contain drop-shadow-sm"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{skill.name}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{skill.description}</p>
                <div className="w-12 h-1 bg-white" />
              </motion.div>
            ))}
          </div>

          {/* Right fade to hint scroll (mobile only) */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#2C3444] to-transparent md:hidden" />
        </div>
      </motion.div>
    </section>
  );
}
