import {
  Atom, BookOpen, BrainCircuit, Compass, Hammer, Handshake, Lightbulb, MessageSquare,
  Monitor, Presentation, RefreshCcw, Rocket, School, ShieldCheck, Sparkles, Target,
  Trophy, Users, GraduationCap, Wrench, PencilRuler, Search, LineChart, BarChart3,
  ClipboardCheck, Puzzle, Heart, Globe2, Briefcase, Megaphone, FlaskConical, Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { programs, type Program } from './programs';

/* ---------- Learning ecosystems (groups of the existing program categories) ---------- */

export type EcosystemKey = 'stem' | 'academic' | 'skills' | 'institutional';

export type Ecosystem = {
  key: EcosystemKey;
  image?: string;
  title: string;
  label: string;
  tagline: string;
  href: string;
  cta: string;
  categories: string[];
  icon: LucideIcon;
};

export const ecosystems: Ecosystem[] = [
  {
    key: 'stem', title: 'STEM & Innovation', label: 'Explore · Experiment · Create',
    tagline: 'Robotics, AI, flight, space science and making — learned by building and testing.',
    href: '/stem-innovation', cta: 'Discover STEM', categories: ['STEM & Innovation'], icon: Atom,
    image: '/images/unsplash-1581091226825-a6a2a5aee158.jpg'
  },
  {
    key: 'academic', title: 'Academic Excellence', label: 'Concepts · Practice · Progress',
    tagline: 'Concept-led learning, test practice and assessment across core subjects and competitive preparation.',
    href: '/academics-testing', cta: 'Explore Academics',
    categories: ['Academics & Testing', 'Academic Mastery', 'Academic & Competitive'], icon: GraduationCap,
    image: '/images/unsplash-1434030216411-0b793f4b4173.jpg'
  },
  {
    key: 'skills', title: 'Skills & Personal Development', label: 'Communicate · Calculate · Grow',
    tagline: 'Language, mental mathematics and student-centred support that build confidence.',
    href: '/programs#skills', cta: 'See skill programs',
    categories: ['Language Development', 'Academic Skills', 'Student Development'], icon: MessageSquare,
    image: '/images/unsplash-1522202176988-66273c2fd55f.jpg'
  },
  {
    key: 'institutional', title: 'Institutional Solutions', label: 'Schools & institutions',
    tagline: 'School ERP, teacher support, smart classrooms, branding and science events.',
    href: '/institutional-b2b', cta: 'For Institutions',
    categories: ['Institutional Solutions'], icon: School,
    image: '/images/unsplash-1531482615713-2afd69097998.jpg'
  },
];

export function ecosystemOf(program: Program): Ecosystem {
  return ecosystems.find(e => e.categories.includes(program.category)) ?? ecosystems[0];
}

export function programsIn(key: EcosystemKey): Program[] {
  const eco = ecosystems.find(e => e.key === key)!;
  return programs.filter(p => eco.categories.includes(p.category));
}

/* ---------- Learning journey ---------- */

export const journey: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Discover', text: 'Meet new ideas through demonstrations, questions and curiosity.', icon: Compass },
  { title: 'Learn', text: 'Build strong concepts with guided, interactive sessions.', icon: BookOpen },
  { title: 'Practice', text: 'Apply ideas through exercises, tests and activities.', icon: PencilRuler },
  { title: 'Create', text: 'Work on projects, experiments and practical applications.', icon: Wrench },
  { title: 'Achieve', text: 'Grow in confidence through assessment, mentorship and showcases.', icon: Trophy },
  { title: 'Future-ready', text: 'Carry academic, technical and life skills into what comes next.', icon: Rocket },
];

/* ---------- What students develop ---------- */

export const skills: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Critical Thinking', text: 'Question, compare and reason with evidence.', icon: Search },
  { title: 'Problem Solving', text: 'Break complex problems into workable steps.', icon: Puzzle },
  { title: 'Creativity', text: 'Turn imagination into designs and prototypes.', icon: Lightbulb },
  { title: 'Communication', text: 'Express ideas clearly in speech and writing.', icon: MessageSquare },
  { title: 'Innovation', text: 'Explore emerging technology with purpose.', icon: Sparkles },
  { title: 'Mathematical Thinking', text: 'See patterns, structure and logic in numbers.', icon: Layers },
  { title: 'Scientific Thinking', text: 'Observe, test and interpret what happens.', icon: FlaskConical },
  { title: 'Digital Skills', text: 'Use modern tools and technology confidently.', icon: Monitor },
  { title: 'Collaboration', text: 'Plan, build and present together.', icon: Users },
  { title: 'Confidence', text: 'Grow self-belief through practice and support.', icon: Heart },
];

/* ---------- Learn → Apply → Build → Present → Improve ---------- */

