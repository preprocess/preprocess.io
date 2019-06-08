import React from "react"
import { Link } from "react-router-dom"

const macros = [
    {
        link: "/short-closures",
        term: "short closures",
        definition: 'fn($name) => "hello {$name}"',
    },
    {
        link: "/phpx",
        term: "phpx",
        definition: "print <Header>Hello</Header>",
    },
    {
        link: "/async",
        term: "async",
        definition: "async function photo() {\n  return await fetch();\n}",
    },
    {
        link: "/generics",
        term: "generics",
        definition: "abstract class List[A] {\n  abstract function add(A $item);\n}",
    },
    {
        link: "/property-loaders",
        term: "property loaders",
        definition: 'class Printer {\n  private $driver = app("driver");\n}',
    },
    {
        link: "/parameter-loaders",
        term: "parameter loaders",
        definition: 'function print(\n  Driver $printer = app("driver")\n) {\n  $printer->go();\n}',
    },
    {
        link: "/trailing-commas",
        term: "trailing commas",
        definition: "abstract function abort(\n  int $status,\n  string $message,\n);",
    },
    {
        link: "/optional-catch-type",
        term: "optional catch type",
        definition: "try {\n  risky();\n} catch ($e) {\n  // tell someone!\n}",
    },
    {
        link: "/immutable-classes",
        term: "immutable classes",
        definition:
            "$payment = new immutable class() {\n  private $currency;\n  private $amount;\n};\n\n$payment->withAmount(10);",
    },
    {
        link: "/deferred",
        term: "deferred",
        definition:
            '$file = fopen("./names.txt");\ndefer fclose("./names.txt");\n\nwhile (!feof($file)) {\n  // read the file!\n}',
    },
    {
        link: "/class-accessors",
        term: "class accessors",
        definition:
            "class Payment {\n  private string $currency {\n    get;\n\n    set {\n      $this->currency = valid($value);\n    }\n  }\n}",
    },
]

const Macros = () => (
    <dl className="flex flex-row flex-wrap mt-4">
        {macros.map(macro => (
            <Link
                to={macro.link}
                key={macro.link}
                className="w-full sm:w-1/2 flex flex-col mb-2 no-underline pr-4 pb-2"
            >
                <dt className="flex text-3xl text-gray-100 bg-green-500 px-2 py-1 overflow-hidden">{macro.term}</dt>
                <dd className="flex flex-grow items-center font-mono text-base text-gray-200 bg-green-600 whitespace-pre px-2 py-1 overflow-hidden">
                    {macro.definition}
                </dd>
            </Link>
        ))}
    </dl>
)

export { Macros }
