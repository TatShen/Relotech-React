import React from "react";
import '../../atoms'
import './slogan.scss'


import Text from "../../atoms/Text/text";

class Slogan extends React.Component{
    render(){
        return(
            <div className='description'>
                <Text className='slogan' value='Сделаем ваши мечты реальностью'></Text>
                <Text className='h1' value='RELOTECH SOLUTION'></Text>
                <Text className='description_p' value='реализация стартапов с 0 включая  разработку ПО'></Text>

            </div>
        )
    }
}

export default Slogan