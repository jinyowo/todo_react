import React, {Component} from 'react';

import Title from '../component/Title';
import AddLi from '../component/AddLi';
import TodoLi from '../component/TodoLi';

/**
 * Container: Todo
 */
class Todo extends Component {
    constructor() {
        super(); // 부모 클래스를 참조하기 위해서
        this.state = {
            text: '',
            todos: []
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    // ajax 통신
    componentDidMount() {
        const text = 'To do list';
        const todos = [
            '이것도 해야 되고',
            '저것도 해야 되고',
            '그것도 해야 되고',
            '언제 다 하나'
        ];

        this.setState((prevState) => {
            return {
                text, // text: text와 가튼 표시
                todos
            }
        })
        console.log('componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    handleAddedData(text) {
        this.setState((prevState) => {
            const {todos} = prevState; // todos = prevState.todos

            todos.push(text);

            return {
                todos
            };
        });
    }

    handleRemovedData(text) {
        this.setState((prevState) => {
            const {todos} = prevState;
            const idx = todos.indexOf(text);

            todos.splice(idx, 1);

            return {
                todos
            };
        });
    }

    render() {
        const todoLi = this.state.todos.map((todo, index) => {
            return <TodoLi key={"todo" + index}
                           todo={todo}
                           handleRemovedData={this.handleRemovedData.bind(this)}/>;
        });

        return (
            <div className="container">
                <Title text={this.state.text}/>
                <AddLi handleAddedData={this.handleAddedData.bind(this)} />
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Todo;