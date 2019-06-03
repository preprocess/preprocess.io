import React, { Component, createElement } from "react"
import { Link } from "react-router-dom"
import { Editor } from "../editor"
import { examples } from "../examples"

class Home extends Component {
    state = { example: undefined, busy: false }

    componentDidMount() {
        setTimeout(() => {
            // give the user a change to recognise the editor...
            this.onRandomExample()
        }, 1000)
    }

    onRandomExample = () => {
        const { example } = this.state

        let next = example

        while (next === example) {
            next = examples[Math.floor(Math.random() * examples.length)]
        }

        this.setState(() => ({
            busy: true,
            example: next,
        }))
    }

    onFinishedExample = () => {
        this.setState(() => ({
            busy: false,
        }))
    }

    render() {
        const { example, busy } = this.state
        const { onRandomExample, onFinishedExample } = this

        return (
            <div>
                <div>
                    <Editor onFinished={onFinishedExample}>{example && createElement(example)}</Editor>
                </div>
                <div>
                    <button onClick={onRandomExample} disabled={busy}>
                        show more
                    </button>
                </div>
                <ol>
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
