import { Component } from 'react';

/* export class CmpHelperOptionsAbstract<P extends {p: any}, F> extends Component<{ parent: P, options: F}> {
    cp: P = this.props.parent
    p: P["p"] = this.props.parent.p
} */

export class CmpHelperOptionsAbstract<P, F> extends Component<{ parent: P, options: F }> {
	p: P = this.props.parent
	//o: F = this.props.options
}