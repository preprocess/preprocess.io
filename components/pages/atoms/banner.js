import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Container } from "./container"

const Banner = ({ showTagline, renderTagline, children }) => (
    <div className="flex w-full relative bg-blue-500 h-min-64">
        <div className="corner white bottom right" />
        <Container className="max-w-6xl">
            <div className="flex flex-col lg:flex-row w-full justify-end lg:justify-start items-start lg:items-center">
                <div className="flex flex-col flex-shrink lg:w-2/5 lg:pr-32 leading-tight">
                    <div className="header-title">
                        <Link to="/" className="bg-blue-600 shadow-background-blue py-1">
                            Pre.
                        </Link>
                    </div>
                    {showTagline && (
                        <div className="header-subtitle">
                            <span className="bg-blue-600 shadow-background-blue py-1">{renderTagline()}</span>
                        </div>
                    )}
                </div>
                <div className="flex mt-8 lg:mt-0 w-full lg:w-3/5 pb-8 lg:pb-0 flex-col items-center">{children}</div>
            </div>
        </Container>
    </div>
)

Banner.propTypes = {
    showTagline: PropTypes.bool,
    renderTagline: PropTypes.func,
}

Banner.defaultProps = {
    showTagline: true,
    renderTagline: () => "Syntax you like, that runs where you need",
}

export { Banner }
