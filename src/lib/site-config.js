export const SITE_URL =
   process.env.NEXT_PUBLIC_SITE_URL ||
   (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://nacossfuoye.vercel.app');

export const SITE_NAME = 'FUOYE Systems Engineering';
export const SITE_TITLE_DEFAULT = 'FUOYE Systems Engineering | Student Hub';
export const SITE_TITLE_TEMPLATE = '%s | FUOYE Systems Engineering';
export const SITE_DESCRIPTION =
   'The all-round FUOYE Systems Engineering student platform for academics, student life, departmental updates, events, representation, projects, opportunities, and career development.';

export const SITE_KEYWORDS = [
   'FUOYE Systems Engineering',
   'Systems Engineering FUOYE',
   'Federal University Oye-Ekiti Systems Engineering',
   'FUOYE academic resources',
   'FUOYE student projects',
   'FUOYE student opportunities',
   'FUOYE career development',
   'Systems Engineering student portal',
   '100L Systems Engineering',
   '200L Systems Engineering',
   '300L Systems Engineering',
   '400L Systems Engineering',
   '500L Systems Engineering',
   'FUOYE student events',
   'FUOYE student representation',
   'FUOYE study materials',
];

export const OG_IMAGE_PATH = '/systems-engineering-hero.png';
export const LOGO_PATH = '/systems-mark.svg';

export const DEFAULT_OG_IMAGE = {
   url: OG_IMAGE_PATH,
   alt: 'Illustrative connected systems model for the FUOYE Systems Engineering student hub',
   type: 'image/png',
};

export function buildPageMetadata({
   title,
   description = SITE_DESCRIPTION,
   pathname = '',
   ogImage = OG_IMAGE_PATH,
   noIndex = false,
}) {
   const canonicalUrl = pathname
      ? `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
      : SITE_URL;
   const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE_DEFAULT;

   return {
      title,
      description,
      alternates: {
         canonical: canonicalUrl,
      },
      openGraph: {
         title: fullTitle,
         description,
         url: canonicalUrl,
         siteName: SITE_NAME,
         locale: 'en_NG',
         type: 'website',
         images: [
            {
               url: ogImage,
               alt: fullTitle,
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title: fullTitle,
         description,
         images: [ogImage],
      },
      ...(noIndex && {
         robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
               index: false,
               follow: false,
               noimageindex: true,
            },
         },
      }),
   };
}
