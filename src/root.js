import React from 'react';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise'
import {createStore,applyMiddleware} from 'redux'
import async from 'middlewears/async';
import stateValidator from 'middlewears/stateValidator'
import reducers from 'reducers';

export default(props)=>{
    const {children,initalState={}}=props
    const store =createStore(reducers,initalState,applyMiddleware(async,stateValidator))
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}