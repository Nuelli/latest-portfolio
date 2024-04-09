import Link from 'next/link';

import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Works
      </h2>

      <ul className={styles.list}>
        <li>
          <Card
            img="/image link"
            title="title"
            description="description of the app"
            href="link to the app"
            githubUrl=""
            topics={['react', 'typescript', 'rapid-api', 'sass']}
          />
        </li>
        <li>
          <Card
            img="/"
            title=""
            description=""
            href=""
            githubUrl=""
            topics={['nextjs', 'prisma', 'typescript', 'stripe', 'tailwindcss']}
          />
        </li>
        <li>
          <Card
            img="/"
            title=""
            description=""
            href=""
            githubUrl=""
            topics={[
              'nextjs',
              'typescript',
              'pusher',
              'upstash',
              'redis',
              'tailwindcss',
            ]}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">
        See more
      </Link>
    </section>
  );
};

export { Portfolio };
