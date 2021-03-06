import React, { Component, Fragment, createElement } from "react"
import Markdown from "react-markdown"
import { Editor } from "../editor"
import { examples } from "../examples"
import { HourglassHalf, Magic } from "../icons"
import { Banner, Container, Macros } from "./atoms"
import { HomeFooter, HomeIntro, HomeSyntax } from "../../markdown/pages"

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
                    <button disabled={isBusy} onClick={onRandomExample} className="mt-4 text-base button green">
                        {isBusy ? (
                            <Fragment>
                                <HourglassHalf />
                                <span className="ml-2">working the magic...</span>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Magic />
                                <span className="ml-2">do it again!</span>
                            </Fragment>
                        )}
                    </button>
                </Banner>
                <Container>
                    <Markdown source={HomeIntro} />
                </Container>
                <div className="flex w-full relative bg-gray-300 mt-d mb-d pt-d pb-d">
                    <div className="corner white top right" />
                    <div className="corner white bottom right" />
                    <Container>
                        <Macros />
                    </Container>
                </div>
                <div className="flex w-full relative bg-gray-100 pb-d">
                    <Container>
                        <Markdown source={HomeSyntax} />
                        <hr />
                        <Markdown source={HomeFooter} />
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export { Home }
