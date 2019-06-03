import React from "react"

const LineNumber = ({ children, className }) => (
    <span className={`segment code-line-number ${className}`}>{children}</span>
)

export { LineNumber }
