import React, { Fragment } from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createHashHistory } from "history"
import { Home, Missing, Phpx, ShortClosures } from "./pages"

const history = createHashHistory()

const App = () => {
    return (
        <Fragment>
            <div className="home-header-outer">
                <div className="home-header-inner" />
            </div>
            <div className="relative container mx-auto px-4 py-32" style={{ zIndex: 4 }}>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/phpx" component={Phpx} />
                        <Route path="/short-closures" component={ShortClosures} />
                        <Route component={Missing} />
                    </Switch>
                </Router>
            </div>
        </Fragment>
    )
}

export { App }
