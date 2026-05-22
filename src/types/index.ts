export type NavLink = {
  name: string;
  link: string;
};

export type Word = {
  text: string;
  imgPath: string;
};

export type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

export type LogoIcon = {
  imgPath: string;
  width: number;
};

export type Ability = {
  imgPath: string;
  title: string;
  desc: string;
};

export type TechStackImg = {
  name: string;
  imgPath: string;
  width: number;
  height: number;
};

export type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: readonly [number, number, number];
};

export type ExpCard = {
  review: string;
  imgPath: string;
  width: number;
  height: number;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

export type ExpLogo = {
  name: string;
  imgPath: string;
};

export type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
};

export type SocialImg = {
  name: string;
  url: string;
  imgPath: string;
};
