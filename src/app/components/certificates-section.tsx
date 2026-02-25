import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import sql1 from '../../assets/certificates/cer1.png';
import sql2 from '../../assets/certificates/cer2.png';
import AI from '../../assets/certificates/cer3.png';

import cer1 from '../../assets/certificates/cer4.jpg';
import cer2 from '../../assets/certificates/cer5.jpg';
import cer3 from '../../assets/certificates/cer6.jpg';
import cer4 from '../../assets/certificates/cer7.jpg';
import cer5 from '../../assets/certificates/cer8.jpg';
import cer6 from '../../assets/certificates/cer9.jpg';
import cer7 from '../../assets/certificates/cer10.jpg';
import cer8 from '../../assets/certificates/cer11.jpg';
import cer9 from '../../assets/certificates/cer12.jpg';
import cer10 from '../../assets/certificates/cer13.jpg';
import cer11 from '../../assets/certificates/cer14.jpg';
import cer12 from '../../assets/certificates/cer15.jpg';
import cer13 from '../../assets/certificates/cer16.jpg';
import cer14 from '../../assets/certificates/cer17.jpg';


const certificates = [
  {
    id: 1,
    title: 'PostgreSQL Track 1',
    image: sql1
  },
  {
    id: 2,
    title: 'PostgreSQL Track 2',
    image: sql2
  },
  {
    id: 3,
    title: 'Deep Learning & Neural Networks',
    image: AI
  },
  {
    id: 4,
    title: 'IT programming',
    image: cer1
  },
  {
    id: 5,
    title: 'English',
    image: cer2
  },
  {
    id: 6,
    title: 'Academic Excellence',
    image: cer3
  },
  {
    id: 7,
    title: 'IT education',
    image: cer4
  },
  {
    id: 8,
    title: 'second place in robotics competition',
    image: cer5
  },
  {
    id: 9,
    title: 'Arabic',
    image: cer6
  },
  {
    id: 10,
    title: 'second place in programming competition',
    image: cer7
  },
  {
    id: 11,
    title: 'Excellence in IT',
    image: cer8
  },
  {
    id: 12,
    title: 'Math Excellence',
    image: cer9
  },
  {
    id: 13,
    title: 'Excellence in self-studying IT',
    image: cer10
  },
  {
    id: 14,
    title: 'Silver medal in brainics Math Olympiad',
    image: cer11
  },
  {
    id: 15,
    title: 'Participation in Neo Science Olympiad',
    image: cer12
  },
  {
    id: 16,
    title: 'Bronze medal in Neo Science Olympiad',
    image: cer13
  },
  {
    id: 17,
    title: 'Participation in Stem Olympiad',
    image: cer14
  }
];

export function CertificatesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="certificates" className="py-20 px-6 bg-[#2C3444]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="space-y-6">
          <p className="text-[#0066FF] text-sm font-bold flex items-center gap-2">
            <span className="text-[#0066FF]">/</span> CERTIFICATES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Look at my
            <br />
            lots of certificates
          </h2>

          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="overflow-hidden rounded-2xl border border-white/5 bg-[#3d4557]"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
