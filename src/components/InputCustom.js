import React from 'react';

export default class InputCustom extends React.Component{

    render(){
        return(
            <div className="pure-control-group">
                <label className='centered-text' htmlFor={this.props.id}>{this.props.label}</label> 
                <input className='centered-text' {...this.props} />                  
            </div>
        )
    }
}