export const practicalLoop: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Learn', text: 'Learn robotics concepts', icon: BookOpen },
  { title: 'Apply', text: 'Solve problems with them', icon: Puzzle },
  { title: 'Build', text: 'Build working projects', icon: Hammer },
  { title: 'Present', text: 'Demonstrate the project', icon: Presentation },
  { title: 'Improve', text: 'Improve skills and designs', icon: RefreshCcw },
];

/* ---------- Academic path ---------- */

export const academicPath: { title: string; text: string; icon: LucideIcon; slug?: string }[] = [
  { title: 'Concepts', text: 'Concept-focused learning in mathematics, physics, chemistry and biology.', icon: BookOpen, slug: 'mathematics' },
  { title: 'Practice', text: 'Guided exercises and structured preparation through DREAM GOALS.', icon: PencilRuler, slug: 'dream-goals' },
  { title: 'Assessment', text: 'Periodic online and offline tests and exams.', icon: ClipboardCheck, slug: 'online-offline-assessment' },
  { title: 'Analysis', text: 'Mistake analysis and performance insight with ELITE SCORER.', icon: BarChart3, slug: 'elite-scorer' },
  { title: 'Improvement', text: 'Follow-up support shaped by what the results show.', icon: LineChart },
  { title: 'Achievement', text: 'Deeper challenge through Olympiad-style preparation.', icon: Trophy, slug: 'olympiad-training' },
];

/* ---------- Institutional support areas ---------- */

export const institutionAreas: { title: string; text: string; icon: LucideIcon; slug: string }[] = [
  { title: 'School Management', text: 'Digital workflows for attendance, exams, records and administration.', icon: Monitor, slug: 'school-erp' },
  { title: 'Teacher Development', text: 'Teacher training, certification pathways and staffing support.', icon: Users, slug: 'elite-jobs' },
  { title: 'Smart Classrooms', text: 'Curriculum-aligned interactive panels and tablets.', icon: Presentation, slug: 'interactive-panels' },
  { title: 'School Branding', text: 'Promotion, events and visual communication for schools.', icon: Megaphone, slug: 'school-branding' },
  { title: 'Science Events', text: 'Expos and fests that showcase student projects.', icon: Sparkles, slug: 'science-expos-fests' },
  { title: 'Assessment Support', text: 'Periodic evaluation that guides continuous learning support.', icon: ClipboardCheck, slug: 'online-offline-assessment' },
];

/* ---------- Why Edumatrix ---------- */

export const whyPoints: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Experiential Learning', text: 'Theory sits beside projects, experiments and activities.', icon: Hammer },
  { title: 'STEM & Emerging Technologies', text: 'Robotics, AI, flight, 3D printing and immersive tech.', icon: Atom },
  { title: 'Academic Excellence', text: 'Concept clarity, practice and assessment across subjects.', icon: GraduationCap },
  { title: 'Skill Development', text: 'Language, communication, mental maths and life skills.', icon: MessageSquare },
  { title: 'Practical Projects', text: 'Students build, test, present and improve.', icon: Wrench },
  { title: 'Student-Centric Learning', text: 'Mentorship and personalized support around each learner.', icon: Heart },
  { title: 'Institutional Support', text: 'Programs and services designed around school needs.', icon: School },
  { title: 'Future-Ready Education', text: 'Skills for emerging careers and technologies.', icon: Rocket },
];

/* ---------- Hero supporting points ---------- */

export const heroPoints: { label: string; text: string; icon: LucideIcon }[] = [
  { label: 'Who we are', text: 'An education and skill-development organization with over 25 years of experience.', icon: ShieldCheck },
  { label: 'What we provide', text: 'STEM, academics, languages, student support and school solutions.', icon: Layers },
  { label: 'What is different', text: 'Learning that moves from concept to practice to creation.', icon: Target },
];

/* ---------- About ---------- */

export const aboutSteps: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Understand', text: 'Start with the needs of the student or school in front of us.', icon: Search },
  { title: 'Design', text: 'Shape academic or skill programs that fit those needs.', icon: PencilRuler },
  { title: 'Deliver', text: 'Practical, interactive and technology-enabled learning.', icon: Rocket },
  { title: 'Support', text: 'Assessment, mentorship and continuous improvement.', icon: Handshake },
];

export const aboutSkillAreas: { title: string; text: string; icon: LucideIcon }[] = [
  { title: 'Academic skills', text: 'Build knowledge and conceptual understanding.', icon: BookOpen },
  { title: 'Professional skills', text: 'Practise useful ways to communicate and collaborate.', icon: Briefcase },
  { title: 'Technical skills', text: 'Explore technology and applied STEM.', icon: BrainCircuit },
  { title: 'Linguistic & life skills', text: 'Develop language, confidence and capability.', icon: Globe2 },
];
