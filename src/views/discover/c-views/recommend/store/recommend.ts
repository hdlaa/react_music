import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../services/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banner',
  async (args, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBanners(res.banners))
  }
)

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBanners } = recommendSlice.actions
export default recommendSlice.reducer
