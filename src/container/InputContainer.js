import AddLi from '../component/AddLi';
import * as actions from '../modules';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    todos: state.get('todos')
});

/*
 액션 생성자를 사용하여 액션을 생성하고,
 해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
 */
const mapDispatchToProps = (dispatch) => ({
    onCreate: (text) => dispatch(actions.create(text))
});

const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddLi);

export default InputContainer;