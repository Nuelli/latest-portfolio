import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

        <ul className={styles.list}>
          <li>
            <Card
              img="/"
              title=""
              description=""
              href="link to the app"
              githubUrl=""
              topics={[
                'nextjs',
                'prisma',
                'typescript',
                'stripe',
                'tailwindcss',
              ]}
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
          <li>
            <Card
              img=""
              title=""
              description=""
              href=""
              githubUrl=""
              topics={['react', 'typescript', 'rapid-api', 'sass']}
            />
          </li>
          <li>
            <Card
              img=""
              title=""
              description=""
              href=""
              githubUrl=""
              topics={['html', 'sass', 'gulp', 'green-sock']}
            />
          </li>
          <li>
            <Card
              img=""
              title=""
              description=""
              href=""
              githubUrl=""
              topics={['simple-bar', 'sass', 'gulp', 'google-maps']}
            />
          </li>
          
        
         //

          <li>
            <Card
              img=""
              title=""
              description=""
              href=""
              githubUrl=""
              topics={['html', 'js', 'sass']}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
