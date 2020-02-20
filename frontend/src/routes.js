import React from 'react'
import { BrowserRouter, Switch ,Route } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component= { Login } />
            <Route path='/main' component={ Main }/>
          </Switch>
        </BrowserRouter>
    )
}