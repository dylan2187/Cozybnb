import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import edtireReducer from './modules/entire'
// 不管是createSlice创建的reducer 还是普通方法创建的reducer，都可以直接引入
// 只不过普通方法创建的reducer通过index统一导出。

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: edtireReducer,
  },
})

export default store
