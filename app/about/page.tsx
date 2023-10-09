import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vitaliy Gutsalyuk | About',
};

const About = () => {
  return (
    <>
      <section className="mb-8">
        <h2 className="mb-2 text-2xl">Publications</h2>
        <ul className="list-inside list-disc break-words">
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://habr.com/en/companies/uchi_ru/articles/735122/"
            >
              https://habr.com/en/companies/uchi_ru/articles/735122/
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://habr.com/en/companies/uchi_ru/articles/492488/"
            >
              https://habr.com/en/companies/uchi_ru/articles/492488/
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 text-2xl">Public Presentations</h2>
        <ul className="list-inside list-disc">
          <li>
            <span className="mr-2 text-gray-400">2023/04/12</span>
            <span>Evrone - DevOps meetup</span>
            <br />
            <a
              target="_blank"
              rel="noopener"
              href="https://youtu.be/RDixA-nr8ZA?list=LL"
            >
              https://youtu.be/RDixA-nr8ZA?list=LL
            </a>
          </li>
          <li>
            <span className="mr-2 text-gray-400">2021/10/14</span>
            <span>Selectel MeetUp - Working with Data in EdTech </span>
            <br />
            <a
              target="_blank"
              rel="noopener"
              href="https://youtu.be/P4kRhLTPFI8?list=LL&t=7047"
            >
              https://youtu.be/P4kRhLTPFI8?list=LL&t=7047
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="mb-2 text-2xl">Work Experience and Education</h2>
        <section>
          <h3 className="text-gray-400">December 2018 — Present</h3>
          <p className="text-emerald-400">UCHI.RU - Software Engineer</p>
          <ul className="list-inside list-disc">
            <li>Golang</li>
            <li>JavaScript/TypeScript/React</li>
            <li>Ruby/Ruby on Rails</li>
            <li>Docker</li>
            <li>Nomad/Kubernetes</li>
            <li>PostgreSQL/Redis</li>
            <li>Nginx/Traefik</li>
            <li>Kafka/RabbitMQ</li>
            <li>Elasticsearch</li>
          </ul>
        </section>
        <section className="my-4">
          <h3 className="text-gray-400">May 2016 — June 2017</h3>
          <p className="text-emerald-400">IT Grade Web Studio - Developer</p>
          <ul className="list-inside list-disc">
            <li>PHP</li>
            <li>Bitrix Framework</li>
            <li>MySQL</li>
            <li>HTML/CSS/Javascript/JQuery</li>
          </ul>
        </section>
        <section className="my-4">
          <h3 className="text-gray-400">2013-2017 - Higher Education</h3>
          <p>
            The Branch of National Research University «Moscow Power Engineering
            Institute» in Smolensk
          </p>
          <p>Specialization: Applied computer science in economics</p>
        </section>
      </section>
    </>
  );
};

export default About;
