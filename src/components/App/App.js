import React from "react"
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from '../Header'
import Registration from '../Page/Registration'
import PageUsers from '../Page/PageUsers'
import About from '../Page/About'
import './App.scss'

Date.prototype.getFormatDate = function () {
  const addZero = (num) => {
    if (num >= 0 && num <= 9) {
      return '0' + num
    }
    return num
  }

  return `${addZero(this.getDate())}.${this.getMonth() + 1}.${this.getFullYear()}`
}

const App = (props) => {


  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/add-user" exact>
          <Registration />
        </Route>
        <Route path="/user-list" exact>
          <PageUsers />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/">
          <Redirect to="/add-user" />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App