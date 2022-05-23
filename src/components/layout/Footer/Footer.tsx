import { apply, tw } from 'twind';
import { css } from 'twind/css';
import Separator from '../../utils/Separator/Separator';
import Wrapper from '../../utils/Wrapper/Wrapper';

export interface IFooter {}

export interface IFooterFunctions extends IFooter {}

const Footer: React.FC<IFooterFunctions> = () => {
  const styles = {
    footer: {
      base: tw`font-publicSans`,

      wrapper: tw`flex flex-col gap-y-4`,

      top: {
        base: tw`flex(& col sm:(row)) sm:justify-between gap(y(8) sm:(x(8))) mb-8`,

        logo: tw`text(xl) font(sora bold)`,

        lists: tw`flex justify-start gap(x(8 md:(32) lg:(48) xl:(64)))`,
        list: tw`
          flex flex-col gap-y-4

          ${css({
            span: apply`opacity-50`,
            ul: apply`flex flex-col gap-y-1`,
          })}
        `,
      },

      bottom: tw`
      flex flex-col mb-8

      ${css({
        span: apply`text(xs) opacity-50`,
      })}
      `,
    },
  };

  return (
    <footer className={styles.footer.base}>
      <Wrapper classes={styles.footer.wrapper}>
        <div className={tw(styles.footer.top.base)}>
          <h2 className={styles.footer.top.logo}>
            Finansowe <span>Niewolnictwo</span>
          </h2>

          <div className={tw(styles.footer.top.lists)}>
            <div className={tw(styles.footer.top.list)}>
              <span>Links</span>

              <ul>
                <li>Strona Główna</li>
                <li>Blog</li>
                <li>Sklep</li>
              </ul>
            </div>

            <div className={tw(styles.footer.top.list)}>
              <span>Resources</span>

              <ul>
                <li>Polityka Prywatności</li>
                <li>Polityka plików Cookies</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className={tw(styles.footer.bottom)}>
          <span>&copy;2022. By Dawid Seipold.</span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
