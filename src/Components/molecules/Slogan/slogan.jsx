import React from "react";
import '../../atoms'
import './slogan.scss'


import Text from "../../atoms/Text/text";

class Slogan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          windowWidth: window.innerWidth,
        };
      }
    
      update=()=>{
        this.setState({windowWidth:window.innerWidth})
      }
    
      componentDidMount(){
        window.addEventListener('resize', this.update)
      }
    
      componentWillUnmount(){
        window.removeEventListener('resize', this.update)
      }

    render(){
        return(
            (this.state.windowWidth>=480)?
            <div className='description'> 
                <Text className='slogan' value='Сделаем ваши мечты реальностью'></Text>
                <Text className='h1' value='RELOTECH SOLUTION'></Text>
                <Text className='description_p' value='реализация стартапов с 0 включая  разработку ПО'></Text>

            </div>:<div className="description_mobile">
            <Text className='slogan' value='Сделаем ваши мечты реальностью'></Text>
            <Text className='h1' value='RELOTECH SOLUTION'></Text>
            
            <Text className='description_p' value='реализация стартапов с 0 включая  разработку ПО'></Text>
            </div>
        )
    }
}

export default Slogan