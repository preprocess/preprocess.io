import React from "react"

const Token = ({ children, className, ...rest }) => (
    <div className={`segment code-token ${className ? className : ""}`} {...rest}>
        {children}
    </div>
)

export { Token }
