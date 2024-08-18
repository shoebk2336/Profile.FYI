'use client'
import {createStore,combineReducers} from 'redux'
import CartReducer from './CartReducer'
const Root=combineReducers({CartReducer})
export const Store=createStore(Root)