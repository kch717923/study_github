import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/TestCounter';

const TestCounter = () => {

    const number = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increaseAsync())
    const onDecrease = () => dispatch(decreaseAsync())

    return (
        <div>
            <div>{number}</div>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default TestCounter;