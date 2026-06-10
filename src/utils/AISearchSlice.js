import { createSlice } from "@reduxjs/toolkit";

const AISearchSlice= createSlice({
    name:"AISearch",
    initialState:{
        searchResult : null
    },
    reducers:{
        addSearchResult :(state,action)=>{
            state.searchResult = action.payload;
        }

    }
})

export const{addSearchResult}= AISearchSlice.actions;
export default AISearchSlice.reducer;