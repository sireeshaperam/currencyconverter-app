import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignIn from './components/SignIn'
import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
