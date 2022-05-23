import { IconArrowRight } from '@tabler/icons';
import Image from 'next/image';
import { tw } from 'twind';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IHero {
  data?: any;
  firstSectionRef?: any;
}

export interface IHeroFunctions extends IHero {}

const Hero: React.FC<IHeroFunctions> = ({ data, firstSectionRef }) => {
  const scrollToFirstSection = () => {
    window.scroll({ top: firstSectionRef.current.offsetTop - 64, behavior: 'smooth' });
  };

  const styles = {
    hero: {
      base: tw`relative h-[calc(100vh-4rem)]`,

      wrapper: tw`flex(& col)`,

      text: tw`flex(& col) gap(y-2 md:(y-8))  absolute z-[5] font(sora) py-4 bottom(16 sm:(32) md:(1/4))`,
      title: tw`font(bold) text(2xl sm:(3xl) md:(4xl) lg:(5xl)) max-w(md:(xl) lg:(2xl)) !leading-[1.2] `,
      subtitle: tw`text(sm sm:(lg) md:(xl) lg:(2xl) xl:(3xl))`,

      buttons: {
        base: tw`mt-4`,

        button: tw`flex(& row) items-center bg-[#121212] py-4 px-4 gap-x-2`,
      },

      background: tw`object-cover h-[calc(100vh-4rem)] w-full`,
    },
  };

  return (
    <section className={styles.hero.base}>
      <Wrapper classes={styles.hero.wrapper}>
        <div
          className={styles.hero.text}
          style={{
            filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
          }}
        >
          <h1 className={styles.hero.title}>{data.attributes.title}</h1>
          <span className={styles.hero.subtitle}>{data.attributes.subtitle}</span>

          <div className={styles.hero.buttons.base}>
            <button onClick={() => scrollToFirstSection()} className={styles.hero.buttons.button}>
              Czytaj dalej <IconArrowRight size={24} />
            </button>
          </div>
        </div>
      </Wrapper>

      <Image
        layout="fill"
        className={styles.hero.background + ` brightness-75`}
        style={{
          filter: 'brightness(0.75)',
        }}
        src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT + data.attributes.image.data.attributes.url}
        alt={data.attributes.image.data.attributes.alternativeText}
      />
    </section>
  );
};

export default Hero;
