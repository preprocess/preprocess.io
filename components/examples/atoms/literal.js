import React from "react"

const Literal = ({ children, className, ...rest }) => (
    <div className={`segment code-literal ${className ? className : ""}`} {...rest}>
        {children}
    </div>
)

export { Literal }
