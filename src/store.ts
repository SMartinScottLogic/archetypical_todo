import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { Reducer as reducer } from './reducer'

export const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware), (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : (f: any) => f))
