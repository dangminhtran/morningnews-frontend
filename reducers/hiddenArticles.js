import { createSlice } from "@reduxjs/toolkit";



export const hiddenArticles = createSlice({
    name: 'hiddenArticles',
    initialState: {
        value: []
    },
    reducers: {
       hidde: (state, action) => {
        // state.value.push(action.payload);
        console.log(action.payload)
        state.value = [...state.value, action.payload]
        },
        show: (state) => {
            state.value= []
        }
    }
});

export const { hidde, show } = hiddenArticles.actions;
export default hiddenArticles.reducer;