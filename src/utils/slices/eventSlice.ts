import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IEvent } from "../../components/Calendar"

const initialState: { events: string[]} = {
  events: []
}

const eventSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvent(state, action: PayloadAction<string>) {
      state.events.push(action.payload)
    },
    removeEvent(state, action: PayloadAction<IEvent>) {
      state.events = state.events.filter(event => event !== action.payload.toString())
    }
  }

})


export default eventSlice.reducer

export const { addEvent, removeEvent } = eventSlice.actions