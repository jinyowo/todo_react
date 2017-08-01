import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../modules';

import Title from '../component/Title';
import InputContainer from './InputContainer';
import TodoContainer from './TodoContainer';

/**
 * Container
 */
class Todo extends Component {
    render() {
        const { onCreate } = this.props;

        return (
            <div className="container">
                <Title />
                <InputContainer />
                <hr/>
                <TodoContainer />
            </div>
        );
    }
}

// 액션함수 준비
const mapDispatchToProps = (dispatch) => ({
    onCreate: (text) => dispatch(actions.create(text)),
    onRemove: (text) => dispatch(actions.remove(text))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapDispatchToProps)(Todo);