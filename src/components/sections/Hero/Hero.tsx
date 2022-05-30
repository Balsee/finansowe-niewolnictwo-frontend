import { IconArrowRight } from '@tabler/icons';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
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

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <section className="relative h-[calc(100vh-4rem)]">
      <Wrapper classes="flex flex-col">
        <div
          className="absolute bottom-16 z-[5] flex flex-col gap-y-2 py-4 font-sora sm:bottom-32 md:bottom-1/4 md:gap-y-8"
          style={{
            filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
          }}
        >
          <h1 className="text-2xl font-bold !leading-[1.2] text-white sm:text-3xl md:max-w-xl md:text-4xl lg:max-w-2xl lg:text-5xl">
            {data.attributes.title}
          </h1>
          <span className="text-sm text-white  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {data.attributes.subtitle}
          </span>

          <div className="mt-4">
            <button
              onClick={() => scrollToFirstSection()}
              className="flex flex-row items-center gap-x-2 rounded-lg border bg-white p-3 text-sm md:p-4 md:text-lg"
            >
              Czytaj dalej <IconArrowRight size={isMobile ? 20 : 24} />
            </button>
          </div>
        </div>
      </Wrapper>

      <Image
        layout="fill"
        className="h-[calc(100vh-4rem)] w-full object-cover brightness-75"
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
