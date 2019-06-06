import React from "react"

const Comment = ({ children, className, ...rest }) => (
    <span className={`segment code-comment ${className ? className : ""}`} {...rest}>
        {children}
    </span>
)

export { Comment }
