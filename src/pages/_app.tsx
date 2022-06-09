import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Box, Theme, ThemeProvider } from '@mui/material'

import { theme } from '../ui/themes/theme'
import { Header } from '../ui/components/Header/Header'
import '../ui/styles/globals.css'
import { HeaderAdmin } from '../ui/components/HeaderAdmin/HeaderAdmin'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mode, setMode] = useState<Theme>(theme);

  return (
    <ThemeProvider theme={mode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {router.pathname === '/' ? <Header mode={mode} setMode={setMode}/> : <HeaderAdmin />}
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
