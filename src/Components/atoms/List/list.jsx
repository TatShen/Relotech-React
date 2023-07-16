import React from "react";
import './list.scss'


class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isActive: false
        };
      }

    render(){
        console.log(this.state.isActive);
        return(
            <div className="list">
            {this.state.isActive?<ul className="list_ul"></ul>:<button className="list_button" >{this.props.value}</button>}
            </div>
        )
    }
}

export default List




// onClick={this.setState({isActive:!this.state.isActive})}