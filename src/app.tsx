import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="solomon-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | solomon" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
