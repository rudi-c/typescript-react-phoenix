import * as React from "react"
import * as ReactDOM from "react-dom"

import WorldTSX from "./world"

class HelloJSX extends React.Component {
    render() {
        var type = "JSX";
        return (<h1>Hello from {type}!</h1>)
    }
}

export default function render(node) {
    ReactDOM.render(
        (<div>
           <HelloJSX/>
           <WorldTSX/>
         </div>),
        node
    )
}
