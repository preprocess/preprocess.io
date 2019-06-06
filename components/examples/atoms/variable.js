import React from "react"

const Variable = ({ children, className, ...rest }) => (
    <span className={`segment code-variable ${className ? className : ""}`} {...rest}>
        {children}
    </span>
)

export { Variable }
