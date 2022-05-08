import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPersonajes = createAsyncThunk(
  "personajes/getPersonajes",
  async () => {
    try {
      const { data } = await axios.get(
        "https://ghibliapi.herokuapp.com/people"
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
