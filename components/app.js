import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createHashHistory } from "history"
import { Home, Missing, Phpx, ShortClosures } from "./pages"

const history = createHashHistory()

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/phpx" component={Phpx} />
                <Route path="/short-closures" component={ShortClosures} />
                <Route component={Missing} />
            </Switch>
        </Router>
    )
}

export { App }
