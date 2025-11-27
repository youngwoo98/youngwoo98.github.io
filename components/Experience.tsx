import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t('exp1.company'),
      position: t('exp1.position'),
      period: t('exp1.period'),
      description: t('exp1.desc'),
      achievements: [
        t('exp1.achievement1'),
        t('exp1.achievement2'),
        t('exp1.achievement3'),
        t('exp1.achievement4'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-gray-900 mb-4">{t('experience.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] sm:left-[15px] top-[40px] bottom-0 w-0.5 bg-blue-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase size={14} className="text-white sm:w-4 sm:h-4" />
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h3 className="text-gray-900 text-sm sm:text-base">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <h4 className="text-blue-600 mb-3 text-xs sm:text-sm">{exp.company}</h4>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
                      <span className="text-blue-600 mt-0.5 sm:mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}