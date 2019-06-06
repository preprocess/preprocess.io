import React from "react"

const Container = ({ children, className, ...rest }) => (
    <div className={`relative container mx-auto px-4 py-8 ${className ? className : ""}`} {...rest}>
        {children}
    </div>
)

export { Container }
