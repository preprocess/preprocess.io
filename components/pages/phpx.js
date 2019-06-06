import React, { Fragment } from "react"
import { Editor } from "../editor"
import { Phpx as PhpxExample } from "../examples"
import { Banner, Container } from "./atoms"

const Phpx = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Phpx"}>
                <Editor showMore={false}>
                    <PhpxExample />
                </Editor>
            </Banner>
            <Container>&nbsp;</Container>
        </Fragment>
    )
}

export { Phpx }
