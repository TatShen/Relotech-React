import './li.scss'
import React from 'react'

class Link extends React.Component{
   
    render(){
        return(
            <button className='button_link'> 
                <a className='link' href={this.props.href}>{this.props.name}</a>
            </button>
            
        )
    }
}

export default Link