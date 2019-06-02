import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createHashHistory } from "history"
import { Home, ShortClosures, Missing, PhpxHtml } from "./pages"

const history = createHashHistory()

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/short-closures" component={ShortClosures} />
                <Route path="/phpx-html" component={PhpxHtml} />
                <Route component={Missing} />
            </Switch>
        </Router>
    )
}

export { App }
