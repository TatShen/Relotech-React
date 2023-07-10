import './menu.scss'
import React from 'react'
import Logo from '../../atoms/logo/logo'
import Link from '../../atoms/Link/link'

class Menu extends React.Component{
    render(){
        return(
            <div className='menu'>
                <Logo></Logo>
                <ul>
                    <Link name='Главная' href='#'></Link>
                    <Link name='О компании' href='#'></Link>
                    <Link name='Наша команда' href='#'></Link>
                    <Link name='Наши партнеры' href='#'></Link>
                    <Link name='Контакты' href='#'></Link>
                </ul>
               
            </div>
        )
    }
}


export default Menu