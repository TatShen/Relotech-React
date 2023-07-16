import "./menu.scss";
import React from "react";
import Logo from "../../atoms/logo/logo";
import Link from "../../atoms/Link/link";
import "../../../scss/theme/breakpoints.scss";
import Burger from "../../atoms/Burger/burger";

class Menu extends React.Component {
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

  render() {
    console.log(this.state.windowWidth);
    return (
        this.state.windowWidth >= 896 ?
      <div className="menu">
        <Logo></Logo>
        {this.props.seo === "header" ? (
          <ul>
            <Link name="Главная" href="#home"></Link>
            <Link name="О компании" href="#about"></Link>
            <Link name="Наша команда" href="#team"></Link>
            <Link name="Наши партнеры" href="#partners"></Link>
            <Link name="Контакты" href="#contact"></Link>
          </ul>
        ) : (
          <ul>
            <Link name="ИНФОРМАЦИЯ" href="#"></Link>
            <Link name="УСЛУГИ" href="#"></Link>
            <Link name="ССЫЛКИ" href="#"></Link>
          </ul>
        )}
      </div> : <Burger seo={this.props.seo}></Burger>
    );
  }
}

export default Menu;
