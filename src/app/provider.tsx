'use client';

import { ReactNode } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { ParallaxProvider } from 'react-scroll-parallax';

type ProviderProps = {
  children: ReactNode;
};

export default function Provider(props: ProviderProps) {
  const { children } = props;

  return (
    <ThemeProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </ThemeProvider>
  );
}
