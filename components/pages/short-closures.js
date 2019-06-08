import React, { Fragment } from "react"
import Markdown from "react-markdown"
import { Editor } from "../editor"
import { ShortClosures as ShortClosuresExample } from "../examples"
import { Banner, Container } from "./atoms"
import { ShortClosuresCaveats, ShortClosuresIntro } from "../../markdown/pages"

const ShortClosures = () => {
    return (
        <Fragment>
            <Banner renderTagline={() => "Short Closures"}>
                <Editor showMore={false}>
                    <ShortClosuresExample />
                </Editor>
            </Banner>
            <Container>
                <Markdown source={ShortClosuresIntro} />
            </Container>
            <div className="flex w-full relative bg-gray-300 mt-d pt-d pb-d">
                <div className="corner white top right" />
                <Container>
                    <Markdown source={ShortClosuresCaveats} />
                </Container>
            </div>
        </Fragment>
    )
}

export { ShortClosures }
