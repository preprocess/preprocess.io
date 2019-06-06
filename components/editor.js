import React, { cloneElement, createRef, Component } from "react"
import PropTypes from "prop-types"

class Editor extends Component {
    static propTypes = {
        showMore: PropTypes.bool,
    }

    static defaultProps = {
        showMore: true,
    }

    ref = createRef()

    height = null

    componentDidMount() {
        this.observer = setInterval(() => {
            const { ref, height } = this

            if (ref.current && ref.current.scrollHeight !== height) {
                ref.current.scrollTop = ref.current.scrollHeight
                this.height = ref.current.scrollHeight
            }
        }, 50)
    }

    componentWillUnmount() {
        clearTimeout(this.observer)
    }

    render() {
        const { children, showMore, onFinished } = this.props
        const { ref } = this

        return (
            <div className={`flex flex-col editor ${showMore ? "show-more" : ""}`}>
                <div className="flex flex-row mb-4">
                    <span className="h-3 w-3 bg-red-500 rounded-full" />
                    <span className="ml-2 h-3 w-3 bg-orange-300 rounded-full" />
                    <span className="ml-2 h-3 w-3 bg-green-500 rounded-full" />
                </div>
                <div
                    ref={ref}
                    className="flex flex-col whitespace-no-wrap overflow-y-scroll overflow-x-hidden pb-4 relative"
                    style={{ width: "150%" }}
                >
                    {children && cloneElement(children, { onFinished })}
                </div>
            </div>
        )
    }
}

export { Editor }
