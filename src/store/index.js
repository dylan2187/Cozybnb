import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import edtireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: edtireReducer,
  },
})

export default store
