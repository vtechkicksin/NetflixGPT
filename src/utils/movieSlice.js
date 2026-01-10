import { createSlice } from "@reduxjs/toolkit"

const moviewSlice = createSlice({
    name: 'moview',
    initialState: {
        nowPlayingMovies: null
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        }
    }   
})

export const { addNowPlayingMovies } = moviewSlice.actions;

export default moviewSlice.reducer;