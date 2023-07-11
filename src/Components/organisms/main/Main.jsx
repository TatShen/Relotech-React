import About from '../../molecules/About/About'
import Team from '../../molecules/Team/Team'
import './main.scss'
import React from 'react'

class Main extends React.Component{
    render(){
        return(
            <div className='main'>
                
                    <About></About>
                    <Team></Team>
                    <div className='partners'></div>
                
               
                

            </div>
        )
    }
}

export default Main