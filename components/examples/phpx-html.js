import React from "react"
import Typing from "react-typing-animation"
import config from "../config"

const PhpxHtml = ({ onFinished }) => {
    return <Typing {...{ ...config.typing, onFinishedTyping: onFinished }}>phpx html example</Typing>
}

export { PhpxHtml }
