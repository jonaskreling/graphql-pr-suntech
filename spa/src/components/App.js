import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { HomePage, UsersPage, UserPage, LoginPage, NotFoundPage } from 'components'
import theme from './themes/default'
import history from './history'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={UsersPage} exact />
            <Route path="/usuario" component={UserPage} exact />
            <Route path="/home" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
