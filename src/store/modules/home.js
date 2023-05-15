import { getHomeGoodPrice } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  async function () {
    const res = await getHomeGoodPrice()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    currentPage: 1,
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload)
      state.goodPriceInfo = payload
    },
  },
})

export const { changeGoodPriceInfo } = homeSlice.actions
export default homeSlice.reducer
