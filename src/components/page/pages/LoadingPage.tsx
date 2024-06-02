import React, { Component } from 'react';

class LoadingPage extends Component {
    render() {
        /*  return (
             <div className="loading text-center">
                 <img src="/assets/img/circle_loading.gif" style={{width:"40px"}} />
             </div>
         ); */

        return (
            <div className='text-center mt-5'>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default LoadingPage;