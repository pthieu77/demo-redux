import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class Name extends Component {
    static propTypes = {
        data: PropTypes.object,
        toggleStatusEvent: PropTypes.func.isRequired
    }

    handleToggle = (e) => {
        this.props.toggleStatusEvent(this.props.data.id);
    }
    
    render(){
        // console.log(this.props.data.isToggle)
        return (
        <h1 onClick={this.handleToggle}>hello {this.props.data.name} tuổi: {this.props.data.age}
         - {(this.props.data.isToggle) ? 'On' : 'Off'}
        </h1>
        );
    }
}


export default Name;