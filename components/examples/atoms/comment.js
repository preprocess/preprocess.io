import React from "react"

const Comment = ({ children, className }) => <span className={`segment code-comment ${className}`}>{children}</span>

export { Comment }
