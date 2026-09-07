// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Imy Khan, Ph.D.';
export const SITE_DESCRIPTION = 'Researcher in Artificial Life & Artificial Intelligence.';

export const CV_URL = '';

export const CONTACT = {
  organization: 'Imy Khan',
  addressLines: [
    'Dept. of Computer Science, University of Warwick',
  ],
  emails: [
    'imy@imytk.co.uk',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Email',
    href: 'mailto:imy@imytk.co.uk',
    icon: 'email',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=exLEmtMAAAAJ',
    icon: 'scholar',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imran-khan-b095962b5/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/Imy_TK',
    icon: 'twitter',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Astro Scholar (Open Source)',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
