import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '../ui/themes/theme';
import '../ui/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
