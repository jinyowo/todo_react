import React from 'react';
import PropTypes from 'prop-types';

const TodoElement = ({text, onRemove}) => {
    return (
        <li>
            <span>{text}</span>
            <span className="btn-container" >
                <a href="" onClick={() => onRemove(text)}>삭 제</a>
            </span>
        </li>
    );
};

TodoElement.propTypes = {
    text: PropTypes.string,
    onRemove: PropTypes.func
};

TodoElement.defaultProps = {
    text: '',
    onRemove: () => console.warn('onRemove not defined')
};

export default TodoElement;
