export type Lang = 'en' | 'ru';
export type ProjectType = 'unity' | 'web' | 'application';
export type ProjectOrigin = 'professional' | 'test' | 'ai-assisted';
export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  origin: ProjectOrigin;
  year: string;
  stack: string[];
  en: string;
  ru: string;
  descEn: string;
  descRu: string;
  url?: string;
  icon?: string;
  client?: string;
  roleEn?: string;
  roleRu?: string;
  highlightsEn?: string[];
  highlightsRu?: string[];
  sites?: { name: string; description: string; url: string }[];
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: 'commercial-unity-development', title: 'Commercial Unity Development', type: 'unity', origin: 'professional', year: '2022 — 2026',
    stack: ['C#', 'Unity', 'REST API', 'Firebase', 'AppsFlyer', 'OneSignal', 'WebView'],
    en: 'Commercial mobile games, applications and reusable systems developed for iOS and Android.',
    ru: 'Коммерческие мобильные игры, приложения и переиспользуемые системы для iOS и Android.',
    descEn: 'Across Nagai Industries and Marlerino Group, I contributed to 190+ commercial projects. My work covered gameplay and application logic, UI, reusable modules, third-party SDK integrations, debugging, refactoring, testing and release preparation. Individual client projects are not shown because of confidentiality.',
    descRu: 'В Nagai Industries и Marlerino Group я участвовала в разработке более 190 коммерческих проектов. Работала над игровой и прикладной логикой, UI, переиспользуемыми модулями, интеграциями сторонних SDK, отладкой, рефакторингом, тестированием и подготовкой релизов. Отдельные клиентские проекты не представлены из-за конфиденциальности.',
    roleEn: 'Unity Developer · commercial development', roleRu: 'Unity Developer · коммерческая разработка',
    highlightsEn: ['Implemented gameplay and application features', 'Built and maintained reusable UI and logic modules', 'Integrated REST services and third-party SDKs', 'Debugged, refactored and tested existing code'],
    highlightsRu: ['Реализовывала игровые и прикладные функции', 'Создавала и поддерживала переиспользуемые UI- и логические модули', 'Интегрировала REST-сервисы и сторонние SDK', 'Отлаживала, рефакторила и тестировала существующий код']
  },
  {
    slug: 'clicker-test-task', title: 'Unity Test Task', type: 'unity', origin: 'test', year: '2026',
    screenshots: Array.from({ length: 4 }, (_, i) => `/projects/screenshots/clicker-test-task/${String(i + 1).padStart(2, '0')}.webp`),
    stack: ['Unity 6', 'C#', 'MVP', 'Extenject', 'UniTask', 'DOTween', 'UnityWebRequest', 'REST API'],
    en: 'A mobile-oriented Unity app combining a clicker game, weather forecast and dog breed browser.',
    ru: 'Мобильное Unity-приложение, объединяющее кликер, прогноз погоды и каталог пород собак.',
    descEn: 'A Unity developer test assignment built with Unity 6 and C#. The app brings together three independent modules: a clicker with currency and energy management, a weather forecast powered by the National Weather Service API, and a dog breed browser using Dog API v2. The project demonstrates MVP, dependency injection, asynchronous operations, request queuing and cancellation.',
    descRu: 'Тестовое задание на позицию Unity-разработчика, выполненное на Unity 6 и C#. Приложение объединяет три независимых модуля: кликер с системой валюты и энергии, прогноз погоды на основе National Weather Service API и каталог пород собак с Dog API v2. Проект демонстрирует применение MVP, внедрение зависимостей, асинхронные операции, очередь запросов и их отмену.',
    url: 'https://github.com/AlexandraDobryakova/ClickerTestTask',
    roleEn: 'Individual test assignment · Unity development', roleRu: 'Индивидуальное тестовое задание · Unity-разработка',
    highlightsEn: ['MVP separation into Model, View and Presenter', 'Extenject dependency injection and installer-based composition', 'Shared sequential RequestQueue with cancellation', 'UniTask and UnityWebRequest for asynchronous API communication', 'Clicker gameplay, weather data and dog breed details'],
    highlightsRu: ['Разделение Model, View и Presenter по паттерну MVP', 'Внедрение зависимостей через Extenject и Installer', 'Общая последовательная RequestQueue с отменой запросов', 'UniTask и UnityWebRequest для асинхронной работы с API', 'Игровая логика кликера, погода и подробная информация о породах собак']
  },
  {
    slug: 'habit-tracker', title: 'HabitTracker', type: 'application', origin: 'ai-assisted', year: '2026', icon: '/projects/habit-tracker.webp',
    screenshots: Array.from({ length: 8 }, (_, i) => `/projects/screenshots/habit-tracker/${String(i + 1).padStart(2, '0')}.webp`),
    stack: ['Swift', 'SwiftUI', 'Swift Charts', 'UserNotifications', 'JSON'],
    en: 'A personal habit and routine tracker with goals, streaks, calendar and focus tools.',
    ru: 'Трекер привычек и повседневных рутин с целями, сериями, календарём и инструментами фокуса.',
    descEn: 'A native iOS app concept with habit tracking, streaks, calendar, tasks, Pomodoro, reading, body measurements, yoga and counters. Data is stored locally in JSON. The interface includes eight themes. Developed through a Claude-assisted workflow; my contribution included product direction, requirements, UX decisions, code review, testing and iteration.',
    descRu: 'Нативное iOS-приложение с отслеживанием привычек, сериями, календарём, задачами, Pomodoro, чтением, измерениями тела, йогой и счётчиками. Данные хранятся локально в JSON. В интерфейсе предусмотрено восемь тем. Разработка велась с помощью Claude: я отвечала за направление продукта, требования, UX-решения, проверку кода, тестирование и доработки.',
    roleEn: 'Product direction, UX, AI-assisted implementation review and QA', roleRu: 'Продуктовое направление, UX, проверка AI-assisted реализации и QA',
    highlightsEn: ['Habit tracking, streaks and calendar', 'Tasks, Pomodoro, reading and activity tools', 'Local JSON persistence and eight themes'],
    highlightsRu: ['Привычки, серии и календарь', 'Задачи, Pomodoro, чтение и инструменты активности', 'Локальное хранение JSON и восемь тем']
  },
  {
    slug: 'sortpics', title: 'SortPics', type: 'application', origin: 'ai-assisted', year: '2026', icon: '/projects/sortpics.webp',
    screenshots: Array.from({ length: 4 }, (_, i) => `/projects/screenshots/sortpics/${String(i + 1).padStart(2, '0')}.webp`),
    stack: ['Swift', 'SwiftUI', 'PhotoKit', 'Vision', 'AVFoundation'],
    en: 'A photo and video library cleaner with swipe-based sorting and similar-image detection.',
    ru: 'Приложение для сортировки фото и видео с управлением свайпами и поиском похожих изображений.',
    descEn: 'An iOS media-organising app for reviewing photos and videos, keeping or deleting items, moving files into albums, detecting similar images, saving review progress and showing statistics. Built with Claude assistance; my role covered requirements, product decisions, interface review, testing and refinement.',
    descRu: 'iOS-приложение для организации медиатеки: просмотр фото и видео, сохранение или удаление файлов, перенос в альбомы, поиск похожих изображений, сохранение прогресса сортировки и статистика. Использовался Claude; мой вклад — требования, продуктовые решения, проверка интерфейса, тестирование и улучшение результата.',
    roleEn: 'Product direction, UX, AI-assisted implementation review and QA', roleRu: 'Продуктовое направление, UX, проверка AI-assisted реализации и QA',
    highlightsEn: ['Swipe-based keep / delete / move workflow', 'PhotoKit and Vision integrations', 'Saved progress and library statistics'],
    highlightsRu: ['Свайпы для сохранения, удаления и переноса', 'Интеграция PhotoKit и Vision', 'Сохранение прогресса и статистика медиатеки']
  },
  {
    slug: 'kopeika', title: 'Копейка', type: 'application', origin: 'ai-assisted', year: '2026', icon: '/projects/kopeika.webp',
    screenshots: Array.from({ length: 5 }, (_, i) => `/projects/screenshots/kopeika/${String(i + 1).padStart(2, '0')}.webp`),
    stack: ['Swift', 'SwiftUI', 'SQLite3', 'Swift Charts', 'CryptoKit', 'LocalAuthentication'],
    en: 'An offline-first personal finance app with budgets, analytics and secure local access.',
    ru: 'Офлайн-приложение для личных финансов с бюджетами, аналитикой и защищённым локальным доступом.',
    descEn: 'A personal finance app with accounts, transactions, recurring payments, budgets, analytics, multiple currencies, CSV/XLSX import and export, backups, PIN and biometric access. Uses SQLite3 and iOS data protection. Developed with Claude assistance, with product direction, requirements, UX decisions, review and testing led by me.',
    descRu: 'Приложение для личных финансов: счета, транзакции, регулярные операции, бюджеты, аналитика, несколько валют, импорт и экспорт CSV/XLSX, резервные копии, PIN-код и биометрический доступ. Использует SQLite3 и механизмы защиты данных iOS. Разработка велась с помощью Claude; я отвечала за продуктовые решения, требования, UX, проверку и тестирование.',
    roleEn: 'Product direction, UX, AI-assisted implementation review and QA', roleRu: 'Продуктовое направление, UX, проверка AI-assisted реализации и QA',
    highlightsEn: ['Offline-first finance tracking', 'Budgets, recurring transactions and analytics', 'CSV/XLSX import-export and backups', 'PIN and biometric authentication'],
    highlightsRu: ['Учёт финансов без обязательного подключения к сети', 'Бюджеты, регулярные операции и аналитика', 'Импорт/экспорт CSV/XLSX и резервные копии', 'PIN-код и биометрическая аутентификация']
  },
  {
    slug: 'body-yoga-calisthenics', title: 'Body — Yoga & Calisthenics', type: 'application', origin: 'ai-assisted', year: '2026', icon: '/projects/body.webp',
    screenshots: Array.from({ length: 11 }, (_, i) => `/projects/screenshots/body-yoga-calisthenics/${String(i + 1).padStart(2, '0')}.webp`),
    stack: ['Swift', 'SwiftUI', 'Observation'],
    en: 'A movement companion with yoga poses, calisthenics exercises, programs and a training diary.',
    ru: 'Приложение для тренировок с асанами йоги, упражнениями калистеники, программами и дневником.',
    descEn: 'A fitness app combining a library of 100 yoga poses, guided programs, a timer and diary with 100 calisthenics exercises across eight categories, set counter, stopwatch and achievements. Created with Claude assistance; I shaped the product, requirements and UX, then reviewed, tested and refined the implementation.',
    descRu: 'Фитнес-приложение объединяет библиотеку из 100 асан йоги, программы, таймер и дневник, а также 100 упражнений калистеники в восьми категориях, счётчик подходов, секундомер и достижения. Создано с помощью Claude: я формировала продукт, требования и UX, проверяла, тестировала и улучшала реализацию.',
    roleEn: 'Product direction, UX, AI-assisted implementation review and QA', roleRu: 'Продуктовое направление, UX, проверка AI-assisted реализации и QA',
    highlightsEn: ['100 yoga poses and guided programs', '100 calisthenics exercises in eight categories', 'Training timer, diary and achievements'],
    highlightsRu: ['100 асан йоги и готовые программы', '100 упражнений калистеники в восьми категориях', 'Таймер, дневник тренировок и достижения']
  },
  {
    slug: 'igaming-seo-websites', title: 'iGaming SEO Website Portfolio', type: 'web', origin: 'ai-assisted', year: '7 Jul — 18 Aug 2026', client: 'Marlerino Group',
    stack: ['SEO', 'iGaming', 'Gambling', 'Claude', 'VS Code'],
    en: 'A commercial batch of 10 SEO-focused websites for Marlerino Group in the iGaming and gambling niche.',
    ru: 'Коммерческий пакет из 10 SEO-сайтов для Marlerino Group в тематике iGaming и gambling.',
    descEn: 'A grouped commercial case consisting of ten niche websites. My role included working with requirements, directing the Claude-assisted implementation, reviewing pages, checking the result and refining the deliverables. The case is presented as one body of work rather than ten separate personal projects.',
    descRu: 'Единый коммерческий кейс из десяти тематических сайтов. Моя роль включала работу с требованиями, направление реализации с помощью Claude, проверку страниц и результата, а также доработку материалов. Кейс представлен как одна работа, а не десять отдельных личных проектов.',
    roleEn: 'Requirements, implementation direction, review and QA', roleRu: 'Требования, направление реализации, проверка и QA',
    sites: [
      { name: 'SavaSpin Italia', description: 'Casino website', url: 'https://savaspinitalia-casino.com/' },
      { name: 'Joker Pyre Demo', description: 'Slot demo & review', url: 'https://joker-pyre-demo.com/' },
      { name: 'Mostbet Aviator', description: 'Game-focused website', url: 'https://mostbet-aviator.org/' },
      { name: 'Royal Joker Demo', description: 'Slot demo & review', url: 'https://royal-joker-demo.fr/' },
      { name: 'Mostbet Mirror', description: 'Casino access & information', url: 'https://mostbetmirror.org/' },
      { name: 'Boomerang Bet', description: 'Betting & casino website', url: 'https://boomerangbetit.com/' },
      { name: 'TalkSport Bet', description: 'Sports betting website', url: 'https://talksportbetie.com/' },
      { name: 'Bankonbet Casino', description: 'Casino website', url: 'https://bankonbetcasinoit.com/' },
      { name: 'LolaJack Casino', description: 'Casino website', url: 'https://lolajackcasinode.com/' },
      { name: 'Leon Bet Casino', description: 'Casino website', url: 'https://leonbetcasinobr.com/' }
    ]
  },

];

