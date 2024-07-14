import { ThemeProvider } from 'styled-components'

import { PostContextProvider } from './providers/PostContextProvider'
import { UserContextProvider } from './providers/UserContextProvider'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/themes'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <UserContextProvider>
          <PostContextProvider>
            <Router />
          </PostContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
