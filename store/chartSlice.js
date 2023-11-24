import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chart: {
    series: [
      {
        name: "Earnings",
        data: [23, 11, 22, 27, 13, 22, 37],
      },
    ],
  },
}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setChart: (state, payload) => {
      let ar = state.chart.series[0].data
      ar.push(payload.payload)
      ar.shift()
      state.chart.series[0].data = ar
    }
  },
})

// Action creators are generated for each case reducer function
export const { setChart } = chartSlice.actions

export default chartSlice.reducer