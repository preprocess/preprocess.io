import React from "react"
import { LineNumber } from "./line-number"

const Line = ({ children, number, className, ...rest }) => (
    <div className={`line ${className ? className : ""}`} {...rest}>
        {number && <LineNumber>{number}</LineNumber>}
        {children}
    </div>
)

export { Line }
