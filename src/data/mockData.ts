import type {
  SkillCategoryData,
  ExperienceEntry,
  EducationEntry,
  StatItem,
} from '../types';

export const profileInfo = {
  name: 'Kanishk M',
  role: 'Full-Stack Developer',
  tagline: 'I build scalable web & mobile applications that users love.',
  bio: 'Full-Stack MERN & React Native Developer with 2+ years of hands-on experience building production-grade web and mobile applications. I specialize in React.js, React Native, Node.js, TypeScript, and cloud infrastructure — delivering performant, real-time solutions for international clients.',
  email: 'itskanishk11@gmail.com',
  phone: '+91-9944759815',
  location: 'Coimbatore, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/kanishk-m-4b4854277',
  github: 'https://github.com/kanishk011',
  avatarInitials: 'KM',
} as const;

export const stats: StatItem[] = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects Delivered', value: 3, suffix: '+' },
  { label: 'Active Users Served', value: 1000, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

export const skillCategories: SkillCategoryData[] = [
  {
    id: 'sc1',
    title: 'Frontend',
    icon: 'WebRounded',
    color: '#6366F1', // Indigo
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'React Native', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Redux / RTK', level: 82 },
      { name: 'HTML / CSS / SCSS', level: 90 },
      { name: 'MUI / Tailwind', level: 85 },
    ],
  },
  {
    id: 'sc2',
    title: 'Backend',
    icon: 'StorageRounded',
    color: '#818CF8', // Light Indigo
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'WebSockets', level: 78 },
    ],
  },
  {
    id: 'sc3',
    title: 'Database',
    icon: 'TableChartRounded',
    color: '#8B5CF6', // Violet
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Prisma ORM', level: 78 },
      { name: 'Firebase / Firestore', level: 82 },
    ],
  },
  {
    id: 'sc4',
    title: 'DevOps & Tools',
    icon: 'CloudRounded',
    color: '#A78BFA', // Lavender
    skills: [
      { name: 'Docker', level: 72 },
      { name: 'AWS EC2', level: 68 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
];

export const experiences: ExperienceEntry[] = [
  {
    id: 'e1',
    role: 'Full-Stack Developer',
    company: 'StorTrack',
    location: 'Coimbatore, Tamil Nadu',
    startDate: 'Mar 2026',
    description:
      'Joined as a Full-Stack Developer, contributing to scalable web applications and platform development.',
    achievements: [
      'Building and scaling full-stack web applications for the StorTrack platform',
      'Collaborating with cross-functional teams on product development',
    ],
    techUsed: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'e2',
    role: 'Full-Stack MERN & React Native Developer',
    company: 'Dturn IT Solutions',
    location: 'Coimbatore, Tamil Nadu',
    startDate: 'Dec 2023',
    endDate: 'Mar 2026',
    description:
      'Led full-stack development for enterprise clients across France and USA, building scalable web and mobile applications with the MERN stack and React Native.',
    achievements: [
      'Savvy Valet (Jan 2025 – Mar 2026) — Developed live employee tracking and real-time chat using Firebase Firestore and WebSockets, improving operational visibility by 35%. Configured RBAC and optimized dual database schema, reducing query latency by 20%. Integrated push notifications in the React Native app, boosting engagement by 30%.',
      'Fonda, France (Jul 2024 – Dec 2024) — Built a secure identity verification platform with third-party KYC APIs, reducing onboarding time by 50% through optimized authentication flow.',
      'UKiddiy (Nov 2023 – Jul 2024) — Revamped an education platform using React.js and GraphQL, supporting 100+ active students. Implemented real-time notifications and a content management dashboard, improving teacher response efficiency by 40%.',
      'Reduced API response times by ~30% through backend query optimization and frontend rendering improvements across projects',
      'Deployed and maintained applications on AWS EC2 using Docker containers with CI/CD pipelines',
    ],
    techUsed: [
      'React.js',
      'React Native',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'TypeScript',
      'Docker',
      'AWS EC2',
      'Firebase',
      'GraphQL',
      'Redux',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: 'ed1',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'SRM University, Chennai',
    year: '2025 — Present',
    status: 'ongoing',
  },
  {
    id: 'ed2',
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'PSG College of Arts & Science, Coimbatore',
    year: '2020 — 2023',
    grade: '85%',
    status: 'completed',
  },
];
