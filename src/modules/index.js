/**
 * Action, Reducer 통합 모듈
 */
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

/**
 * Action Type
 */
const CREATE = 'todo/CREATE';
const REMOVE = 'todo/REMOVE';

/**
 * Action Constructor
 */
export const create = createAction(CREATE);         // text
export const remove = createAction(REMOVE);         // text

/**
 * Initial State
 */
const initialState = Map({
    todos: List([ ])
});

export default handleActions({
    [CREATE]: (state, action) => {
        const todos = state.get('todos');

        return state.set('todos', todos.push(
            action.payload
        ));
    },
    [REMOVE]: (state, action) => {
        const todos = state.get('todos');

        return state.set('todos', todos.splice(
            todos.indexOf(action.payload),
            1
        ));
    },
}, initialState);

