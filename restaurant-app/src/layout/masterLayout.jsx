import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { Component } from "react/cjs/react.production.min"
import { Context } from "../store/appContext"

const Master = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const MasterRoute = ({ component: Component, ...others }) => {
    const { store, actions } = useContext(Context)

    if (store.isAuthenticated === false) {
        const user = localStorage.getItem("isAuthenticated")
        if (user !== null) {
            actions.revalidate(JSON.parse(user))
        } else {
            return (
                <Redirect to="/home" />
            )
        }
    }
    return (
        <Route {...others} render={(props) => (
            <Master>
                <Component {...props} />
            </Master>
        )
        }
        />
    )
}

export default MasterRoute;