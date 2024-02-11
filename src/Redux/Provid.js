"use client"
import React from 'react'
import { Provider } from 'react-redux';
import store from './Store';
const Provid = ({children}) => {
  return (
    <div>
      <Provider store={store}>
          {children}
      </Provider>
    </div>
  )
}

export default Provid
