import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white page-transition">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full mb-4 sm:mb-6 text-sm sm:text-base animate-fade-in-down">
              {t('hero.welcome')}
            </div>
            <h1 className="text-gray-900 mb-3 sm:mb-4 animate-fade-in-up animate-delay-100">
              {t('hero.name')}
            </h1>
            <h2 className="text-gray-700 mb-4 sm:mb-6 animate-fade-in-up animate-delay-200">
              {t('hero.title')}
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-xl text-sm sm:text-base animate-fade-in-up animate-delay-300">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up animate-delay-400">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth transform hover:scale-105 text-center"
              >
                {t('hero.cta.contact')}
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-smooth transform hover:scale-105 text-center"
              >
                {t('hero.cta.projects')}
              </a>
            </div>
            <div className="flex gap-3 sm:gap-4 animate-fade-in-up animate-delay-500">
              <a
                href="https://github.com/youngwoo98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-smooth transform hover:scale-110 hover:-translate-y-1"
              >
                <Github size={20} className="text-gray-700 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/youngwoo98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-smooth transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={20} className="text-gray-700 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:ykim.harry@gmail.com"
                className="p-2.5 sm:p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-smooth transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={20} className="text-gray-700 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          <div className="relative order-1 md:order-2 animate-scale-in animate-delay-200">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto transition-smooth hover:shadow-3xl hover:scale-105">
              <img
                src="/profile.jpg"
                alt="Youngwoo Kim"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-2xl -z-10"></div>
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-purple-600 rounded-2xl -z-10"></div>
          </div>
        </div>
        <div className="flex justify-center mt-8 sm:mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDown size={28} className="text-gray-400 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}