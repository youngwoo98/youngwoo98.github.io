import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project1.title'),
      description: t('project1.desc'),
      image: '/sobi.png',
      tags: ['Raspberry Pi', 'MQTT', 'Node.js', 'AWS', 'IoT'],
      github: 'https://github.com/youngwoo98/smart-online-basket-interface',
      live: '',
    },
    {
      title: t('project2.title'),
      description: t('project2.desc'),
      image: '/realtime.png',
      tags: ['Kafka', 'Flink', 'PostgreSQL', 'Elasticsearch', 'Django', 'Vue.js', 'RAG'],
      github: '',
      live: '',
    },
    {
      title: t('project3.title'),
      description: t('project3.desc'),
      image: 'data:image/png;base64,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',
      tags: ['Computer Vision', 'LSTM', 'TensorFlow', 'OpenCV', 'Real-time Processing'],
      github: 'https://github.com/youngwoo98/SLDVT',
      live: '',
    },
    {
      title: t('project4.title'),
      description: t('project4.desc'),
      image: '/quokka.png',
      tags: ['DevOps', 'CI/CD', 'Docker', 'Cloud', 'API Security'],
      github: '',
      live: '',
    },
    {
      title: t('project5.title'),
      description: t('project5.desc'),
      image: '/morai.png',
      tags: ['ROS2', 'MORAI SIM', 'Autonomous Driving', 'Python', 'Simulation'],
      github: '',
      live: '',
    },
    {
      title: t('project6.title'),
      description: t('project6.desc'),
      image: '/visioninapp.png',
      tags: ['Computer Vision', 'Dataset Management', 'Annotation Tools', 'Model Training'],
      github: '',
      live: '',
    },
  ];
  

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-gray-900 mb-4">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-gray-900 mb-2 text-sm sm:text-base">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-smooth transform hover:scale-105 text-xs sm:text-sm"
                    >
                      <Github size={18} />
                      {t('projects.code')}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-smooth transform hover:scale-105 text-xs sm:text-sm"
                    >
                      <ExternalLink size={18} />
                      {t('projects.demo')}
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-gray-400 text-xs sm:text-sm italic">
                      Links coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}