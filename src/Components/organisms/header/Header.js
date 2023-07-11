import './header.scss'
import React from 'react'
import '../../molecules'
import '../../atoms'

import Menu from '../../molecules/Menu/menu'
import Slogan from '../../molecules/Slogan/slogan'
import Button from '../../atoms/Button/button'

function Header(){
    return(
        <div className='header'>
           <div className='content'>
            <Menu></Menu>
            <Slogan></Slogan>
            <Button className='header_button' value='УЗНАТЬ БОЛЬШЕ'></Button>
           </div>
            
        </div>
    )
}

export default Header