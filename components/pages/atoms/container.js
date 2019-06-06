import React from "react"

const Container = ({ children, className, ...rest }) => (
    <div
        className={`relative container max-w-3xl mx-auto px-4 py-8 z-4 text-2xl ${className ? className : ""}`}
        {...rest}
    >
        {children}
    </div>
)

export { Container }
