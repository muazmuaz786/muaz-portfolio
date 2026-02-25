import { motion } from 'motion/react';
import { useInView } from '../hooks/use-in-view';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    date: 'FEBRUARY 22, 2024',
    category: 'NEWS',
    title: "STEM Olimpiadasidagi g'alabalarimiz — O'zbekiston 3-o'rinda",
    link: 'https://www.instagram.com/p/C3o8ygFouaX/?img_index=2'
  },
  {
    id: 2,
    date: 'JANUARY 6, 2025',
    category: 'NEWS',
    title: 'Introducing standout 6th grader Tillayev Muaz at Al-Beruniy International School',
    link: 'https://www.instagram.com/reel/DEeo0ypqrxL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  }
];

export function BlogSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="blog" className="py-20 px-6 bg-[#2C3444]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#0066FF] text-sm font-bold mb-2 flex items-center gap-2">
              <span className="text-[#0066FF]">/</span> NEWS & ARTICLES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Check out my latest
              <br />
              articles and news
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium border-b-2 border-white pb-1 hover:border-[#0066FF] hover:text-[#0066FF] transition-all group"
            >
              Browse all articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-b border-white/10 pb-8 last:border-0"
              >
                <div className="flex gap-4 text-xs text-gray-400 font-semibold mb-3">
                  <span>{article.date}</span>
                  <span>/</span>
                  <span className="text-[#0066FF]">{article.category}</span>
                </div>
                <h3
                  className="text-2xl font-bold hover:text-[#0066FF] transition-colors cursor-pointer"
                  onClick={() => window.open(article.link, '_blank')}
                >
                  {article.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
