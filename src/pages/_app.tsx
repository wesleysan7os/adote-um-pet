import type { AppProps } from 'next/app'
import { Box, Theme, ThemeProvider } from '@mui/material'

import { theme } from '../ui/themes/theme'
import { Header } from '../ui/components/Header/Header'
import '../ui/styles/globals.css'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<Theme>(theme);

  return (
    <ThemeProvider theme={mode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header mode={mode} setMode={setMode}/>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
