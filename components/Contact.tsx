import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for reaching out! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-gray-900 mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">{t('contact.info')}</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-blue-100 rounded-lg flex-shrink-0">
                  <Mail size={20} className="text-blue-600 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-gray-900 mb-1 text-xs sm:text-sm">{t('contact.email')}</h4>
                  <a href="mailto:youngwoo@example.com" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm break-all">
                    youngwoo.kim@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-blue-100 rounded-lg flex-shrink-0">
                  <Phone size={20} className="text-blue-600 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1 text-xs sm:text-sm">{t('contact.phone')}</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-blue-100 rounded-lg flex-shrink-0">
                  <MapPin size={20} className="text-blue-600 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1 text-xs sm:text-sm">{t('contact.location')}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{t('contact.locationValue')}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-xl">
              <h4 className="text-gray-900 mb-2 text-sm sm:text-base">{t('contact.available')}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t('contact.availableDesc')}
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 text-xs sm:text-sm">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 text-xs sm:text-sm">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-xs sm:text-sm">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none text-sm"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}