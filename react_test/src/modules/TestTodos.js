import { createAction, handleActions } from "redux-actions";


const CHANGE_INPUT = 'TestTodos/CHANGE_INPUT';
const INSERT = 'TestTodos/INSERT';
const TOGGLE = 'TestTodos/TOGGLE';
const REMOVE = 'TestTodos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT,input => input)

let id = 3;

export const insert = createAction(INSERT, text => ({
    id:id++,
    text,
    done:false
}))

export const toggle = createAction(TOGGLE, id => id)

export const remove = createAction(REMOVE, id => id)

const initialState = {
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 정신나가',
            done:true
        },
        {
            id:2,
            text:'리덕스 정신나갈뻔',
            done:true
        },
    ]
}

const todos = handleActions(
    {
        [CHANGE_INPUT]:(state, action) => ({...state,input:action.payload}),
        [INSERT] : (state,action) => ({...state,todos:state.todos.concat(action.payload)}),
        [TOGGLE] : (state,action) => ({
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload ? {...todo, done:!todo.done} : todo)
        }),
        [REMOVE] : (state,action) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        })
    },
    initialState
)

export default todos