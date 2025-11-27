import { Code2, Rocket, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-gray-900 mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY0MTkzMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tech abstract"
              className="rounded-2xl shadow-lg w-full"
            />
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
              href="/resume.pdf"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              {t('about.resume')}
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-5 sm:p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 sm:p-4 bg-blue-100 rounded-full mb-3 sm:mb-4">
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