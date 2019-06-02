import React from "react"
import { Link } from "react-router-dom"
import { Editor } from "../editor"
import { ShortClosures } from "../examples"

const Home = () => {
    return (
        <div>
            <Editor>
                <ShortClosures />
            </Editor>
            <Link to="/short-closures">short closures documentation</Link>
        </div>
    )
}

export { Home }
