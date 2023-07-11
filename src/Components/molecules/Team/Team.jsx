import Card from '../../atoms/Card/Card'
import Text from '../../atoms/Text/text'
import './team.scss'
import React from 'react'

class Team extends React.Component{
    render(){
        return(
            <div className='team'>
                <div className='content'>
                    <Text className='text_h' value='НАША КОМАНДА'></Text>
                    <div className='team_description'>
                        <Card name='Яна Воронежская' role='Учредитель' img='src/assets/images/team1.png'></Card>
                        <div className='team_text'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team