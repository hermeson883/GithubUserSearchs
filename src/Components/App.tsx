import { Header } from '../Components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styledComponent/global'
import { defaulThemes } from '../styledComponent/defaultTheme'
import { Form } from './Form'
export function App() {
  return (
    <ThemeProvider theme={defaulThemes}>
      <Header />
      <Form />
      <GlobalStyle />
    </ThemeProvider>
  )
}
