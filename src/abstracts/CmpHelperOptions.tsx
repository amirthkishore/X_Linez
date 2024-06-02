import React, { Component } from "react"

export class CmpHelperOptions<P, F> extends Component<{ parent: P, options: F }> {
	p: P = this.props.parent
	//o: F = this.props.options
}