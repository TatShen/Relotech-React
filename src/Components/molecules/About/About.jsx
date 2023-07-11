import Text from '../../atoms/Text/text'
import './about.scss'
import React from 'react'

class About extends React.Component{
    render(){
        return(
            <div className='about'>
                <div className='content'>
                    <Text className='about_h' value='О КОМПАНИИ'></Text>
                    <div className='about_description'>
                        <div className='description_img'></div>
                        <div className='description_text'>
                            <Text className="about_text first" value='Разговоры о цифровых продуктах, инновациях в среде образования, ведения блогов' ></Text>
                            <Text className="about_text" value='Дизайн конференция уже шестой год подряд объединяет профессионалов в сфере  цифровых технологий и инноваций, которые делятся своими идеями, полезной информацией о новых продуктах и сервисах'></Text>
                        </div>
                        
                    </div>
                </div>
                
               
            </div>
        )
    }
}

export default About