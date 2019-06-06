import React from "react"

const Str = ({ children, className, ...rest }) => (
    <div className={`segment code-string ${className ? className : ""}`} {...rest}>
        {children}
    </div>
)

export { Str }
