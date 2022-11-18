import {createSlice} from "@reduxjs/toolkit";
import tuits from '../Tuits/tuits.json';
import {deleteTuitThunk, findTuitsThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../images/nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState,
        extraReducers: {
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
                },
            [findTuitsThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.tuits = payload
                },
            [findTuitsThunk.rejected]:
                (state) => {
                    state.loading = false
                },
            [deleteTuitThunk.fulfilled] :
                (state, { payload }) => {
                    state.loading = false
                    state.tuits = state.tuits
                        .filter(t => t._id !== payload)
                },
        },
        reducers: {
            createTuit(state, action) {
                state.unshift({
                                  ...action.payload,
                                  ...templateTuit,
                                  _id: (new Date()).getTime(),
                              })
            },
            deleteTuit(state, action) {
                const index = state
                    .findIndex(tuit =>
                                   tuit._id === action.payload);
                state.splice(index, 1);
            },

        }
    });

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;