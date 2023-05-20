import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventSlice from "../utils/slices/eventSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import currentWeekSlice from "../utils/slices/currentWeekSlice";
import removalStatusSlice from "../utils/slices/removalStatusSlice";


const rootReducer = combineReducers({
  events: eventSlice,
  currentWeek: currentWeekSlice,
  removalStatus: removalStatusSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector