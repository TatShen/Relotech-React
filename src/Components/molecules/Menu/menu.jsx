import './menu.scss'
import React from 'react'
import Logo from '../../atoms/logo/logo'
import Link from '../../atoms/Link/link'

class Menu extends React.Component{
    render(){
        return(
            <div className='menu'>
                <Logo></Logo>
                {(this.props.seo ==='header') ? <ul>
                    <Link name='Главная' href='#'></Link>
                    <Link name='О компании' href='#'></Link>
                    <Link name='Наша команда' href='#'></Link>
                    <Link name='Наши партнеры' href='#'></Link>
                    <Link name='Контакты' href='#'></Link>
                </ul> : 
                <ul>
                    <Link name='ИНФОРМАЦИЯ' href='#'></Link>
                    <Link name='УСЛУГИ' href='#'></Link>
                    <Link name='ССЫЛКИ' href='#'></Link>
                </ul> }            
            </div>
        )
    }
}


export default Menu