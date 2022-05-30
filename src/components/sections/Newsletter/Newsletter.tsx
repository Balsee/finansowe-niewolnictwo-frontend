import Wrapper from '../../utils/Wrapper/Wrapper';

export interface INewsletter {}

export interface INewsletterFunctions extends INewsletter {}

const Newsletter: React.FC<INewsletterFunctions> = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-32">
      <Wrapper classes="flex flex-col gap-y-2">
        <h2 className="font-sora) text-2xl font-bold md:text-3xl lg:text-4xl">
          Chcesz wiedzieć więcej na temat finansów?
        </h2>
        <p className="mb-6 font-publicSans text-xs font-thin opacity-50 before:h-1 before:w-1 before:bg-red-500 before:content-none sm:text-sm md:text-lg lg:text-xl ">
          Podaj nam swój email i zarejestruj się do naszego newslettera.
        </p>

        <form className="flex justify-start gap-x-4">
          <input
            className="border-1 w-full max-w-[376px] rounded-lg border p-4"
            type="text"
            placeholder="jan@kowalski.pl"
          />
          <button className="border-1 w-max rounded-lg border bg-white px-4 py-4 font-semibold text-black md:px-8">
            Wyślij
          </button>
        </form>
      </Wrapper>
    </section>
  );
};

export default Newsletter;
