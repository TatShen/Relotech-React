import React from "react";
import './form.scss'
import Text from "../../atoms/Text/text";
import Input from "../../atoms/Input/input";
import Button from "../../atoms/Button/button";

class Form extends React.Component{
    render(){
        return(
            <div className="form">
                <Text className="form_h2" value='Subscribe on our newsletter'></Text>
                <Text className='form_p' value =' Get daily news on upcoming offers from many suppliers all over the world'></Text>
                <div className="input_group">
                    <Input></Input>
                    <Button className='form_button' value='Subscribe'></Button>
                </div>
                
            </div> 
        )
    }
}

export default Form