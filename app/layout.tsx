'use client';

import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Navbar } from 'flowbite-react';
import ButtonLarge from '@/components/Button/ButtonLarge/ButtonLarge';
import LinkItemLarge from '@/components/LinkItem/LinkItemLarge/LinkItemLarge';
import { FaArrowRight } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Konsumer Solutions | Exceptional Talent, Exceptional Results',
  description: '',
  applicationName: 'Konsumer Solutions Landing',
  authors: [
    {
      name: 'Konsumer Solutions',
      url: '',
    },
  ],
  generator: 'Next.js',
  keywords: ['konsumer solutions', 'customer service'],
  referrer: 'origin',
  themeColor: '#000000',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Konsumer Solutions',
  publisher: '',
  robots: 'index, follow',
  icons: [
    {
      rel: 'icon',
      url: '/images/telephone.webp',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/telephone.webp',
    },
  ],
  manifest: '/documents/manifest.json',
  openGraph: {
    type: 'website',
    url: '',
    title: 'Konsumer Solutions | Exceptional Talent, Exceptional Results',
    description: '',
    siteName: 'Konsumer Solutions',
    images: [
      {
        url: '/images/konsumer-solutions.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@konsumersolutions',
    creator: '@konsumersolutions',
    images: '/images/konsumer-solutions.webp',
  },
  appleWebApp: {
    capable: true,
    title: 'Konsumer Solutions | Exceptional Talent, Exceptional Results',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  category: 'Customer Service',
  classification: 'Konsumer Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar className='sticky top-0 z-10 h-full w-full rounded-md bg-black bg-opacity-0 bg-clip-padding backdrop-blur-3xl backdrop-filter'>
          <Link
            href='/'
            className='flex items-center md:max-lg:mx-auto md:max-lg:mb-4'
          >
            <p className='self-center whitespace-nowrap text-2xl font-bold text-white md:text-3xl lg:text-4xl'>
              {`Konsumer Solutions`}
            </p>
          </Link>
          <div className='flex md:order-2'>
            <Link href='/contact'>
              <ButtonLarge
                classes={'px-2 py-2 sm:mt-0 md:px-3 md:py-3 lg:px-5 lg:py-2.5'}
                content={'Contact Us'}
                icon={<FaArrowRight />}
              />
            </Link>
            <Navbar.Toggle className='rounded-lg p-2 text-sm text-white hover:bg-white hover:text-black focus:outline-none md:hidden' />
          </div>
          <Navbar.Collapse>
            <LinkItemLarge path={'/'} content={'Home'} classes='p-2' />
            <LinkItemLarge path={'/about'} content={'About Us'} classes='p-2' />
            <LinkItemLarge
              path={'/services'}
              content={'Our Services'}
              classes='p-2'
            />
            <LinkItemLarge
              path={'/careers'}
              content={'Careers'}
              classes='p-2'
            />
          </Navbar.Collapse>
        </Navbar>
        {children}
        <footer className='bg-black p-4 md:p-8 lg:p-10'>
          <div className='mx-auto max-w-screen-xl text-center'>
            <a
              href='#'
              className='flex items-center justify-center text-2xl font-semibold text-white'
            >
              {`Konsumer Solutions`}
            </a>
            <p className='my-6 text-gray-400'>
              {`Exceptional Talent, Exceptional Results`}
            </p>
            <ul className='mb-6 flex flex-wrap items-center justify-center text-gray-900'>
              <li>
                <Link
                  href='/'
                  className='sm:text-md mr-4 text-sm text-white hover:text-gray-600 md:mr-6'
                >
                  {`Home`}
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='sm:text-md mr-4 text-sm text-white hover:text-gray-600 md:mr-6'
                >
                  {`About Us`}
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='sm:text-md mr-4 text-sm text-white hover:text-gray-600 md:mr-6'
                >
                  {`Our Services`}
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='sm:text-md mr-4 text-sm text-white hover:text-gray-600 md:mr-6'
                >
                  {`Careers`}
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='sm:text-md mr-4 text-sm text-white hover:text-gray-600 md:mr-6'
                >
                  {`Contact Us`}
                </Link>
              </li>
            </ul>
            <span className='text-xs text-gray-500 sm:text-center sm:text-sm'>
              {`© 2023`}{' '}
              <Link href='/' className='hover:text-gray-600'>
                {`Konsumer Solutions`}
              </Link>
              {`. All Rights Reserved.`}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
