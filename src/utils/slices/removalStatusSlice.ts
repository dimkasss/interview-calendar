import { createSlice } from "@reduxjs/toolkit"
import { IEvent } from "../../components/Calendar"

const initialState: { eventToRemove: null | IEvent } = {
  eventToRemove: null
}

const removalStatusSlice = createSlice({
  name: "removalStatus",
  initialState: initialState,
  reducers: {
    setEventToRemove(state, action) {
      state.eventToRemove = action.payload
    },
    dropEventToRemove(state) {
      state.eventToRemove = null
    }
  }
})

export default removalStatusSlice.reducer

export const { setEventToRemove, dropEventToRemove } = removalStatusSlice.actions