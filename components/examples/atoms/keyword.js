import React from "react"

const Keyword = ({ children, className, ...rest }) => (
    <span className={`segment code-keyword ${className ? className : ""}`} {...rest}>
        {children}
    </span>
)

export { Keyword }
