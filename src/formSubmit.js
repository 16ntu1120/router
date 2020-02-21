import React, {Component} from "react";

class FormSubmit extends React.Component{
    render(){
        return(
            <div>
                <p>Form Submitted Successfully {this.props.location.state.data}</p>

            </div>
        );
    }
} 

export default FormSubmit;