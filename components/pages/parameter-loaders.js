import React, { Fragment } from "react"
import { Editor } from "../editor"
import { Banner, Container } from "./atoms"

const ParameterLoaders = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Parameter Loaders"}>
                <Editor showMore={false}>
                    <span>coming soon</span>
                </Editor>
            </Banner>
            <Container className="pb-d">This documentation is incomplete.</Container>
        </Fragment>
    )
}

export { ParameterLoaders }
