export type TarteelNavLink = {
  label: string;
  href: string;
};

export type TarteelCredential = {
  icon: "Award" | "BookOpen" | "Globe" | "Heart";
  text: string;
};

export type TarteelCourse = {
  emoji: string;
  arabic: string;
  title: string;
  subtitle: string;
  desc: string;
  duration: string;
  level: string;
  features: string[];
  color: string;
  highlight?: boolean;
};

export type TarteelStep = {
  num: string;
  icon: "CalendarCheck" | "Video" | "BookOpen" | "TrendingUp";
  title: string;
  desc: string;
};

export type TarteelPlatform = {
  name: string;
  icon: string;
  features: string[];
};

export type TarteelTestimonial = {
  name: string;
  location: string;
  flag: string;
  text: string;
  course: string;
  stars: number;
};

export type TarteelFAQ = {
  q: string;
  a: string;
};

export type TarteelContactMethod = {
  icon: "MessageCircle" | "Mail" | "Clock";
  label: string;
  value: string;
  sub: string;
};

// Add to existing types:

export type TarteelPlanPricing = {
  west: {
    price: string;
    currency: string;
    period: string;
  };
  middleEast: {
    price: string;
    currency: string;
    period: string;
  };
};

export type TarteelPlan = {
  name: string;
  arabic: string;
  pricing: TarteelPlanPricing;
  desc: string;
  sessions: string;
  duration: string;
  features: string[];
  cta: string;
  highlight: boolean;
};