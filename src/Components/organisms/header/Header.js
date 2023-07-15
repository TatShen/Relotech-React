import './header.scss'
import React from 'react'
import '../../molecules'
import '../../atoms'

import Menu from '../../molecules/Menu/menu'
import Slogan from '../../molecules/Slogan/slogan'
import Button from '../../atoms/Button/button'

function Header(){
    return(
     <header id='home'>
           <div className='content'>
            <Menu seo='header'></Menu>
            <Slogan></Slogan>
            <a href='#'>
                <Button className='header_button' value='УЗНАТЬ БОЛЬШЕ'></Button>
            </a>
            
           </div>
     </header>        
     
    )
}

export default Header