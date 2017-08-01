import React from 'react';
import PropTypes from 'prop-types';
import TodoElement from './TodoElement';
import { List } from 'immutable';

const TodoLi = ({todos, onRemove}) => {

    const todoList = todos.map((todo, index) => {
        return <TodoElement key={index}
                            {...todo.toJS()}
                            onRemove={onRemove}/>;
    });

    return (
        <ul className="TodoList">
            {todoList}
        </ul>
    );

};


TodoLi.propTypes = {
    todos: PropTypes.instanceOf(List),
    onRemove: PropTypes.func.isRequired
};

TodoLi.defaultProps = {
    todos: [],
    onRemove: () => console.warn('onRemove not defined')
};

export default TodoLi;


