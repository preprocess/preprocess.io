import React, { Fragment } from "react"
import { Editor } from "../editor"
import { Banner, Container, Macros } from "./atoms"

const Missing = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "four oh four!"}>
                <Editor showMore={false}>
                    <span>Oops!</span>
                </Editor>
            </Banner>
            <Container>Try one of these links ↓</Container>
            <Container className="pb-32">
                <Macros />
            </Container>
        </Fragment>
    )
}

export { Missing }
