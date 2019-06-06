import React, { Fragment } from "react"
import { Editor } from "../editor"
import { ShortClosures as ShortClosuresExample } from "../examples"
import { Banner, Container } from "./atoms"

const ShortClosures = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Short Closures"}>
                <Editor showMore={false}>
                    <ShortClosuresExample />
                </Editor>
            </Banner>
            <Container>&nbsp;</Container>
        </Fragment>
    )
}

export { ShortClosures }
