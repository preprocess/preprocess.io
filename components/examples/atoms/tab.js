import React from "react"

const Tab = ({ className, ...rest }) => (
    <div className={`segment ${className ? className : ""}`} {...rest}>
        &nbsp;&nbsp;
    </div>
)

export { Tab }
