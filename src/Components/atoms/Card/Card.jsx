import './card.scss'
import React from 'react'

class Card extends React.Component{
    

    render(){
        return(
            <div className='card' >
                <img src={this.props.img} alt=''></img>
                <p className='name'>{this.props.name}</p>
                <p className='role'>{this.props.role}</p>
            </div>
        )
    }
}

export default Card