import React from "react"
import Typing from "react-typing-animation"
import config from "../config"
import { Comment, Keyword, LineNumber, Line, Literal, Name, Str, Tab, Token, Variable } from "./atoms"

const ShortClosures = ({ onFinished }) => (
    <Typing {...{ ...config.typing, onFinishedTyping: onFinished }}>
        <Line number={1}>
            <Variable>$exclude</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Literal>[</Literal>
            <Str>"apples"</Str>
            <Literal>];</Literal>
        </Line>
        <Line>
            <LineNumber>2</LineNumber>
            &nbsp;
        </Line>
        <Line number={3}>
            <Variable>$fruit</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Literal>[</Literal>
        </Line>
        <Line number={4}>
            <Tab />
            <Str>"oranges"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={5}>
            <Tab />
            <Str>"pears"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={6}>
            <Tab />
            <Str>"apples"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={7}>
            <Tab />
            <Str>"grapes"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={8}>
            <Variable>];</Variable>
        </Line>
        <Line>
            <LineNumber>9</LineNumber>
            &nbsp;
        </Line>
        <Line number={10}>
            <Variable>$filtered</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Name>array_filter</Name>
            <Literal>(</Literal>
        </Line>
        <Line number={11}>
            <Tab />
            <Variable>$fruit</Variable>
            <Literal>,</Literal>
        </Line>
        <Line number={12}>
            <Tab />
            <Variable>$next</Variable>
            &nbsp;
            <Token>=></Token>
            <Variable>&nbsp;$next</Variable>
            &nbsp;
            <Token>!==</Token>
            <Variable>&nbsp;$exclude</Variable>
        </Line>
        <Line number={13}>
            <Literal>);</Literal>
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
            <Variable>$exclude</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Literal>[</Literal>
            <Str>"apples"</Str>
            <Literal>];</Literal>
        </Line>
        <Line>
            <LineNumber>2</LineNumber>
            &nbsp;
        </Line>
        <Line number={3}>
            <Variable>$fruit</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Literal>[</Literal>
        </Line>
        <Line number={4}>
            <Tab />
            <Str>"oranges"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={5}>
            <Tab />
            <Str>"pears"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={6}>
            <Tab />
            <Str>"apples"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={7}>
            <Tab />
            <Str>"grapes"</Str>
            <Literal>,</Literal>
        </Line>
        <Line number={8}>
            <Variable>];</Variable>
        </Line>
        <Line>
            <LineNumber>9</LineNumber>
            &nbsp;
        </Line>
        <Line number={10}>
            <Variable>$filtered</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Name>array_filter</Name>
            <Literal>(</Literal>
        </Line>
        <Line number={11}>
            <Tab />
            <Variable>$fruit</Variable>
            <Literal>,</Literal>
        </Line>
        <Line number={12}>
            <Tab />
            <Literal>[</Literal>
        </Line>
        <Line number={13}>
            <Tab />
            <Tab />
            <Literal>(</Literal>
            <Variable>$exclude</Variable>
            &nbsp;
            <Token>=</Token>
            &nbsp;
            <Variable>$exclude</Variable>
            &nbsp;
            <Token>??</Token>
            &nbsp;
            <Token>null</Token>
            <Literal>),</Literal>
        </Line>
        <Line number={14}>
            <Tab />
            <Tab />
            <Str>"fn"</Str>
            &nbsp;
            <Token>=&gt;</Token>
            &nbsp;
            <Keyword>function</Keyword>
            &nbsp;
            <Literal>(</Literal>
            <Variable>$next</Variable>
            <Literal>)</Literal>
            &nbsp;
            <Keyword>use</Keyword>
            &nbsp;
            <Literal>(</Literal>
            <Token>&amp;</Token>
            <Variable>$exclude</Variable>
            <Literal>)</Literal>
            &nbsp;
            <Literal>{"{"}</Literal>
        </Line>
        <Line number={15}>
            <Tab />
            <Tab />
            <Tab />
            <Token>return</Token>
            &nbsp;
            <Variable>$next</Variable>
            &nbsp;
            <Token>!==</Token>
            &nbsp;
            <Variable>$exclude</Variable>
            <Literal>;</Literal>
        </Line>
        <Line number={16}>
            <Tab />
            <Tab />
            <Literal>{"}"},</Literal>
        </Line>
        <Line number={17}>
            <Tab />
            <Literal>][</Literal>
            <Str>"fn"</Str>
            <Literal>]</Literal>
        </Line>
        <Line number={18}>
            <Literal>);</Literal>
        </Line>
    </Typing>
)

export { ShortClosures }
