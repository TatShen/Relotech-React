import React from "react"

class Text extends React.Component{
    render(){
        return(
           <p className={this.props.className}>{this.props.value}</p>
        )
    }
}

export default Text