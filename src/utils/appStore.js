import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import AIReducer from "./AISearchSlice";
import AISearch from "../components/AISearch";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies : moviesReducer,
        AISearch: AIReducer
    }
})

export default appStore