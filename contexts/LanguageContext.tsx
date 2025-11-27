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
      'hero.title': 'Software Engineer | Creating Impact Through Technology',
      'hero.description':
        'I am passionate about building meaningful and innovative solutions. My interests span robotics, computer vision, data engineering, and software engineering. I enjoy exploring new technologies, experimenting with ideas, and turning concepts into real, working systems.',
      'hero.cta.contact': 'Get in Touch',
      'hero.cta.projects': 'View Projects',
  
      // About
      'about.title': 'About Me',
      'about.heading': 'Building Solutions Through Technology',
      'about.p1':
        'I am a developer who enjoys analyzing problems and implementing them into impactful software. Through my internship at Samsung Electronics and various engineering projects, I have gained practical, hands-on experience in real-world development.',
      'about.p2':
        'My core interests include robotics, computer vision, data engineering, and system development. I am particularly fascinated by projects that interact with real-world data or bridge the digital and physical domains.',
      'about.p3':
        'From web development to machine learning and data pipeline design, I love building systems that work end-to-end. I believe the best way to grow is by creating, experimenting, and constantly challenging myself.',
      'about.resume': 'Download Resume',
      'about.highlight1.title': 'Reliable Code',
      'about.highlight1.desc':
        'I value clear structure, scalability, and maintainability when writing software.',
      'about.highlight2.title': 'Fast Learner',
      'about.highlight2.desc':
        'I quickly adapt to new technologies and apply them effectively in real projects.',
      'about.highlight3.title': 'Collaborative Mindset',
      'about.highlight3.desc':
        'I enjoy solving problems as a team and communicate clearly to achieve shared goals.',
  
      // Skills
      'skills.title': 'Skills & Technologies',
      'skills.subtitle': 'Technical expertise built through real projects and hands-on experience',
      'skills.cat1': 'Software Engineering',
      'skills.cat2': 'AI & Computer Vision',
      'skills.cat3': 'Data Engineering & Robotics',
  
      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'A selection of projects built to solve real problems',
      'projects.code': 'Code',
      'projects.demo': 'Live Demo',
  
      'project1.title': 'Object Detection System',
      'project1.desc':
        'A real-time computer vision system built using YOLO, capable of object detection and tracking through a video processing pipeline.',
  
      'project2.title': 'Data Pipeline Dashboard',
      'project2.desc':
        'An end-to-end data engineering project featuring a Kafka–Flink ETL pipeline, Elasticsearch/PostgreSQL storage, and a visual analytics dashboard.',
  
      'project3.title': 'Robot Control Interface',
      'project3.desc':
        'A web-based interface for robot systems that provides real-time sensor visualization and command execution.',
  
      // Experience
      'experience.title': 'Work Experience',
      'experience.subtitle': 'Professional Experience in Software Development',
      'exp1.company': 'Samsung Electronics',
      'exp1.position': 'Software Engineer',
      'exp1.period': 'Jun 2023 – Aug 2023',
      'exp1.desc':
        'Worked on developing the Service Manager UI and optimizing system performance, contributing to real-world product environments.',
      'exp1.achievement1': 'Developed responsive React-based UI components',
      'exp1.achievement2': 'Improved server–client communication using Node.js and REST APIs',
      'exp1.achievement3': 'Participated in agile development, feature implementation, and code reviews',
      'exp1.achievement4': 'Enhanced workflow automation and improved overall system efficiency',
  
      // Contact
      'contact.title': 'Get In Touch',
      'contact.subtitle':
        'For collaboration, project inquiries, or career opportunities, feel free to contact me anytime.',
      'contact.info': 'Contact Information',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',
      'contact.locationValue': 'Seoul, South Korea',
      'contact.available': 'Open to Opportunities',
      'contact.availableDesc':
        'I am looking for software engineering roles where I can contribute, learn, and help build impactful products.',
      'contact.form.name': 'Name',
      'contact.form.namePlaceholder': 'Enter your name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'your.email@example.com',
      'contact.form.message': 'Message',
      'contact.form.messagePlaceholder': 'Tell me about your project or inquiry...',
      'contact.form.send': 'Send Message',
  
      // Footer
      'footer.copyright':
        '© 2025 Youngwoo Kim. All rights reserved.',
    },
  
    kr: {
      // Header
      'nav.home': '홈',
      'nav.about': '소개',
      'nav.skills': '기술',
      'nav.projects': '프로젝트',
      'nav.experience': '경력',
      'nav.contact': '연락처',
  
      // Hero
      'hero.welcome': '👋 포트폴리오에 오신 것을 환영합니다',
      'hero.name': '안녕하세요, 김영우입니다',
      'hero.title': '소프트웨어 엔지니어 | 기술로 가치를 만드는 사람',
      'hero.description':
        '의미 있는 솔루션을 만드는 데 열정을 가지고 있습니다. 로봇공학, 컴퓨터 비전, 데이터 엔지니어링, 소프트웨어 엔지니어링에 관심이 있으며, 새로운 기술을 탐구하고 아이디어를 실제 제품으로 구현하는 과정을 즐깁니다.',
      'hero.cta.contact': '연락하기',
      'hero.cta.projects': '프로젝트 보기',
  
      // About
      'about.title': '소개',
      'about.heading': '기술을 통해 새로운 경험을 만드는 개발자',
      'about.p1':
        '문제를 분석하고 이를 실용적인 소프트웨어로 구현하는 과정에 큰 즐거움을 느낍니다. 삼성전자 인턴십과 여러 프로젝트를 통해 실무 중심의 개발 역량을 쌓아왔습니다.',
      'about.p2':
        '관심 분야는 로봇, 컴퓨터 비전, 데이터 엔지니어링, 시스템 개발입니다. 특히 실제 데이터를 다루거나 디지털과 물리 세계가 맞닿는 프로젝트에 강한 흥미를 가지고 있습니다.',
      'about.p3':
        '웹 개발, ML 모델 구축, 데이터 파이프라인 설계 등 다양한 기술 스택을 활용하여 끝까지 동작하는 시스템을 만드는 것을 좋아합니다. 만들고 실험하며 배우는 것이 가장 빠른 성장 방법이라고 믿습니다.',
      'about.resume': '이력서 다운로드',
      'about.highlight1.title': '신뢰성 있는 코드',
      'about.highlight1.desc':
        '명확한 구조와 확장성, 유지보수성을 고려한 코드를 작성합니다.',
      'about.highlight2.title': '빠른 학습',
      'about.highlight2.desc':
        '새로운 기술을 빠르게 습득하고 실제 프로젝트에 적용해 성과로 이어갑니다.',
      'about.highlight3.title': '협업 중심 사고',
      'about.highlight3.desc':
        '팀으로 문제를 해결하는 과정을 즐기며 명확한 커뮤니케이션을 중시합니다.',
  
      // Skills
      'skills.title': '기술 & 도구',
      'skills.subtitle': '실무와 프로젝트 경험을 통해 축적한 기술 스택',
      'skills.cat1': '소프트웨어 엔지니어링',
      'skills.cat2': 'AI & 컴퓨터 비전',
      'skills.cat3': '데이터 엔지니어링 & 로봇공학',
  
      // Projects
      'projects.title': '주요 프로젝트',
      'projects.subtitle': '실제 문제 해결을 위한 프로젝트들',
      'projects.code': '코드',
      'projects.demo': '데모',
      'project1.title': '객체 감지 시스템',
      'project1.desc':
        'YOLO를 활용해 영상 스트림 기반의 실시간 객체 감지 및 추적을 구현한 컴퓨터 비전 프로젝트입니다.',
  
      'project2.title': '데이터 파이프라인 대시보드',
      'project2.desc':
        'Kafka–Flink 기반 ETL 파이프라인을 구성하고 Elasticsearch와 PostgreSQL을 활용해 시각화 및 검색 기능을 구현한 엔드투엔드 데이터 엔지니어링 프로젝트입니다.',
  
      'project3.title': '로봇 제어 인터페이스',
      'project3.desc':
        '센서 데이터 실시간 시각화와 명령 제어 기능을 갖춘 웹 기반 로봇 제어 인터페이스입니다.',
  
      // Experience
      'experience.title': '경력',
      'experience.subtitle': '소프트웨어 개발 경험',
      'exp1.company': '삼성전자',
      'exp1.position': '소프트웨어 엔지니어',
      'exp1.period': '2023년 6월 – 2023년 8월',
      'exp1.desc':
        'Service Manager UI 개발 및 시스템 성능 최적화를 담당하며 실제 제품 환경에서 동작하는 소프트웨어를 설계·구현했습니다.',
      'exp1.achievement1': 'React 기반 반응형 UI 컴포넌트 개발',
      'exp1.achievement2': 'Node.js REST API 기반 서버–클라이언트 통신 구조 개선',
      'exp1.achievement3': '애자일 기반 기능 개발 및 코드 리뷰 참여',
      'exp1.achievement4': '업무 프로세스 자동화 및 운영 효율 개선',
  
      // Contact
      'contact.title': '연락하기',
      'contact.subtitle':
        '협업 제안, 프로젝트 문의, 채용 관련 질문 모두 환영합니다.',
      'contact.info': '연락처 정보',
      'contact.email': '이메일',
      'contact.phone': '전화',
      'contact.location': '위치',
      'contact.locationValue': '서울, 대한민국',
      'contact.available': '구직 중',
      'contact.availableDesc':
        '기술을 통해 실질적인 가치를 만들고 성장할 수 있는 소프트웨어 엔지니어 포지션을 찾고 있습니다.',
      'contact.form.name': '이름',
      'contact.form.namePlaceholder': '이름을 입력하세요',
      'contact.form.email': '이메일',
      'contact.form.emailPlaceholder': 'your.email@example.com',
      'contact.form.message': '메시지',
      'contact.form.messagePlaceholder': '문의 또는 프로젝트 내용을 작성해주세요...',
      'contact.form.send': '메시지 보내기',
  
      // Footer
      'footer.copyright':
        '© 2025 김영우. All rights reserved.',
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
