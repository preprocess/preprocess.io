import React, { Component, createElement } from "react"
import { Link } from "react-router-dom"
import { Editor } from "../editor"
import { examples } from "../examples"

class Home extends Component {
    timer = undefined

    state = { example: undefined, isBusy: false }

    componentDidMount() {
        this.timer = setTimeout(() => {
            // give the user a change to recognise the editor...
            this.onRandomExample()
        }, 500)
    }

    onRandomExample = () => {
        const { example } = this.state
        const { timer } = this

        clearTimeout(timer)

        let next = example

        while (next === example) {
            next = examples[Math.floor(Math.random() * examples.length)]
        }

        this.setState(() => ({
            isBusy: true,
            example: next,
        }))
    }

    onFinishedExample = () => {
        this.setState(() => ({
            isBusy: false,
        }))
    }

    render() {
        const { example, isBusy } = this.state
        const { onRandomExample, onFinishedExample } = this

        return (
            <div>
                <div className="hidden md:flex flex-col items-center">
                    <Editor onFinished={onFinishedExample}>{example && createElement(example)}</Editor>
                    <div>{isBusy ? "busy" : <button onClick={onRandomExample}>show more</button>}</div>
                </div>
                <ol className="mt-8">
                    <li>
                        <Link to="/short-closures">short closures documentation</Link>
                    </li>
                    <li>
                        <Link to="/phpx">phpx documentation</Link>
                    </li>
                </ol>
            </div>
        )
    }
}

export { Home }
