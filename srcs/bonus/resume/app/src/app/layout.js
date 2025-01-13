import './globals.css';
import Head from 'next/head';
import React from 'react';

export const metadata = {
  title: 'Beqa Tvildiani Portfolio',
  description: 'Welcome to Beqa Tvildiani\'s personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4">
          <ul className="container mx-auto flex gap-1 items-center">
            <li><a href="/" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Home</a></li>
            <li><a href="portfolio" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Portfolio</a></li>
            <li><a href="work" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Work</a></li>
            <li><a href="contact" className="text-white duration-300 hover:bg-gray-700 p-3 rounded-lg">Contact</a></li>
          </ul>
        </nav>
        {/* Main content */}
        <main className="bg-gray-900 min-h-[85vh]">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 absolute b-0 w-full">
          <div className="container mx-auto text-center">
            <p>&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
