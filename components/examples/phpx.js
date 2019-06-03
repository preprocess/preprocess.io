import React from "react"
import Typing from "react-typing-animation"
import config from "../config"
import { Comment, Keyword, LineNumber, Line, Literal, Name, Str, Tab, Token, Variable } from "./atoms"

const Phpx = ({ onFinished }) => {
    return (
        <Typing {...{ ...config.typing, onFinishedTyping: onFinished }}>
            <Line number={1}>
                <Keyword>namespace</Keyword>
                &nbsp;
                <Literal>App;</Literal>
            </Line>
            <Line>
                <LineNumber>2</LineNumber>
                &nbsp;
            </Line>
            <Line number={3}>
                <Keyword>use</Keyword>
                &nbsp;
                <Keyword>function</Keyword>
                &nbsp;
                <Literal>Pre\Phpx\Html\render;</Literal>
            </Line>
            <Line>
                <LineNumber>4</LineNumber>
                &nbsp;
            </Line>
            <Line number={5}>
                <Keyword>function</Keyword>
                &nbsp;
                <Name>LoginForm</Name>
                <Literal>(</Literal>
                <Variable>$props</Variable>
                <Literal>)</Literal>
                &nbsp;
                <Literal>{"{"}</Literal>
            </Line>
            <Line number={6}>
                <Tab />
                <Token>return</Token>
                &nbsp;
                <Literal>(</Literal>
            </Line>
            <Line number={7}>
                <Tab />
                <Tab />
                <Literal>&lt;</Literal>
                <Token>form</Token>
                <Literal>&gt;</Literal>
            </Line>
            <Line number={8}>
                <Tab />
                <Tab />
                <Tab />
                <Literal>&lt;</Literal>
                <Token>input</Token>
                &nbsp;
                <Token>type=</Token>
                <Literal>{"{"}</Literal>
                <Str>"text"</Str>
                <Literal>{"}"}</Literal>
                &nbsp;
                <Token>name=</Token>
                <Literal>{"{"}</Literal>
                <Str>"email"</Str>
                <Literal>{"}"}</Literal>
                &nbsp;
                <Literal>/&gt;</Literal>
            </Line>
            <Line number={9}>
                <Tab />
                <Tab />
                <Tab />
                <Literal>&lt;</Literal>
                <Token>input</Token>
                &nbsp;
                <Token>type=</Token>
                <Literal>{"{"}</Literal>
                <Str>"password"</Str>
                <Literal>{"}"}</Literal>
                &nbsp;
                <Token>name=</Token>
                <Literal>{"{"}</Literal>
                <Str>"password"</Str>
                <Literal>{"}"}</Literal>
                &nbsp;
                <Literal>/&gt;</Literal>
            </Line>
            <Line number={10}>
                <Tab />
                <Tab />
                <Tab />
                <Literal>&lt;</Literal>
                <Token>input</Token>
                &nbsp;
                <Token>type=</Token>
                <Literal>{"{"}</Literal>
                <Str>"submit"</Str>
                <Literal>{"}"}</Literal>
                &nbsp;
                <Token>value=</Token>
                <Literal>{"{"}</Literal>
                <Str>"go"</Str>
                <Literal>{"}"}</Literal>
                &nbsp;
                <Literal>/&gt;</Literal>
            </Line>
            <Line number={11}>
                <Tab />
                <Tab />
                <Literal>&lt;</Literal>
                <Token>/form</Token>
                <Literal>&gt;</Literal>
            </Line>
            <Line number={12}>
                <Tab />
                <Literal>);</Literal>
            </Line>
            <Line number={13}>
                <Literal>}</Literal>
            </Line>
            <Line>
                <LineNumber>14</LineNumber>
                &nbsp;
            </Line>
            <Line number={15}>
                <Name>render</Name>
                <Literal>(</Literal>
                <Literal>&lt;</Literal>
                <Token>App.LoginForm</Token>
                &nbsp;
                <Literal>/&gt;);</Literal>
            </Line>
            <Typing.Delay ms={config.compiling.delay} />
            <Typing.Speed ms={config.compiling.speed} />
            <Line className="mt-4">
                <Line>
                    <Comment className="no-select">compiling »</Comment>
                </Line>
            </Line>
            <Typing.Delay ms={config.compiling.delay} />
            <Line className="mt-4" number={1}>
                <Keyword>namespace</Keyword>
                &nbsp;
                <Literal>App;</Literal>
            </Line>
            <Line>
                <LineNumber>2</LineNumber>
                &nbsp;
            </Line>
            <Line number={3}>
                <Keyword>use</Keyword>
                &nbsp;
                <Keyword>function</Keyword>
                &nbsp;
                <Literal>Pre\Phpx\Html\render;</Literal>
            </Line>
            <Line>
                <LineNumber>4</LineNumber>
                &nbsp;
            </Line>
            <Line number={5}>
                <Keyword>function</Keyword>
                &nbsp;
                <Name>LoginForm</Name>
                <Literal>(</Literal>
                <Variable>$props</Variable>
                <Literal>)</Literal>
                &nbsp;
                <Literal>{"{"}</Literal>
            </Line>
            <Line number={6}>
                <Tab />
                <Token>return</Token>
                &nbsp;
                <Name>render</Name>
                <Literal>(</Literal>
                <Str>"form"</Str>
                <Literal>,</Literal>
                &nbsp;
                <Literal>[</Literal>
            </Line>
            <Line number={7}>
                <Tab />
                <Tab />
                <Str>"children"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Literal>[</Literal>
            </Line>
            <Line number={8}>
                <Tab />
                <Tab />
                <Tab />
                <Name>render</Name>
                <Literal>(</Literal>
                <Str>"input"</Str>
                <Literal>,</Literal>
                &nbsp;
                <Literal>[</Literal>
            </Line>
            <Line number={9}>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Str>"type"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Str>"text"</Str>
                <Literal>,</Literal>
            </Line>
            <Line number={10}>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Str>"name"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Str>"email"</Str>
                <Literal>,</Literal>
            </Line>
            <Line number={11}>
                <Tab />
                <Tab />
                <Tab />
                <Literal>]),</Literal>
            </Line>
            <Line number={12}>
                <Tab />
                <Tab />
                <Tab />
                <Name>render</Name>
                <Literal>(</Literal>
                <Str>"input"</Str>
                <Literal>,</Literal>
                &nbsp;
                <Literal>[</Literal>
            </Line>
            <Line number={13}>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Str>"type"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Str>"password"</Str>
                <Literal>,</Literal>
            </Line>
            <Line number={14}>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Str>"name"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Str>"password"</Str>
                <Literal>,</Literal>
            </Line>
            <Line number={15}>
                <Tab />
                <Tab />
                <Tab />
                <Literal>]),</Literal>
            </Line>
            <Line number={16}>
                <Tab />
                <Tab />
                <Tab />
                <Name>render</Name>
                <Literal>(</Literal>
                <Str>"input"</Str>
                <Literal>,</Literal>
                &nbsp;
                <Literal>[</Literal>
            </Line>
            <Line number={17}>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Str>"type"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Str>"submit"</Str>
                <Literal>,</Literal>
            </Line>
            <Line number={18}>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
                <Str>"value"</Str>
                &nbsp;
                <Token>=&gt;</Token>
                &nbsp;
                <Str>"go"</Str>
                <Literal>,</Literal>
            </Line>
            <Line number={19}>
                <Tab />
                <Tab />
                <Tab />
                <Literal>]),</Literal>
            </Line>
            <Line number={20}>
                <Tab />
                <Tab />
                <Literal>],</Literal>
            </Line>
            <Line number={21}>
                <Tab />
                <Literal>]);</Literal>
            </Line>
            <Line number={22}>
                <Literal>}</Literal>
            </Line>
            <Line>
                <LineNumber>23</LineNumber>
                &nbsp;
            </Line>
            <Line number={24}>
                <Name>render</Name>
                <Literal>(</Literal>
                <Str>"App\\LoginForm"</Str>
                <Literal>);</Literal>
            </Line>
        </Typing>
    )
}

export { Phpx }
