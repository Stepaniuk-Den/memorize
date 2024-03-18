import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {
    current: [],
    currentAnswers: [],
    passed: [],
    totalQuizzes: null,
    pagination: {
      quizPerPage: 3,
      displayedQuizzes: [],
      activePage: 1,
    },
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentQuizzes: (state, { payload }) => {
      state.quizzes.current = payload;
    },
    setTotalQuizzes: (state, { payload }) => {
      state.quizzes.totalQuizzes = payload;
    },
    addCurrentAnswers: (state, { payload }) => {
      state.quizzes.currentAnswers.push(payload);
    },
    filterCurrentQuizzes: (state, { payload }) => {
      state.quizzes.current = state.quizzes.current.filter(
        (quiz) => quiz.id !== payload
      );
    },
    setActivePage: (state, { payload }) => {
      state.quizzes.pagination.activePage = payload;
    },
    setDisplayedQuizzes: (state, { payload }) => {
      state.quizzes.pagination.displayedQuizzes = payload;
    },
  },
});

export const {
  setTotalQuizzes,
  setCurrentQuizzes,
  addCurrentAnswers,
  filterCurrentQuizzes,
  setActivePage,
  setDisplayedQuizzes,
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
