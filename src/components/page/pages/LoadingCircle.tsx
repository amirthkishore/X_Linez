import React, { Component } from 'react';

interface ThisProps { 
    show: boolean; 
    width?: number;
    text_align ?: "left" | "right" | "center";
}

export class LoadingCircle extends Component<ThisProps> {
    render() {
        if (!this.props.show) {
            return null;
        }

        let css = {"width": "40px"};
        if (this.props.width) {
            css = { width: this.props.width + "px" }
        }

        let textAlign = this.props.text_align;
        if(!textAlign){
            textAlign = "center";
        }

        return (
            <div className="loading_circle" style={{textAlign}}>
                <img src="/assets/img/circle_loading.gif" style={css} />
            </div>
        );
    }
}