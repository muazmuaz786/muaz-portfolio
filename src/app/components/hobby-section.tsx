import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import { Bike } from 'lucide-react';

import BikeImage from "../../../public/Bike1.jpg";
import bd1 from "../../../public/bd1.jpg";
import bd2 from "../../../public/bd2.jpg";
import bd3 from "../../../public/bd3.jpg";

import strava from "../../assets/skill-logos/strava.svg";

const cyclingImages = [
  {
    id: 1,
    url: BikeImage,
    alt: 'Cyclist riding'
  },
  {
    id: 2,
    url: bd1,
    alt: 'Bike details'
  },
  {
    id: 3,
    url: bd2,
    alt: 'Bike details'
  },
  {
    id: 4,
    url: bd3,
    alt: 'Bike details'
  }
];

export function HobbiesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="hobbies" className="py-20 px-6 bg-[#2C3444]">
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
            <span className="text-[#0066FF]">/</span> HOBBIES & INTERESTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            When I'm not coding,<br />
            you'll find me on two wheels
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0">
                <Bike size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Cycling Enthusiast</h3>
                <p className="text-gray-400 leading-relaxed">
                  Passionate about road cycling and pushing my limits on long distance rides.
                </p>
              </div>
            </div>

            <div className="bg-[#3d4557] rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">My Bike</h4>
                <a
                  href="https://www.strava.com/athletes/mtillaev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View my Strava profile"
                  className="w-12 h-12 rounded-full bg-[#FC4C02] text-white flex items-center justify-center shadow-lg shadow-[#FC4C02]/40 hover:scale-105 transition-transform border border-white/10"
                >
                  <img src={strava} alt="Strava logo" className="w-6 h-6" />
                </a>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-400">Model</span>
                  <span className="font-semibold">Felt AR FRD</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-400">Year</span>
                  <span className="font-semibold">2019</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-400">Type</span>
                  <span className="font-semibold">Aero Road Bike</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Frame</span>
                  <span className="font-semibold">Full Carbon</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-[#0066FF] mb-2">120+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">KM per week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#0066FF] mb-2">29+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Avg Speed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#0066FF] mb-2">250+</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Rides</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer">
              <img
                src={cyclingImages[0].url}
                alt={cyclingImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3444] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-semibold">
                  Felt AR FRD on Chimyon Pass, Uzbkistan. 1700m altitude.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {cyclingImages.slice(1).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="relative rounded-xl overflow-hidden aspect-video group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0066FF]/0 group-hover:bg-[#0066FF]/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-12 h-1 bg-[#0066FF] mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-300 italic">
              "Life is like riding a bicycle. To keep your balance, you must keep moving."
            </blockquote>
            <p className="text-gray-400 mt-4">— Albert Einstein</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
