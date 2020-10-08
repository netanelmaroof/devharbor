import React from "react"
import { navigate } from "gatsby"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "gatsby-plugin-firebase"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [user, loading, error] = useAuthState(firebase.auth())
  if (loading) {
    return <div>Loading..</div>
  }
  if (error) {
    return <div>Err</div>
  }
  if (user && !loading && !error) {
    return <Component {...rest} />
  } else if (user == null && location.pathname !== `/` && !loading && !error) {
    navigate("/")
    return null
  }
}
export default PrivateRoute
