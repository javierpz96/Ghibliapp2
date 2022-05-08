import { createReducer } from "@reduxjs/toolkit";
import { getPersonajes } from "../actions";

const initialState = {
    list: [],
    loading: "active",
};

export const PeopleReducer = createReducer(initialState, (builder) => {
    builder.addCase(getPersonajes.pending, (state, action) => {
        return {
            ...state,
            loading: "pending",
        };
    });
    builder.addCase(getPersonajes.fulfilled, (state, action) => {
        return {
            ...state,
            loading: "success",
            list: action.payload,
        };
    });
    builder.addCase(getPersonajes.rejected, (state, action) => {
        return {
            ...state,
            loading: "error",
            list: [],
        };
    });
});
