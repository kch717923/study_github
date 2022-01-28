import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TestCounter from '../componnents/TestCounter';
import { increase, decrease } from '../modules/TestCounter';

const TestCounterContainer = () => {
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch();
    return (
        <TestCounter number={number} onIncrease={() => dispatch(increase())} onDecrease={() => dispatch(decrease())}/>
    );
};

export default TestCounterContainer