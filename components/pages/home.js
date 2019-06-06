import React, { Component, Fragment, createElement } from "react"
import { Link } from "react-router-dom"
import Highlight, { defaultProps } from "prism-react-renderer"
import { Editor } from "../editor"
import { examples } from "../examples"
import { HourglassHalf, Magic } from "../icons"
import { Banner, Container } from "./atoms"

class Home extends Component {
    timer = undefined

    state = { example: undefined, isBusy: false }

    componentDidMount() {
        this.timer = setTimeout(() => {
            // give the user a change to recognise the editor...
            this.onRandomExample()
        }, 500)
    }

    onRandomExample = () => {
        const { example } = this.state
        const { timer } = this

        clearTimeout(timer)

        let next = example

        while (next === example) {
            next = examples[Math.floor(Math.random() * examples.length)]
        }

        this.setState(() => ({
            isBusy: true,
            example: next,
        }))
    }

    onFinishedExample = () => {
        this.setState(() => ({
            isBusy: false,
        }))
    }

    render() {
        const { example, isBusy } = this.state
        const { onRandomExample, onFinishedExample } = this

        return (
            <Fragment>
                <Banner>
                    <Editor onFinished={onFinishedExample}>{example && createElement(example)}</Editor>
                    <button disabled={isBusy} onClick={onRandomExample} className="mt-4 text-base button gray lg:green">
                        {isBusy ? (
                            <Fragment>
                                <HourglassHalf />
                                <span className="ml-2">working the magic...</span>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Magic />
                                <span className="ml-2">do it again!</span>
                            </Fragment>
                        )}
                    </button>
                </Banner>
                <Container>
                    <div>
                        <strong>Pre</strong> is a preprocessing tool for PHP. It's like&nbsp;
                        <strong>
                            <a href="https://babeljs.io" target="_blank">
                                Babel
                            </a>
                        </strong>
                        , except easier to set up and write your own plugins for. It compiles new syntax to work in new
                        and old versions of PHP.
                    </div>
                    <div className="mt-4">
                        Get started by <strong>adding one of the Pre macros</strong> to your project ↓
                    </div>
                    <div className="mt-4 bg-gray-200 px-2 py-1 font-mono text-xl leading-loose text-gray-700">
                        composer require pre/short-closures
                    </div>
                </Container>
                <div className="flex w-full relative pt-0 lg:pt-8 mt-0 lg:-mt-8">
                    <div className="separator-1" />
                    <Container className="my-8 sm:my-16 lg:my-32 max-w-5xl">
                        <dl className="macros">
                            <Link to="/short-closures" className="macro">
                                <dt>short closures</dt>
                                <dd>{'fn($name) => "hello {$name}"'}</dd>
                            </Link>
                            <Link to="/phpx" className="macro">
                                <dt>phpx</dt>
                                <dd>{"print <Header>Hello</Header>"}</dd>
                            </Link>
                            <Link to="/async" className="macro">
                                <dt>async</dt>
                                <dd>{"async function photo() {\n  return await fetch();\n}"}</dd>
                            </Link>
                            <Link to="/generics" className="macro">
                                <dt>generics</dt>
                                <dd>{"abstract class List[A] {\n  abstract function add(A $item);\n}"}</dd>
                            </Link>
                            <Link to="/property-loaders" className="macro">
                                <dt>property loaders</dt>
                                <dd>{'class Printer {\n  private $driver = app("driver");\n}'}</dd>
                            </Link>
                            <Link to="/parameter-loaders" className="macro">
                                <dt>parameter loaders</dt>
                                <dd>
                                    {'function print(\n  Driver $printer = app("driver")\n) {\n  $printer->go();\n}'}
                                </dd>
                            </Link>
                            <Link to="/trailing-commas" className="macro">
                                <dt>trailing commas</dt>
                                <dd>{"abstract function abort(\n  int $status,\n  string $message,\n);"}</dd>
                            </Link>
                            <Link to="/optional-catch-type" className="macro">
                                <dt>optional catch type</dt>
                                <dd>{"try {\n  risky();\n} catch ($e) {\n  // tell someone!\n}"}</dd>
                            </Link>
                            <Link to="/immutable-classes" className="macro">
                                <dt>immutable classes</dt>
                                <dd>
                                    {
                                        "$payment = new immutable class() {\n  private $currency;\n  private $amount;\n};\n\n$payment->withAmount(10);"
                                    }
                                </dd>
                            </Link>
                            <Link to="/deferred" className="macro">
                                <dt>deferred</dt>
                                <dd>
                                    {
                                        '$file = fopen("./names.txt");\ndefer fclose("./names.txt");\n\nwhile (!feof($file)) {\n  // read the file!\n}'
                                    }
                                </dd>
                            </Link>
                            <Link to="/class-accessors" className="macro">
                                <dt>class accessors</dt>
                                <dd>
                                    {
                                        "class Payment {\n  private string $currency {\n    get;\n\n    set {\n      $this->currency = valid($value);\n    }\n  }\n}"
                                    }
                                </dd>
                            </Link>
                        </dl>
                    </Container>
                </div>
                <div className="flex w-full relative pt-0 lg:pt-8 h-64 mt-0 lg:-mt-8" style={{ minHeight: 600 }}>
                    <div className="separator-2" />
                    <Container className="text-gray-300">footer...</Container>
                </div>
            </Fragment>
        )
    }
}

export { Home }
