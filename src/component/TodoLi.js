import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class TodoLi extends Component {
//     onClickRemoveBtn() {
//         this.props.handleRemovedData(this.props.todo);
//     }
//
//     render() {
//         return(
//             <li>
//                 <span>{this.props.todo}</span>
//                 <span className="btn-container" onClick={this.onClickRemoveBtn.bind(this)}><a href="#">삭제</a></span>
//             </li>
//         );
//     }
// }

const TodoLi = ({handleRemovedData, todo}) => {
    const onClickRemoveBtn = () => {
        handleRemovedData(todo);
    }

    return (
        <li>
            <span>{todo}</span>
            <span className="btn-container" >
                <a href="#" onClick={onClickRemoveBtn}>삭제</a>
            </span>
        </li>
    );

};


TodoLi.propTypes = {
    handleRemovedData: PropTypes.func.isRequired,
    todo: PropTypes.string.isRequired
};

export default TodoLi;


