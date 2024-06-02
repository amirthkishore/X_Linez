import React, { Component } from 'react';
interface ThisProps{
    message ?: string;
}


class InternalError extends Component<ThisProps>{
    render() {
        if(this.props.message){
            return ( <h4 className='p-4'>Error: {this.props.message}</h4> );
        }

        return(
           <h4 className='p-4'>Oops! Something went wrong</h4>
        );
    }
}

export default InternalError;