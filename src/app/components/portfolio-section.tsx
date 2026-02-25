import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import FirstGameIcon from '../../assets/portfolio/first-game-icon.png';
import samar from '../../assets/portfolio/samar.png';

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  large?: boolean;
  status?: 'Coming soon';
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    id: 0,
    title: "Teaching C++ to Beginners",
    subtitle: 'Git repo with C++ tutorials(files 1-30) for newcomers to programming.',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=900&auto=format&fit=crop',
    tags: ['C++', 'Tutorials'],
    links : [
      {
        label: 'GitHub repo',
        href: 'https://github.com/muazmuaz786/cpp-lessons'
      }
    ]
  },
  {
    id: 1,
    title: 'First Game (Godot)',
    subtitle: 'Windows build of my first Godot platformer with custom sprites.',
    image: FirstGameIcon,
    tags: ['Godot', 'Game Dev'],
    links: [
      {
        label: 'Download .exe',
        href: `${import.meta.env.BASE_URL}downloads/first-game.exe`
      }
    ]
  },
  {
    id: 2,
    title: "Portfolio Website Built for a Client",
    subtitle: 'Personal portfolio website developed for a client upon request.',
    image: samar,
    tags: ['React', 'Tailwind'],
    links: [
      {
        label: 'Live site',
        href: 'https://muazmuaz786.github.io/samar-s-portfolio/'
      },
      {
        label: 'GitHub repo',
        href: 'https://github.com/muazmuaz786/samar-s-portfolio'
      }
    ]
  },
  {
    id: 3,
    title: 'Q&A Backend',
    subtitle: 'Django REST API powering a Q&A platform.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop',
    links: [
      {
        label: 'GitHub repo',
        href: 'https://github.com/muazmuaz786/CodeAsk/'
      }
    ],
    tags: ['Django REST', 'API'],
  },
  {
    id: 4,
    title: 'Slotify (Booking system Backend)',
    subtitle: 'Backend for a booking system built with Django.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop',
    links: [
      {
        label: 'GitHub repo',
        href: 'https://github.com/muazmuaz786/Slotify'
      }
    ],
    tags: ['Django', 'Backend'],
  }
];

export function PortfolioSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="portfolio" className="py-20 px-6 bg-[#252B37]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-[#0066FF] text-sm font-bold mb-2 flex items-center gap-2">
              <span className="text-[#0066FF]">/</span> MY PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Take a look at the latest<br />projects I've done
            </h2>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative bg-[#3d4557] rounded-2xl overflow-hidden hover:bg-[#4a5163] transition-all cursor-pointer ${
                project.large ? 'md:row-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d4557] to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-[#505973] rounded-full text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.status ? (
                    <span className="px-4 py-1.5 bg-[#0066FF] rounded-full text-xs font-bold text-white">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 bg-white/30 rounded-sm" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white text-sm">{project.subtitle}</p>
                  </div>
                </div>

                {project.links?.length ? (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {project.links.map((link) => (
                      <a
                        key={`${project.id}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 text-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      >
                        <LinkIcon size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
