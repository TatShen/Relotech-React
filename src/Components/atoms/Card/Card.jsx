import './card.scss'
import React from 'react'

class Card extends React.Component{
    

    render(){
        return(
            <div className='card' >
                <img src={this.props.img} alt=''></img>
                <div className='description_card'>
                    <p className='name'>{this.props.name}</p>
                    <hr/>
                    <p className='role'>{this.props.role}</p>
                    <hr/>
                </div>
                
            </div>
        )
    }
}

export default Card