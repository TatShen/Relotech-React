import React from "react";
import './footer.scss'
import Menu from "../../molecules/Menu/menu";
import Text from "../../atoms/Text/text";
import Form from "../../molecules/Form/form";
import Logo from "../../atoms/logo/logo";
import List from "../../atoms/List/list";




class Footer extends React.Component{
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
            <footer id="contact">
                <div className="content">
                {(this.state.windowWidth<=895)?<div className="footer_menu">
                    <Logo></Logo>
                    <div className="footer_list">
                        <List value='ИНФОРМАЦИЯ'></List>
                        <List value='УСЛУГИ'></List>
                        <List value='ССЫЛКИ'></List>
                    </div>
                   

                </div> :<Menu seo='footer'></Menu>}
                    
                    <Form></Form>
                    <Text className='footer_text' value='© 2023  Relotech Solushion. Все права защищены.'></Text>
                </div>
                
            </footer>
        )
    }
}

export default Footer