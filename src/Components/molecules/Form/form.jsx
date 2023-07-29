import React from "react";
import './form.scss'
import Text from "../../atoms/Text/text";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

class Form extends React.Component{
    render(){
        return(
            <div className="form">
                <Text className="form_h2" value='Подпишитесь на нашу рассылку новостей!'></Text>
                <Text className='form_p' value =' Получайте новости о новых услугах и предложениях'></Text>
                <div className="input_group">
                    <Input></Input>
                    <Button className='form_button' value='Подписка'></Button>
                </div>
                
            </div> 
        )
    }
}

export default Form