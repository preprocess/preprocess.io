import React, { Component, Fragment, createElement } from "react"
import { Link } from "react-router-dom"
import { Editor } from "../editor"
import { examples } from "../examples"
import { HourglassHalf, Magic } from "../icons"

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
                <div className="relative container mx-auto px-4 py-16 md:py-32" style={{ zIndex: 4 }}>
                    <div className="home-banner" />
                    <div className="flex flex-row">
                        <div className="flex flex-col w-full md:w-1/2 leading-tight">
                            <div
                                className="font-semibold text-gray-100"
                                style={{ fontSize: "5rem", mixBlendMode: "screen", zIndex: 6 }}
                            >
                                Pre.
                            </div>
                            <div
                                className="font-semibold text-gray-500 relative"
                                style={{ fontSize: "3rem", mixBlendMode: "screen", zIndex: 6 }}
                            >
                                Syntax you like,
                                <br />
                                that runs where you need
                            </div>
                        </div>
                        <div className="hidden md:flex md:w-1/2 mr-4 flex-col items-center">
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
                        </div>
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
            </Fragment>
        )
    }
}

export { Home }
