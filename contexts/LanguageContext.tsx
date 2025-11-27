import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': '👋 Welcome to my portfolio',
    'hero.name': "Hi, I'm Youngwoo Kim",
    'hero.title': 'Software Engineer | Building Fun Stuff',
    'hero.description': "Passionate about building fun and innovative projects! Interested in Robotics, Computer Vision, Data Engineering, and Software Engineering. Always excited to learn new technologies and create solutions that make an impact.",
    'hero.cta.contact': 'Get in Touch',
    'hero.cta.projects': 'View Projects',
    
    // About
    'about.title': 'About Me',
    'about.heading': 'Building Fun Things & Exploring New Technologies',
    'about.p1': "As a recent graduate with a passion for creating innovative solutions, I love building fun projects that combine creativity with technical skills. My internship experience has given me a solid foundation in real-world software development.",
    'about.p2': "My core interests span across Robotics, Computer Vision, Data Engineering, and Software Engineering. I'm fascinated by how these fields intersect and enjoy exploring projects that bring them together.",
    'about.p3': "Whether it's building a web application, training a computer vision model, or working on robotics projects, I'm always excited to learn new technologies and tackle challenging problems. I believe the best way to learn is by building and experimenting!",
    'about.resume': 'Download Resume',
    'about.highlight1.title': 'Clean Code',
    'about.highlight1.desc': 'Writing maintainable, scalable, and well-documented code is my priority.',
    'about.highlight2.title': 'Fast Learner',
    'about.highlight2.desc': 'Quick to adapt to new technologies and frameworks to deliver cutting-edge solutions.',
    'about.highlight3.title': 'Team Player',
    'about.highlight3.desc': 'Collaborative mindset with strong communication skills and agile experience.',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'A comprehensive toolkit built through years of hands-on experience and continuous learning',
    'skills.cat1': 'Software Engineering',
    'skills.cat2': 'AI & Computer Vision',
    'skills.cat3': 'Data & Robotics',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Personal and academic projects that demonstrate my skills and passion for development',
    'projects.code': 'Code',
    'projects.demo': 'Live Demo',
    'project1.title': 'Object Detection System',
    'project1.desc': 'Computer vision project using YOLO for real-time object detection and tracking with video stream processing.',
    'project2.title': 'Data Pipeline Dashboard',
    'project2.desc': 'End-to-end data engineering project with ETL pipeline, data visualization dashboard, and automated reporting.',
    'project3.title': 'Robot Control Interface',
    'project3.desc': 'Web-based control interface for robotic systems with real-time sensor data visualization and command execution.',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.subtitle': 'My experience in software development',
    'exp1.company': 'Tech Company',
    'exp1.position': 'Software Engineering Intern',
    'exp1.period': 'Summer 2024',
    'exp1.desc': 'Contributed to the development of web applications and gained hands-on experience with modern development practices.',
    'exp1.achievement1': 'Developed responsive UI components using React and TypeScript',
    'exp1.achievement2': 'Collaborated with senior engineers on feature implementation',
    'exp1.achievement3': 'Participated in code reviews and agile development ceremonies',
    'exp1.achievement4': 'Fixed bugs and improved application performance',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a project in mind or want to collaborate? Feel free to reach out!',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationValue': 'San Francisco, CA',
    'contact.available': 'Actively Seeking Opportunities',
    'contact.availableDesc': "I'm currently looking for full-time software engineering positions where I can contribute, learn, and grow as a developer. Let's connect!",
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell me about your project...',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.copyright': '© 2025 Youngwoo Kim. All rights reserved.',
  },
  kr: {
    // Header
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.skills': '기술',
    'nav.projects': '프로젝트',
    'nav.experience': '경험',
    'nav.contact': '연락처',
    
    // Hero
    'hero.welcome': '👋 포트폴리오에 오신 것을 환영합니다',
    'hero.name': '안녕하세요, 김영우입니다',
    'hero.title': '소프트웨어 엔지니어 | 재미있는 것들을 만듭니다',
    'hero.description': '재미있고 혁신적인 프로젝트를 만드는 것에 열정을 가지고 있습니다! 로봇공학, 컴퓨터 비전, 데이터 엔지니어링, 소프트웨어 엔지니어링에 관심이 있습니다. 항상 새로운 기술을 배우고 영향력 있는 솔루션을 만드는 것에 흥미를 느낍니다.',
    'hero.cta.contact': '연락하기',
    'hero.cta.projects': '프로젝트 보기',
    
    // About
    'about.title': '소개',
    'about.heading': '재미있는 것들을 만들고 새로운 기술을 탐구합니다',
    'about.p1': '혁신적인 솔루션을 만드는 것에 열정을 가진 최근 졸업생으로서, 창의성과 기술력을 결합한 재미있는 프로젝트를 만드는 것을 좋아합니다. 인턴십 경험을 통해 실제 소프트웨어 개발의 탄탄한 기초를 쌓았습니다.',
    'about.p2': '제 핵심 관심사는 로봇공학, 컴퓨터 비전, 데이터 엔지니어링, 소프트웨어 엔지니어링에 걸쳐 있습니다. 이러한 분야들이 어떻게 교차하는지에 매료되어 있으며 이들을 결합하는 프로젝트를 탐구하는 것을 즐깁니다.',
    'about.p3': '웹 애플리케이션을 만들거나, 컴퓨터 비전 모델을 훈련시키거나, 로봇공학 프로젝트를 진행하는 것 모두 항상 새로운 기술을 배우고 도전적인 문제를 해결하는 것에 흥미를 느낍니다. 배우는 가장 좋은 방법은 만들고 실험하는 것이라고 믿습니다!',
    'about.resume': '이력서 다운로드',
    'about.highlight1.title': '깔끔한 코드',
    'about.highlight1.desc': '유지보수 가능하고, 확장 가능하며, 잘 문서화된 코드를 작성하는 것이 우선입니다.',
    'about.highlight2.title': '빠른 학습',
    'about.highlight2.desc': '새로운 기술과 프레임워크에 빠르게 적응하여 최첨단 솔루션을 제공합니다.',
    'about.highlight3.title': '팀 플레이어',
    'about.highlight3.desc': '강력한 커뮤니케이션 능력과 애자일 경험을 갖춘 협업 마인드를 가지고 있습니다.',
    
    // Skills
    'skills.title': '기술 & 도구',
    'skills.subtitle': '지속적인 학습과 실전 경험을 통해 구축한 종합적인 도구',
    'skills.cat1': '소프트웨어 엔지니어링',
    'skills.cat2': 'AI & 컴퓨터 비전',
    'skills.cat3': '데이터 & 로봇공학',
    
    // Projects
    'projects.title': '주요 프로젝트',
    'projects.subtitle': '제 기술과 개발에 대한 열정을 보여주는 개인 및 학술 프로젝트',
    'projects.code': '코드',
    'projects.demo': '라이브 데모',
    'project1.title': '객체 감지 시스템',
    'project1.desc': '비디오 스트림 처리를 통한 실시간 객체 감지 및 추적을 위한 YOLO를 사용한 컴퓨터 비전 프로젝트.',
    'project2.title': '데이터 파이프라인 대시보드',
    'project2.desc': 'ETL 파이프라인, 데이터 시각화 대시보드 및 자동화된 보고서가 포함된 엔드투엔드 데이터 엔지니어링 프로젝트.',
    'project3.title': '로봇 제어 인터페이스',
    'project3.desc': '실시간 센서 데이터 시각화 및 명령 실행이 가능한 로봇 시스템용 웹 기반 제어 인터페이스.',
    
    // Experience
    'experience.title': '경험',
    'experience.subtitle': '소프트웨어 개발 경험',
    'exp1.company': '테크 컴퍼니',
    'exp1.position': '소프트웨어 엔지니어링 인턴',
    'exp1.period': '2024년 여름',
    'exp1.desc': '웹 애플리케이션 개발에 기여하고 현대적인 개발 실무에 대한 실무 경험을 쌓았습니다.',
    'exp1.achievement1': 'React와 TypeScript를 사용하여 반응형 UI 컴포넌트 개발',
    'exp1.achievement2': '선임 엔지니어와 기능 구현 협업',
    'exp1.achievement3': '코드 리뷰 및 애자일 개발 의식에 참여',
    'exp1.achievement4': '버그 수정 및 애플리케이션 성능 개선',
    
    // Contact
    'contact.title': '연락하기',
    'contact.subtitle': '프로젝트 아이디어가 있거나 협업하고 싶으신가요? 편하게 연락주세요!',
    'contact.info': '연락처 정보',
    'contact.email': '이메일',
    'contact.phone': '전화',
    'contact.location': '위치',
    'contact.locationValue': '샌프란시스코, CA',
    'contact.available': '적극 구직 중',
    'contact.availableDesc': '현재 기여하고, 배우고, 개발자로서 성장할 수 있는 풀타임 소프트웨어 엔지니어링 포지션을 찾고 있습니다. 연락주세요!',
    'contact.form.name': '이름',
    'contact.form.namePlaceholder': '이름을 입력하세요',
    'contact.form.email': '이메일',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.message': '메시지',
    'contact.form.messagePlaceholder': '프로젝트에 대해 말씀해주세요...',
    'contact.form.send': '메시지 보내기',
    
    // Footer
    'footer.copyright': '© 2025 김영우. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
