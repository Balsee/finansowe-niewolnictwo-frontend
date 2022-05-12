import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { tw } from 'twind';

export interface ISlider {
  data?: any;
}

export interface ISliderFunctions extends ISlider {}

const Slider: React.FC<ISliderFunctions> = ({ data }) => {
  const styles = {
    slider: tw``,
  };

  return (
    <section className={styles.slider}>
      <Tab.Group>
        <Tab.List>
          {data.map((slide: any) => (
            <Tab key={slide.id}>{slide.attributes.title}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {data.map((slide: any) => (
            <Tab.Panel key={slide.id}>
              <h2>{slide.attributes.title}</h2>
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_ENDPOINT + slide.attributes.image.data[0].attributes.url}
                alt={slide.attributes.image.data[0].attributes.alternativeText}
                width={slide.attributes.image.data[0].attributes.width}
                height={slide.attributes.image.data[0].attributes.height}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Slider;
