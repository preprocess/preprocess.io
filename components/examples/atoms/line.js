import React from "react"
import { LineNumber } from "./line-number"

const Line = ({ children, number, className }) => (
    <div className={`line ${className}`}>
        {number && <LineNumber>{number}</LineNumber>}
        {children}
    </div>
)

export { Line }
