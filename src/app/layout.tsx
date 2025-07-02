import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';
import '~/styles/globals.css';
// import './globals.css';
import { ThemeProvider } from '~/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Onyx Theme',
    description: 'A sophisticated dark and light theme inspired by onyx stone',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange={false}
                    storageKey='onyx-theme'
                    enableColorScheme
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
