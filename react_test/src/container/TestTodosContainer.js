import React from 'react';
import { changeInput, insert, toggle, remove } from '../modules/TestTodos';
import TestTodos from '../componnents/TestTodos';
import { useDispatch, useSelector } from 'react-redux';

const TestTodosContainer = () => {
    const {input,todos} = useSelector(({todos}) => ({
        input:todos.input,
        todos:todos.todos
    }))
    const dispatch = useDispatch();
    const onChangeInput = (input) => dispatch(changeInput(input));
    const onInsert = (text) => dispatch(insert(text))
    const onToggle = (id) => dispatch(toggle(id))
    const onRemove = (id) => dispatch(remove(id))
    return (
        <TestTodos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TestTodosContainer