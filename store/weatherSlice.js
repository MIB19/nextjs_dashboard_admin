import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weather: 32
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, payload) => {
      state.weather = payload.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer