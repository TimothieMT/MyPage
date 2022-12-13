import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import {vscDarkPlus} from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage('tsx',tsx);

export const CodeBlock = (props: any) => {
    const {codeString} = props
    return (
        <SyntaxHighlighter language="typescript" style={vscDarkPlus} customStyle={{background: "transparent"}} >
            {codeString}
        </SyntaxHighlighter>
    );
};