import React, { cloneElement } from "react"

const Editor = ({ children, onFinished }) => {
    return <div>{children && cloneElement(children, { onFinished })}</div>
}

export { Editor }
