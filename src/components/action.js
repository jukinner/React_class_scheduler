import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {

    handleAction = function() {
        this.props.onClick()

        // document.getElementById('action').classList.add('')
    }.bind(this);

    render() {
        return (
            <a 
                id="action"
                onClick={() => this.props.onClick()} 
                className={`${this.props.className} action`}>

            </a>
        )
    }
}
// return (
//     <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
//         { Icon('fas fa-plus-circle') }
//         {/* fas fa-times-circle */}
//     </button>
// )

export default Action;