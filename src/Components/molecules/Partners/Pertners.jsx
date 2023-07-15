import React from "react";
import './partners.scss'
import Text from '../../atoms/Text/text'
import Partner from "../../atoms/Partner/Partner";

class Partners extends React.Component{
    render(){
        return(
            <div className="partners" id="partners">
                <div className="content">
                   <Text className='partners_h' value='НАШИ ПАРТНЕРЫ'></Text>
                   <div className="partners_description">
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                        <Partner></Partner> 
                   </div>
                   
                </div>

            </div>
        )
    }
}

export default Partners