import { createReducer } from "@reduxjs/toolkit";
import { getUsers, resetUsers } from "../actions";

const initialState = {
    list: [],
    loading: "active",
};

export const UserReducer = createReducer(initialState, (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
        return {
            ...state,
            loading: "pending",
        };
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
        return {
            ...state,
            loading: "success",
            list: action.payload,
        };
    });
    builder.addCase(getUsers.rejected, (state, action) => {
        return {
            ...state,
            loading: "error",
            list: [],
        };
    });

    //Para resetear el usuario/peliculas

    builder.addCase(resetUsers, (state, action) => {
        return {
            ...state,
            list: [],
        };
    });
});
