import { createStore } from "redux";
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#Increase");
const btnDecrease = document.querySelector("#Decrease");

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () =>({type:TOGGLE_SWITCH});
const increase = difference =>({type:INCREASE,difference});
const decrease = () =>({type:DECREASE})

const initialState ={
    toggl:false,
    counter:0
}

function reducer(state = initialState, action){
    switch (action.type){
        case TOGGLE_SWITCH:
            return{
                ...state,
                toggle:!state.toggle
            }
        case INCREASE:
            return{
                ...state,
                counter:state.counter + action.difference
            }
        case DECREASE:
            return{
                ...state,
                counter:state.counter -1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () =>{
    const state = store.getState();

    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
}
store.subscribe(render);

divToggle.onclick = () =>{
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () =>{
    store.dispatch(increase(1));
}
btnDecrease.onclick = () =>{
    store.dispatch(decrease());
}