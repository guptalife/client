import { configureStore } from "@reduxjs/toolkit";
import streamReucer from "./streamSlice";
import userReducer from './userSlice';
const store=configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
    reducer:{
        stream:streamReucer,
        user:userReducer
    }
})

export default store