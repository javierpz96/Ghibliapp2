import { configureStore } from "@reduxjs/toolkit";
import { PeopleReducer, UserReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        User: UserReducer,
        People: PeopleReducer,
    },
});
