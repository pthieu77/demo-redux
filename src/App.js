import React, {Component} from 'react'
import { Name } from './Name';

import { connect } from 'react-redux';
import { toggleStatusAction } from './actions/action'

class App extends Component {
    handleClickAdd (e) {
	    e.preventDefault();
        console.log(e);
    }

    
    render () {
        // console.log('AppPRops', this.props);
        return (
            <div>
                <div>
                    {this.props.mang.map((e,i) => <Name
                      key={i} data={e} toggleStatusEvent={this.props.toggleStatus}/>)}
                </div>
                <div>
                    {/* <button onClick={this.handleClickAdd.bind(this)}>Add</button> */}
                </div>
            </div>
        );
    }
}

// lấy state cần thiết từ store 
const mapStateToProps = state => ({
    mang: state.mang
  });

  // gọi các action muốn xử lý trong reducer
const mapDispatchToProps = (dispatch) => {
    return {
        toggleStatus: (isToggle) => {
            dispatch(toggleStatusAction(isToggle));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
