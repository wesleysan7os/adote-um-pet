import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'

import { theme } from '../ui/themes/theme'
import { Header } from '../ui/components/Header/Header'
import '../ui/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
