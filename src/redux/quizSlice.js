import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {
    current: {
      grade: null,
      subject: null,
      test: {},
    },
    currentAnswers: [],
    passed: [],
    wrongPassed: [],
    totalQuizzes: null,
    pagination: {
      quizPerPage: 3,
      displayedQuizzes: [],
      activePage: 1,
    },
  },
  width: {
    cardWidth: 320,
    homePageWidth: null,
  },
  height: {
    cardHeight: 160,
    homePageHeight: null,
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCardHeight: (state, { payload }) => {
      state.height.cardHeight = payload;
    },
    setHomePageHeight: (state, { payload }) => {
      state.height.homePageHeight = payload;
    },
    setCardWidth: (state, { payload }) => {
      state.width.cardWidth = payload;
    },
    setHomePageWidth: (state, { payload }) => {
      state.width.homePageWidth = payload;
    },
    setCurrentQuizzes: (state, { payload }) => {
      state.quizzes.current = payload;
    },
    setPassedQuizzes: (state, { payload }) => {
      state.quizzes.passed.push(payload);
    },
    setWrongPassedQuizzes: (state, { payload }) => {
      state.quizzes.wrongPassed.push(payload);
    },
    setTotalQuizzes: (state, { payload }) => {
      state.quizzes.totalQuizzes = payload;
    },
    addCurrentAnswers: (state, { payload }) => {
      state.quizzes.currentAnswers.push(payload);
    },
    filterCurrentQuizzes: (state, { payload }) => {
      state.quizzes.current.test.value =
        state.quizzes.current.test.value.filter((quiz) => quiz.id !== payload);
    },
    setActivePage: (state, { payload }) => {
      state.quizzes.pagination.activePage = payload;
    },
    setDisplayedQuizzes: (state, { payload }) => {
      state.quizzes.pagination.displayedQuizzes = payload;
    },
    setQuizPerPage: (state, { payload }) => {
      state.quizzes.pagination.quizPerPage = payload;
    },
  },
});

export const {
  setCardHeight,
  setHomePageHeight,
  setCardWidth,
  setHomePageWidth,
  setTotalQuizzes,
  setCurrentQuizzes,
  addCurrentAnswers,
  filterCurrentQuizzes,
  setActivePage,
  setDisplayedQuizzes,
  setQuizPerPage,
  setPassedQuizzes,
  setWrongPassedQuizzes,
} = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
