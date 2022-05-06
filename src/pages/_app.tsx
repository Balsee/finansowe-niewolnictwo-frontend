import withTwindApp from '@twind/next/shim/app';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import twindConfig from '../../twind.config';
import { NextPageWithLayout } from '../../types/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}

export default withTwindApp(twindConfig, MyApp);
