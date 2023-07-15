import './li.scss'
import React from 'react'

class Link extends React.Component{
   
    render(){
        return(
            
            <a className='link' href={this.props.href}>{this.props.name}</a>
        )
    }
}

export default Link