import {combineReducers} from 'redux'
import {all} from 'redux-saga/effects'
import sample from './sample';
import counter,{counterSaga} from './TestCounter'

const rootReducer = combineReducers({
    counter,
    sample
});

export function* rootSaga(){
    yield all([counterSaga()])
}

export default rootReducer