import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Home from "../components/pages/Home"
import PrivateRoute from "../components/PrivateRoute"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/home" component={Home} />
      </Router>
    </Layout>
  )
}

export default App
