import React from "react"
import { Router, Route } from "react-router-dom"
import { createHashHistory } from "history"
import { Home, ShortClosures } from "./pages"

const history = createHashHistory()

const App = () => {
    return (
        <Router history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/short-closures" exact component={ShortClosures} />
        </Router>
    )
}

export { App }
