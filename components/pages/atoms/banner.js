import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Container } from "./container"

const Banner = ({ showTagline, renderTagline, children }) => (
    <div className="flex relative banner">
        <div className="background" />
        <Container>
            <div className="flex flex-col lg:flex-row w-full relative">
                <div className="flex flex-col flex-shrink lg:w-1/2 leading-tight relative">
                    <div className="header-title">
                        <Link to="/" className="bg-blue-600 shadow-background-blue-600 py-1">
                            Pre.
                        </Link>
                    </div>
                    {showTagline && (
                        <div className="header-subtitle">
                            <span className="bg-blue-600 shadow-background-blue-600 py-1">{renderTagline()}</span>
                        </div>
                    )}
                </div>
                <div className="hidden mt-8 lg:mt-0 sm:flex sm:w-full lg:w-1/2 mr-4 flex-col items-center">
                    {children}
                </div>
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
