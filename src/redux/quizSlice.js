import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {
    current: [],
    passed: [],
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentQuizzes: (state, { payload }) => {
      state.quizzes.current = payload;
    },
  },
});

export const { setCurrentQuizzes } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
