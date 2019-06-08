import React, { Fragment } from "react"
import { Editor } from "../editor"
import { Banner, Container } from "./atoms"

const PropertyLoaders = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Property Loaders"}>
                <Editor showMore={false}>
                    <span>coming soon</span>
                </Editor>
            </Banner>
            <Container className="pb-d">This documentation is incomplete.</Container>
        </Fragment>
    )
}

export { PropertyLoaders }
