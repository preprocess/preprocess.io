import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createHashHistory } from "history"

import {
    Async,
    ClassAccessors,
    Deferred,
    Generics,
    Home,
    ImmutableClasses,
    Missing,
    OptionalCatchType,
    ParameterLoaders,
    Phpx,
    PropertyLoaders,
    ShortClosures,
    TrailingCommas,
} from "./pages"

const history = createHashHistory()

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/async" component={Async} />
                <Route path="/class-accessors" component={ClassAccessors} />
                <Route path="/deferred" component={Deferred} />
                <Route path="/generics" component={Generics} />
                <Route path="/immutable-classes" component={ImmutableClasses} />
                <Route path="/optional-catch-type" component={OptionalCatchType} />
                <Route path="/parameter-loaders" component={ParameterLoaders} />
                <Route path="/phpx" component={Phpx} />
                <Route path="/property-loaders" component={PropertyLoaders} />
                <Route path="/short-closures" component={ShortClosures} />
                <Route path="/trailing-commas" component={TrailingCommas} />
                <Route component={Missing} />
            </Switch>
        </Router>
    )
}

export { App }
