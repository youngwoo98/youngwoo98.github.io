import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project1.title'),
      description: t('project1.desc'),
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY0MTg0NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'OpenCV', 'YOLO', 'TensorFlow'],
      github: '', // Add your GitHub repo link here
      live: '',   // Add your live demo link here (leave empty if no demo)
    },
    {
      title: t('project2.title'),
      description: t('project2.desc'),
      image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQyMDE4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'React'],
      github: '',
      live: '',
    },
    {
      title: t('project3.title'),
      description: t('project3.desc'),
      image: 'https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY0MTkzMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'ROS', 'WebSocket', 'Python'],
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