import React from "react"

const LineNumber = ({ children, className, ...rest }) => (
    <span className={`segment code-line-number ${className ? className : ""}`} {...rest}>
        {children}
    </span>
)

export { LineNumber }
