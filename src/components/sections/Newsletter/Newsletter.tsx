import { apply, tw } from 'twind';
import { css } from 'twind/css';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface INewsletter {}

export interface INewsletterFunctions extends INewsletter {}

const Newsletter: React.FC<INewsletterFunctions> = () => {
  const styles = {
    newsletter: {
      base: tw`py(8 sm:(16) lg:(32))`,

      wrapper: tw`flex(& col) gap-y-2`,

      title: tw`text(2xl md:(3xl) lg:(4xl)) font(bold sora)`,
      subtitle: tw`text(xs sm:(sm) md:(lg) lg:(xl)) font(thin publicSans) before::(w-1 h-1 bg-red-500) opacity-50 mb-6`,

      form: tw`
      flex(&) justify-start gap-x-4

      ${css({
        input: apply`p-4 w-full border(& 1) max-w-[376px]`,
        button: apply`w-max px(4 md:(8)) py-4 border(& 1) bg-white text(black) font(semibold)`,
      })}
      `,
    },
  };

  return (
    <section className={styles.newsletter.base}>
      <Wrapper classes={styles.newsletter.wrapper}>
        <h2 className={styles.newsletter.title}>Chcesz wiedzieć więcej na temat finansów?</h2>
        <p className={tw(styles.newsletter.subtitle)}>Podaj nam swój email i zarejestruj się do naszego newslettera.</p>

        <form className={tw(styles.newsletter.form)}>
          <input type="text" placeholder="Enter your email" />
          <button>Submit</button>
        </form>
      </Wrapper>
    </section>
  );
};

export default Newsletter;
