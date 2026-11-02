import localFont from 'next/font/local';
import { Raleway, Inter, DM_Sans, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
   SITE_URL,
   SITE_NAME,
   SITE_TITLE_DEFAULT,
   SITE_TITLE_TEMPLATE,
   SITE_DESCRIPTION,
   SITE_KEYWORDS,
   DEFAULT_OG_IMAGE,
   OG_IMAGE_PATH,
   LOGO_PATH,
} from '@/lib/site-config';

const nasalization = localFont({
   src: '../../public/fonts/nasalization.otf',
   variable: '--font-nasalization-family',
   display: 'swap',
});

const raleway = Raleway({
   subsets: ['latin'],
   variable: '--font-raleway-family',
   display: 'swap',
});

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
});

const dmSans = DM_Sans({
   subsets: ['latin'],
   variable: '--font-dm-sans',
   display: 'swap',
});

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   variable: '--font-poppins-family',
   display: 'swap',
});

export const metadata = {
   metadataBase: new URL(SITE_URL),
   title: {
      default: SITE_TITLE_DEFAULT,
      template: SITE_TITLE_TEMPLATE,
   },
   description: SITE_DESCRIPTION,
   applicationName: SITE_NAME,
   authors: [{ name: 'FUOYE Systems Engineering' }],
   generator: 'Next.js',
   keywords: SITE_KEYWORDS,
   referrer: 'strict-origin-when-cross-origin',
   creator: 'FUOYE Systems Engineering',
   formatDetection: {
      email: false,
      address: false,
      telephone: false,
   },
   alternates: {
      canonical: '/',
   },
   openGraph: {
      type: 'website',
      locale: 'en_NG',
      url: '/',
      siteName: SITE_NAME,
      title: SITE_TITLE_DEFAULT,
      description: SITE_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
   },
   twitter: {
      card: 'summary_large_image',
      title: SITE_TITLE_DEFAULT,
      description: SITE_DESCRIPTION,
      images: [OG_IMAGE_PATH],
   },
   icons: {
      icon: [{ url: LOGO_PATH, type: 'image/svg+xml' }],
   },
   manifest: '/manifest.webmanifest',
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   category: 'education',
};

export const viewport = {
   width: 'device-width',
   initialScale: 1,
   viewportFit: 'cover',
   themeColor: '#f3f5ee',
   colorScheme: 'light',
   userScalable: true,
};

const jsonLd = {
   '@context': 'https://schema.org',
   '@type': 'WebSite',
   name: SITE_NAME,
   url: SITE_URL,
   description: SITE_DESCRIPTION,
   inLanguage: 'en-NG',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className="scroll-smooth">
         <body className={`${raleway.variable} ${nasalization.variable} ${inter.variable} ${dmSans.variable} ${poppins.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            <a
               href="#main-content"
               className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:not-sr-only focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:font-bold focus:text-primary-foreground"
            >
               Skip to main content
            </a>
            <Navbar />
            <div id="main-content" className="w-full flex-1">
               {children}
            </div>
            <Footer />
         </body>
      </html>
   );
}
