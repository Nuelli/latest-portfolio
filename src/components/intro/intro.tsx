import { PC } from '@/components/pc/pc';
import styles from './styles.module.scss';

const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋
          <br />
          I&apos;m <span>Emmanel Abwao</span>
        </h1>

        <p className={styles.text}>
          I&apos;m a 23 year old fullstack developer from Kenya, and this will be my small
          portfolio website that I intend to update regularly. Thank you for visiting.
        </p>
      </div>
    </section>
  );
};

export { Intro };
