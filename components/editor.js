import React, { cloneElement, createRef, Component } from "react"
import ResizeObserver from "react-resize-observer"

class Editor extends Component {
    containerRef = createRef()

    onResize = rect => {
        const { containerRef } = this

        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }

    onUpdate = () => {
        const { containerRef } = this

        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }

    render() {
        const { children, onFinished } = this.props
        const { containerRef, onResize, onUpdate } = this

        return (
            <div
                className="flex flex-col shadow-md code-white text-sm font-mono subpixel-antialiased bg-gray-800 px-5 pt-4 rounded leading-normal bg-editor text-editor overflow-hidden editor"
                style={{ width: "36rem", height: "18rem", lineHeight: 1.675 }}
            >
                <div className="flex flex-row mb-4">
                    <span className="h-3 w-3 bg-red-500 rounded-full" />
                    <span className="ml-2 h-3 w-3 bg-orange-300 rounded-full" />
                    <span className="ml-2 h-3 w-3 bg-green-500 rounded-full" />
                </div>
                <div
                    className="flex flex-col whitespace-no-wrap overflow-y-scroll pb-4 relative"
                    style={{ width: "150%", paddingRight: 50 }}
                    ref={containerRef}
                >
                    {children && cloneElement(children, { onFinished, onUpdate })}
                    <ResizeObserver onResize={onResize} />
                </div>
            </div>
        )
    }
}

export { Editor }
