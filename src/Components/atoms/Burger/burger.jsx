import React from "react";
import './burger.scss'
import Logo from "../logo/logo";
import Link from "../Link/link";


class Burger extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isActive: false
        }
    }

   

    componentDidMount(){
       
    }

    render(){
        console.log(this.state.isActive);
       return(
        
        this.state.isActive ? <div className="burger_active" >
             <button className="burger_true" onClick={()=>this.setState({isActive:!this.state.isActive})}></button>
             <ul className="burger_ul">
            <Link name="Главная" href="#home"></Link>
            <Link name="О компании" href="#about"></Link>
            <Link name="Наша команда" href="#team"></Link>
            <Link name="Наши партнеры" href="#partners"></Link>
            <Link name="Контакты" href="#contact"></Link>
          </ul>
        </div> :<div className="burger_unactive">
        <Logo></Logo>
        <button className="burger_false" onClick={()=>this.setState({isActive:!this.state.isActive})}>
           
        </button>
        </div>
       )
    }
}

export default Burger