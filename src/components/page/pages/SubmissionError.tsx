import { Component } from 'react';
//import { _utils } from '../../../../lib/utils/_utils';

export class SubmissionError extends Component<{ errorMessage: any, className ?:string }> {
    render() {
        /* if (_utils.isEmpty(this.props.errorMessage)) {
            return null;
        } */

        return (
            <div>
                <div className={`alert alert-danger ${(this.props.className) ? this.props.className : ''}`}>
                    {this.props.errorMessage + ""}
                </div>
            </div>
        );
    }
}
