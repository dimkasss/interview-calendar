import { createSlice } from "@reduxjs/toolkit"

const initialState: { currentWeekDiff: number} = {
  currentWeekDiff: 0
}

const currentWeekSlice = createSlice({
  name: "currentWeekDiff",
  initialState: initialState,
  reducers: {
    increaseCurrentWeek(state) {
      state.currentWeekDiff += 1
    },
    decreaseCurrentWeek(state) {
      state.currentWeekDiff -= 1
    },
    resetCurrentWeek(state) {
      state.currentWeekDiff = 0
    }
  }
})

export default currentWeekSlice.reducer

export const { increaseCurrentWeek, decreaseCurrentWeek, resetCurrentWeek } = currentWeekSlice.actions