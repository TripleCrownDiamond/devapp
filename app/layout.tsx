import React from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'DevCommunity',
  description: 'DevCommunity is a community for developers.',
  icons: {
    icon: '/assets/images/site-logo.png'
  }
}

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary_500'
            }
          }}
        >
          <ThemeProvider>
            <h1 className='h1-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}