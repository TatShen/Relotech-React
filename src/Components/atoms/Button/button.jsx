import React from "react";

class Button extends React.Component{
    render(){
        return(
            <button className={this.props.className}>{this.props.value}</button>
        )
    }
}

export default Button