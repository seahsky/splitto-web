import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, ColorSchemeProvider, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === 'light' ? 'dark' : 'light');
  }

  // const theme: MantineThemeOverride = {
  //   colorScheme: 'light',
  //   colors: {
  //     // Primary color
  //     primary: '#ae3ec9',
  
  //     // Secondary colors
  //     secondary: '#5c33b5',
  //     tertiary: '#fe9800',
  
  //     // Background colors
  //     background: '#f7f7f7',
  //     backgroundAlt: '#ffffff',
  //     backgroundHover: '#eeeeee',
  
  //     // Text colors
  //     text: '#333333',
  //     textAlt: '#666666',
  //     textInvert: '#ffffff',
  //     textMuted: '#999999',
  
  //     // Border colors
  //     border: '#cccccc',
  //     borderAlt: '#dddddd',
  
  //     // Status colors
  //     success: '#22bb33',
  //     error: '#dd0000',
  //     warning: '#ffcc22',
  //     info: '#0077dd',
  
  //     // Gradients
  //     gradientPrimary: 'linear-gradient(180deg, #ae3ec9, #5c33b5)',
  //     gradientSecondary: 'linear-gradient(180deg, #5c33b5, #ae3ec9)',
  //   },
  //   shadows: {
  //     sm: '0 2px 6px rgba(0, 0, 0, 0.1)',
  //     md: '0 4px 12px rgba(0, 0, 0, 0.1)',
  //     lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
  //   },
  //   fonts: {
  //     body: 'Open Sans, sans-serif',
  //     heading: 'Poppins, sans-serif',
  //   },
  //   fontSizes: {
  //     xs: 12,
  //     sm: 14,
  //     md: 16,
  //     lg: 20,
  //     xl: 24
  //   },
  //   breakpoints: {
  //     xs: 480,
  //     sm: 768,
  //     md: 992,
  //     lg: 1200,
  //   },
  // };
  

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme,
          primaryColor: 'grape',
          defaultGradient: {
            from: '#ae3ec9',
            to: '#5c33b5',
            deg: 180
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
    </>
  );
}