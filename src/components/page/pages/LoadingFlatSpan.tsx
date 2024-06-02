import React, { Component } from 'react';

class LoadingFlatSpan extends Component {
    render() {
        return (
            <span className="loading">
                <img src="/assets/img/loader.gif" />
            </span>
        );
    }
}

export default LoadingFlatSpan;