import About from '../../molecules/About/About'
import Partners from '../../molecules/Partners/Pertners'
import Team from '../../molecules/Team/Team'
import './main.scss'
import React from 'react'

class Main extends React.Component{
    render(){
        return(
            <main>
                    <About></About>
                    <Team></Team>
                    <Partners></Partners>
            </main>
                
                    
                
               
                

            
        )
    }
}

export default Main