export const copy = {
  en: {
    home:'Home', projects:'Projects', about:'About', experience:'Experience', contact:'Contact',
    eyebrow:'C# DEVELOPER · UNITY · APPS · WEB', title:'I build software', accent:'and turn ideas into products.',
    intro:'C# developer with 4 years of commercial experience in Unity, contributing to 190+ mobile game and application projects. I also explore native iOS apps and web products through transparent Claude-assisted workflows.',
    view:'Explore projects', reach:'Get in touch', selected:'SELECTED WORK', selectedTitle:'Development across platforms', selectedText:'Commercial Unity experience, a technical test project, native iOS apps and web products.', all:'All projects',
    what:'WHAT I DO', whatTitle:'From game systems to apps and web products.', cap1:'C# & Unity', cap1d:'Commercial mobile games, application logic, reusable systems and integrations.', cap2:'Native iOS apps', cap2d:'SwiftUI product experiments with clear disclosure of AI-assisted implementation.', cap3:'Web products', cap3d:'Website delivery, product direction, interface review and quality checks.',
    years:'YEARS EXPERIENCE', cta:'HAVE A PROJECT IN MIND?', ctaTitle:'Let’s build something', ctaAccent:'worth exploring.', ctaText:'Open to C# and Unity development opportunities and interesting collaborations.', say:'Say hello', footer:'Designed & built by Alexa',
    projectsIntro:'Commercial Unity work, a technical test assignment, native iOS apps and websites.', aboutTitle:'A little about me',
    aboutText:'I’m a C# developer with around four years of commercial experience, primarily in Unity. At Marlerino Group alone, I contributed to around 190 mobile game, application and utility projects for iOS and Android. Earlier, at Nagai Industries, I worked on 3D prototypes and game applications for international clients. My work included gameplay and application logic, UI, reusable modules, SDK and REST integrations, debugging, refactoring, testing and release preparation. Alongside commercial Unity development, I have been shaping native iOS apps through Claude-assisted workflows. I define requirements and product direction, make UX decisions, review generated code, test and refine the results. I’m currently deepening my broader C#/.NET foundations; I do not present .NET projects as completed portfolio work.',
    expIntro:'Commercial Unity development across mobile games, applications and 3D prototypes.', role:'Unity Developer', company:'Marlerino Group', roleDate:'March 2023 — July 2026',
    roleText:'Developed commercial 2D mobile games, applications and utilities for iOS and Android. Implemented gameplay and application logic, UI, reusable modules, REST integrations and third-party SDKs. Worked with existing code, refactoring, debugging, testing and release preparation across 190+ projects.',
    education:'Software Engineering · Bachelor’s degree', educationText:'Ural Federal University (UrFU), Institute of Radioelectronics and Information Technology, 2024.',
    contactIntro:'Feel free to reach out by email or Telegram, or explore my code on GitHub.', overview:'Overview', roleLabel:'My contribution', stack:'Technologies',
    originProfessional:'Professional experience', originTest:'Test assignment', originAI:'Claude-assisted development', back:'Back to projects', notFound:'Page not found', notFoundText:'Looks like this page took a different route.', goHome:'Back to home',
    secondRole:'Unity Developer', secondCompany:'Nagai Industries', secondDate:'July 2022 — January 2023', secondText:'Built 3D prototypes and game applications for international clients. Developed gameplay mechanics and systems, adapted features to requirements, worked with existing code, debugged issues and tested implementations. Joined the team after a two-month internship.',
    availability:'AVAILABLE FOR NEW OPPORTUNITIES', highlights:'Highlights', openRepo:'View source on GitHub', visitSite:'Visit website', websites:'Websites in this case',
    skillsTitle:'SKILLS & TOOLS', skillsNote:'.NET is a learning direction and is not represented as completed portfolio projects.',
    skillGroups:[['C# & software engineering','C#','OOP','Generics','Interfaces','Events & Delegates','LINQ','async/await','JSON','Refactoring','Debugging','Git'],['Unity · games & apps','Unity','Mobile iOS & Android','Gameplay & application logic','Reusable modules','REST API','Firebase','AppsFlyer','OneSignal','Facebook SDK','WebView'],['Native iOS','Swift','SwiftUI','Swift Charts','SQLite3','PhotoKit','Vision','AVFoundation','UserNotifications','CryptoKit'],['Web & AI-assisted workflows','Claude','VS Code','SEO','Requirements & product direction','UI/UX decisions','Code review','Testing & refinement'],['.NET foundations','LINQ','SQL Server','PostgreSQL','xUnit','NUnit']]
  },
  ru: {
    home:'Главная', projects:'Проекты', about:'Обо мне', experience:'Опыт', contact:'Контакты',
    eyebrow:'C#-РАЗРАБОТЧИК · UNITY · APPS · WEB', title:'Разрабатываю ПО', accent:'и превращаю идеи в продукты.',
    intro:'C#-разработчик с 4 годами коммерческого опыта в Unity и участием в создании более 190 мобильных игр и приложений. Также развиваю нативные iOS-приложения и веб-продукты с помощью Claude, открыто обозначая роль AI.',
    view:'Смотреть проекты', reach:'Связаться', selected:'ИЗБРАННЫЕ РАБОТЫ', selectedTitle:'Разработка на разных платформах', selectedText:'Коммерческий опыт Unity, техническое тестовое задание, нативные iOS-приложения и веб-продукты.', all:'Все проекты',
    what:'ЧЕМ ЗАНИМАЮСЬ', whatTitle:'От игровых систем до приложений и веб-продуктов.', cap1:'C# и Unity', cap1d:'Коммерческие мобильные игры, прикладная логика, переиспользуемые системы и интеграции.', cap2:'Нативные iOS-приложения', cap2d:'Эксперименты со SwiftUI и прозрачное описание AI-assisted разработки.', cap3:'Веб-продукты', cap3d:'Создание сайтов, проработка продукта, проверка интерфейсов и качества.',
    years:'ЛЕТ ОПЫТА', cta:'ЕСТЬ ИДЕЯ ИЛИ ПРЕДЛОЖЕНИЕ?', ctaTitle:'Давайте создадим', ctaAccent:'что-то интересное.', ctaText:'Открыта к предложениям по C# и Unity-разработке и интересному сотрудничеству.', say:'Написать мне', footer:'Дизайн и разработка — Alexa',
    projectsIntro:'Коммерческие Unity-проекты, техническое тестовое задание, нативные iOS-приложения и сайты.', aboutTitle:'Немного обо мне',
    aboutText:'Я C#-разработчик примерно с четырьмя годами коммерческого опыта, преимущественно в Unity. В Marlerino Group участвовала примерно в 190 мобильных игровых, прикладных и утилитарных проектах для iOS и Android. Ранее в Nagai Industries работала над 3D-прототипами и игровыми приложениями для международных клиентов. Работала над игровой и прикладной логикой, UI, переиспользуемыми модулями, интеграциями SDK и REST, отладкой, рефакторингом, тестированием и подготовкой релизов. Помимо коммерческой Unity-разработки, создаю нативные iOS-приложения с помощью Claude. Формирую требования и направление продукта, принимаю UX-решения, проверяю сгенерированный код, тестирую и дорабатываю результат. Сейчас углубляю знания C#/.NET; завершённых .NET-проектов в портфолио не заявляю.',
    expIntro:'Коммерческая Unity-разработка: мобильные игры, приложения и 3D-прототипы.', role:'Unity Developer', company:'Marlerino Group', roleDate:'Март 2023 — июль 2026',
    roleText:'Разрабатывала коммерческие 2D-мобильные игры, приложения и утилиты для iOS и Android. Реализовывала игровую и прикладную логику, UI, переиспользуемые модули, REST-интеграции и сторонние SDK. Работала с существующим кодом, рефакторингом, отладкой, тестированием и подготовкой релизов. Более 190 проектов.',
    education:'Программная инженерия · бакалавриат', educationText:'Уральский федеральный университет (УрФУ), ИРИТ-РТФ, 2024.',
    contactIntro:'Можно написать мне на почту или в Telegram, а также посмотреть мой код на GitHub.', overview:'Обзор', roleLabel:'Мой вклад', stack:'Технологии',
    originProfessional:'Коммерческий опыт', originTest:'Тестовое задание', originAI:'Разработка с Claude', back:'Назад к проектам', notFound:'Страница не найдена', notFoundText:'Кажется, эта страница свернула не туда.', goHome:'На главную',
    secondRole:'Unity Developer', secondCompany:'Nagai Industries', secondDate:'Июль 2022 — январь 2023', secondText:'Создавала 3D-прототипы и игровые приложения для международных клиентов. Разрабатывала игровые механики и системы, адаптировала функциональность под требования, работала с существующим кодом, исправляла ошибки и тестировала реализацию. После двухмесячной стажировки присоединилась к команде.',
    availability:'ОТКРЫТА К НОВЫМ ПРЕДЛОЖЕНИЯМ', highlights:'Ключевые особенности', openRepo:'Открыть исходный код на GitHub', visitSite:'Открыть сайт', websites:'Сайты в рамках кейса',
    skillsTitle:'НАВЫКИ И ИНСТРУМЕНТЫ', skillsNote:'.NET — направление обучения; завершённые проекты на .NET не заявляются.',
    skillGroups:[['C# и разработка ПО','C#','ООП','Generics','Интерфейсы','События и делегаты','LINQ','async/await','JSON','Рефакторинг','Отладка','Git'],['Unity · игры и приложения','Unity','Мобильная разработка iOS и Android','Игровая и прикладная логика','Переиспользуемые модули','REST API','Firebase','AppsFlyer','OneSignal','Facebook SDK','WebView'],['Нативная iOS-разработка','Swift','SwiftUI','Swift Charts','SQLite3','PhotoKit','Vision','AVFoundation','UserNotifications','CryptoKit'],['Веб и AI-assisted workflow','Claude','VS Code','SEO','Требования и направление продукта','UI/UX-решения','Проверка кода','Тестирование и доработка'],['Основы .NET','LINQ','SQL Server','PostgreSQL','xUnit','NUnit']]
  }
};

export function originText(origin: ProjectOrigin, lang: Lang) {
  return origin === 'professional' ? copy[lang].originProfessional : origin === 'test' ? copy[lang].originTest : copy[lang].originAI;
}
