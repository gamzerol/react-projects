import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:imdbID">
          <Movie />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
