import { useEffect, useState } from 'react';
import { Code2, Rocket, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const projectImages = [
    { src: '/sobi.png', label: 'Smart Online Basket Interface' },
    { src: '/visioninapp.png', label: 'VisionInApp - Custom Vision Platform' },
    { src: '/realtime.png', label: 'Real-time Pipeline Dashboard' },
    { src: '/asl.png', label: 'Mhia AI - Motion-to-Speech System' },
    { src: '/quokka.png', label: 'Quokka – Community Group-Buying Platform' },
    { src: '/morai.png', label: 'MORAI Autonomous Simulation' },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projectImages.length]);

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlight1.title'),
      description: t('about.highlight1.desc'),
    },
    {
      icon: Rocket,
      title: t('about.highlight2.title'),
      description: t('about.highlight2.desc'),
    },
    {
      icon: Users,
      title: t('about.highlight3.title'),
      description: t('about.highlight3.desc'),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-gray-900 mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto transition-all duration-700 delay-100"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[4/3] bg-gray-100">
            {projectImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.label}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
                loading={index === currentImage ? 'eager' : 'lazy'}
              />
            ))}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between flex-wrap gap-2 bg-black/50 text-white rounded-xl px-4 py-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/80">
                  {t('projects.title')}
                </p>
                <p className="text-sm font-semibold">{projectImages[currentImage].label}</p>
              </div>
              <div className="flex items-center gap-1">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      idx === currentImage ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                    aria-label={`Show project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 mb-3 sm:mb-4">{t('about.heading')}</h3>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              {t('about.p2')}
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('about.p3')}
            </p>
            <a
              href="https://github.com/youngwoo98/youngwoo98.github.io/raw/main/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth transform hover:scale-105 text-sm sm:text-base"
            >
              {t('about.resume')}
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`text-center p-5 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-500 hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="inline-flex p-3 sm:p-4 bg-blue-100 rounded-full mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <item.icon size={28} className="text-blue-600 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-gray-900 mb-2 text-sm sm:text-base">{item.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}