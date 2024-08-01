import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/slices/todoSlice'


const store = configureStore({
    reducer: todoReducer,
})

export default store;



