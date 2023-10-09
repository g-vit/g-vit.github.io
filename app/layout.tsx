import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const font = Roboto_Mono({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={font.className}>
        <div className="min-h-screen flex flex-col bg-dark">
          <header className="py-4">
            <nav className="py-4">
              <div className="flex justify-center">
                <Link
                  className="px-3 lg:px-5 text-lg lg:text-xl text-white hover:no-underline hover:text-emerald-400"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="px-3 lg:px-5 text-lg lg:text-xl text-white hover:no-underline hover:text-emerald-400"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="px-3 lg:px-5 text-lg lg:text-xl text-white hover:no-underline hover:text-emerald-400"
                  href="/blog"
                >
                  Blog
                  <span className="text-xs align-text-top ml-1 absolute">
                    🇷🇺
                  </span>
                </Link>
                <Link
                  className="px-3 lg:px-5 text-lg lg:text-xl text-white hover:no-underline hover:text-emerald-400"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-grow p-4">
            <div className="max-w-3xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
