import withTwindApp from '@twind/next/shim/app';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import twindConfig from '../../twind.config';
import { NextPageWithLayout } from '../../types/page';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default withTwindApp(twindConfig, MyApp);
