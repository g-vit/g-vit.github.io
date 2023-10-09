import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vitaliy Gutsalyuk | Personal Website',
  description:
    "Hello, I'm Vitaly 👋, software engineer. Explore my skills, work experience and notes on this personal site.",
};

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl text-emerald-400 mb-4">Vitaliy Gutsalyuk 👨‍💻</h1>
      <Image
        className="w-24 h-24 rounded-full mb-4"
        src="/images/46105866.jpeg"
        width={144}
        height={144}
        alt="me"
      />
      <p className="mb-4">
        Hello, I&apos;m Vitaliy 👋. I&apos;m a software engineer. Here, you can discover
        details about my skills, work experience, and explore my notes.
      </p>
      <p>
        My passion is to create something new. Software development is more than
        just work; it&apos;s a true hobby. I enjoy learning and exploring new
        possibilities in information technology. I&apos;m grateful to merge my
        interests with my career.
      </p>
    </div>
  );
};

export default Home;
