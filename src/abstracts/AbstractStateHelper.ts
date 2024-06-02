import { Component } from "react";

export abstract class AbstractStateHelper<T extends Component>{
    ctx:T;
    constructor(ctx:T){
        this.ctx = ctx;  
    }

    getContext = () => {
        return this.ctx;
    }

    getState = () : T["state"] => {
        return this.ctx.state;
    }

    changeState = (newState:any, callback ?:any) =>{
        this.getContext().setState(newState, () => {
            if(callback){
                callback();
            }
        });
    } 

   
    //basic html input
    basicInputChange = (name: string, value: any) => {
        if (!name) { return; }
        let newState = {
            ...this.getState() as any,
            [name]: value
        };

        this.changeState(newState);
    }

    inputChange = (e:any) => {
        this.basicInputChange(e.target.name, e.target.value);
    }

    checkBoxChange = (e:any) => {
        this.basicInputChange(e.target.name, e.target.checked);
    }
}