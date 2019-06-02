import React, { Component, Fragment } from "react"
import Typing from "react-typing-animation"
import config from "../config"

class ShortClosures extends Component {
    state = { isCompiling: false, isCompiled: false }

    onCompiling = () => {
        const { onUpdate } = this.props

        this.setState(() => ({
            isCompiling: true,
        }))

        setTimeout(() => {
            // give this a bit of time so it seems like it's happening for real
            this.onCompiled()
        }, 1500)

        onUpdate && onUpdate()
    }

    onCompiled = () => {
        const { onUpdate, onFinished } = this.props

        this.setState(() => ({
            isCompiled: true,
        }))

        onUpdate && onUpdate()
        onFinished && onFinished()
    }

    render() {
        const { isCompiling, isCompiled } = this.state
        const { onCompiling } = this

        return (
            <Fragment>
                <Typing {...{ ...config.typing, onFinishedTyping: onCompiling }}>
                    <div className="line">
                        <span className="segment code-line-number">1</span>
                        <span className="segment code-variable">$exclude</span>
                        <span className="segment code-symbol">&nbsp;=</span>
                        <span className="segment code-default">&nbsp;[</span>
                        <span className="segment code-string">"apples"</span>
                        <span className="segment code-default">];</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">2</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">3</span>
                        <span className="segment code-variable">$fruit</span>
                        <span className="segment code-symbol">&nbsp;=</span>
                        <span className="segment code-default">&nbsp;[</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">4</span>
                        <span className="segment code-string">&nbsp;&nbsp;&nbsp;&nbsp;"oranges"</span>
                        <span className="segment code-default">,</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">5</span>
                        <span className="segment code-string">&nbsp;&nbsp;&nbsp;&nbsp;"pears"</span>
                        <span className="segment code-default">,</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">6</span>
                        <span className="segment code-string">&nbsp;&nbsp;&nbsp;&nbsp;"apples"</span>
                        <span className="segment code-default">,</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">7</span>
                        <span className="segment code-string">&nbsp;&nbsp;&nbsp;&nbsp;"grapes"</span>
                        <span className="segment code-default">,</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">8</span>
                        <span className="segment code-variable">];</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">9</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">10</span>
                        <span className="segment code-variable">$filtered</span>
                        <span className="segment code-symbol">&nbsp;=</span>
                        <span className="segment code-name">&nbsp;array_filter</span>
                        <span className="segment code-default">(</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">11</span>
                        <span className="segment code-variable">&nbsp;&nbsp;&nbsp;&nbsp;$fruit</span>
                        <span className="segment code-default">,</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">12</span>
                        <span className="segment code-variable">&nbsp;&nbsp;&nbsp;&nbsp;$next</span>
                        <span className="segment code-symbol">&nbsp;=></span>
                        <span className="segment code-variable">&nbsp;$next</span>
                        <span className="segment code-symbol">&nbsp;!==</span>
                        <span className="segment code-variable">&nbsp;$exclude</span>
                    </div>
                    <div className="line">
                        <span className="segment code-line-number">13</span>
                        <span className="segment code-default">);</span>
                    </div>
                </Typing>
                {isCompiling && (
                    <div className="line mt-4">
                        <div className="segment code-comment">compiling »</div>
                    </div>
                )}
                {isCompiled && (
                    <div className="line mt-4">
                        <div className="segment code-comment">...</div>
                    </div>
                )}
            </Fragment>
        )
    }
}

export { ShortClosures }
