import React, { Component, Fragment, createElement } from "react"
import { Link } from "react-router-dom"
import { Editor } from "../editor"
import { examples } from "../examples"
import { HourglassHalf, Magic } from "../icons"
import { Banner, Container } from "./atoms"

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
            <Fragment>
                <Banner>
                    <Editor onFinished={onFinishedExample}>{example && createElement(example)}</Editor>
                    <div className="mt-4">
                        {isBusy ? (
                            <button disabled={true}>
                                <HourglassHalf />
                                <span className="ml-2">working the magic...</span>
                            </button>
                        ) : (
                            <button onClick={onRandomExample}>
                                <Magic />
                                <span className="ml-2">do it again!</span>
                            </button>
                        )}
                    </div>
                </Banner>
                <Container style={{ zIndex: 4 }}>
                    <ol>
                        <li>
                            <Link to="/short-closures">short closures documentation</Link>
                        </li>
                        <li>
                            <Link to="/phpx">phpx documentation</Link>
                        </li>
                    </ol>
                </Container>
            </Fragment>
        )
    }
}

export { Home }
