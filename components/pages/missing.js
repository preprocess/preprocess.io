import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { Banner, Container, Macros } from "./atoms"

const Missing = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "four oh four!"} />
            <Container>Try of of these links ↓</Container>
            <Container>
                <Macros />
            </Container>
        </Fragment>
    )
}

export { Missing }
