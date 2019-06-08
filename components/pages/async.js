import React, { Fragment } from "react"
import { Editor } from "../editor"
import { Banner, Container } from "./atoms"

const Async = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Async"}>
                <Editor showMore={false}>
                    <span>coming soon</span>
                </Editor>
            </Banner>
            <Container className="pb-d">This documentation is incomplete.</Container>
        </Fragment>
    )
}

export { Async }
