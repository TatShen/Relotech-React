import React from "react";
import './footer.scss'
import Menu from "../../molecules/Menu/menu";
import Text from "../../atoms/Text/text";
import Form from "../../molecules/Form/form";




class Footer extends React.Component{
    render(){
        return(
            <footer id="contact">
                <div className="content">
                    <Menu seo='footer'></Menu>
                    <Form></Form>
                    <Text className='footer_text' value='© 2023  Relotech Solushion. Все права защищены.'></Text>
                </div>
                
            </footer>
        )
    }
}

export default Footer