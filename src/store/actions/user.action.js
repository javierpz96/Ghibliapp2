import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async (arg) => {
    try {
        const isValidSlug = arg?.slug ? "/" + arg.slug : "";

        const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films${isValidSlug}`);
        console.log(data);

        return data.length ? data : [data];
    } catch (error) {
        console.error(error);
    }
});

export const resetUsers = createAction("users/resetUsers");
