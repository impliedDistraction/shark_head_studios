import React from 'react'; // Import React
import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Shark Head Studios",
  description: "We build games.",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
};
export default Layout;