import Image from 'next/image';
import styles from './styles.module.scss';
import ParticlesContainer from '@/app/works/ParticlesContainer'

const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
     
     

      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋
          <br />
          I&apos;m <span>Emmanuel Abwao</span>
        </h1>

        <p className={styles.text}>
          I&apos;m a 23 year old fullstack developer from Kenya, and this will be my small
          portfolio website that I intend to update regularly. Thank you for visiting.
        </p>
      </div>

      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/mypic.png"
          width={550}
          height={320}
          alt="my image"
        />
        </div>

    </section>
  );
};

export { Intro };
