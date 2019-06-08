import React, { Fragment } from "react"
import { Editor } from "../editor"
import { Banner, Container } from "./atoms"

const OptionalCatchType = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Optional Catch Type"}>
                <Editor showMore={false}>
                    <span>coming soon</span>
                </Editor>
            </Banner>
            <Container className="pb-d">This documentation is incomplete.</Container>
        </Fragment>
    )
}

export { OptionalCatchType }
