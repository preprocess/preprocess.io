import React from "react"
import Typing from "react-typing-animation"
import config from "../config"

const ShortClosures = ({ onFinished }) => {
    return <Typing {...{ ...config.typing, onFinishedTyping: onFinished }}>short closures example</Typing>
}

export { ShortClosures }
