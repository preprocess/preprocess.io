import React from "react"

const Container = ({ children, className, ...rest }) => (
    <div className={`relative container max-w-4xl mx-auto px-4 mt-8 text-2xl ${className ? className : ""}`} {...rest}>
        {children}
    </div>
)

export { Container }
