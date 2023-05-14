import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    currentPage: 1,
  },
  reducers: {},
})

export default homeSlice.reducer
