import React, { Component } from 'react';

export class CmpHelperChild<P> extends Component<{parent: P}> {
    p: P = this.props.parent

    public getParent = (): P => {
        return this.p;
    }
}