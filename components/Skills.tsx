import { useLanguage } from '../contexts/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t('skills.cat1'),
      skills: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Git', level: 85 },
      ],
    },
    {
      category: t('skills.cat2'),
      skills: [
        { name: 'OpenCV', level: 70 },
        { name: 'TensorFlow', level: 65 },
        { name: 'PyTorch', level: 60 },
        { name: 'YOLO', level: 65 },
        { name: 'Image Processing', level: 70 },
      ],
    },
    {
      category: t('skills.cat3'),
      skills: [
        { name: 'SQL', level: 75 },
        { name: 'Data Pipelines', level: 65 },
        { name: 'ROS', level: 60 },
        { name: 'Arduino', level: 70 },
        { name: 'Raspberry Pi', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-gray-900 mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-5 sm:p-6 shadow-md">
              <h3 className="text-gray-900 mb-4 sm:mb-6 pb-3 border-b-2 border-blue-600 text-sm sm:text-base">
                {category.category}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 text-xs sm:text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}