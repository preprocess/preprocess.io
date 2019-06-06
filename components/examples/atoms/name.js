import React from "react"

const Name = ({ children, className, ...rest }) => (
    <span className={`segment code-name ${className ? className : ""}`} {...rest}>
        {children}
    </span>
)

export { Name }
