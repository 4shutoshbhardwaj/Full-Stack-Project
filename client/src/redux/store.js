import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {todosRducer} from './reducers/todosRducer';

const reducer=combineReducers({
    todos:todosRducer
})

const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;