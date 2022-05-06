import { NextPage } from 'next';
import { ComponentType, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: any) => ReactNode;
  layout?: ComponentType;
};
