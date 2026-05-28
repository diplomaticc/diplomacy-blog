export interface NavLink {
  href: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  paragraph: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  utilityLabel: string;
}

export interface MissionCardProps {
  description: string;
  href: string;
  icon: 'satellite' | 'rocket' | 'star';
  status: string;
  statusTone: 'green' | 'blue' | 'gold';
  title: string;
}

export interface SpectrumBarProps {
  value: number;
}

export interface StatBlockProps {
  label: string;
  value: string;
}

export interface LaunchRowProps {
  date: string;
  detail: string;
  href: string;
  time: string;
  title: string;
}

export interface DiscoveryContent {
  archiveHref: string;
  archiveLabel: string;
  body: string;
  cta: NavLink;
  image: string;
  label: string;
  rangeEnd: string;
  rangeStart: string;
  title: string;
}

export interface NextDepartureContent {
  allHref: string;
  image: string;
  label: string;
  launchDate: string;
  launchTime: string;
  title: string;
}

export interface FooterMeta {
  description: string;
  title: string;
}

export const siteNav: NavLink[] = [
  { label: 'Agenda', href: '/missions/' },
  { label: 'Engagements', href: '/reports/' },
  { label: 'News', href: '/news/' },
  { label: 'Departures', href: '/departures/' },
  { label: 'Technology', href: '/technology/' },
  { label: 'Research', href: '/science/' },
  { label: 'About', href: '/about/' },
];

export const heroLeftNav: NavLink[] = [
  { label: 'Agenda', href: '/missions/' },
  { label: 'Engagements', href: '/reports/' },
  { label: 'Research', href: '/science/' },
];

export const heroRightNav: NavLink[] = [
  { label: 'Technology', href: '/technology/' },
  { label: 'News', href: '/news/' },
  { label: 'About', href: '/about/' },
];

export const mobileNav: NavLink[] = [...heroLeftNav, ...heroRightNav];

export const heroContent: HeroContent = {
  eyebrow: 'THE BOUNDARY IS',
  paragraph:
    'We stand at the crosswinds of global shifting powers. DIPLOMATICC exists to analyze strategic foreign policy, track international summits, map cyber governance, and decode modern geopolitical relationships.',
  primaryCta: {
    href: '/missions/',
    label: 'View Agenda',
  },
  secondaryCta: {
    href: '/science/',
    label: 'Our Research',
  },
  utilityLabel: 'EST. 2024',
};

export const stats: StatBlockProps[] = [
  { value: '14', label: 'Active Briefings' },
  { value: '4,200', label: 'Policy Papers' },
  { value: '8', label: 'Summits Tracked' },
  { value: '2.4B', label: 'Global Readers' },
];

export const footerMeta: FooterMeta = {
  title: 'DIPLOMATICC',
  description:
    'An independent geopolitical think-tank and policy analysis platform. Tracking global engagements, strategic priorities, and modern international relations.',
};

export const footerDirectory: NavLink[] = [...siteNav];

export const footerPolicies: string[] = ['Privacy', 'Terms', 'Classified'];
