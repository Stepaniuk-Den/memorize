export const selectedCurrent = (state) => state.quiz.quizzes.current;
export const selectedPassed = (state) => state.quiz.quizzes.passed;
export const selectedWrongPassed = (state) => state.quiz.quizzes.wrongPassed;
export const selectedCurrentTest = (state) =>
  state.quiz.quizzes.current.test.value;
export const selectedCardWidth = (state) => state.quiz.width.cardWidth;
export const selectedCardHeight = (state) => state.quiz.height.cardHeight;
export const selectedHomePageWidth = (state) => state.quiz.width.homePageWidth;
export const selectedHomePageHeight = (state) =>
  state.quiz.height.homePageHeight;
export const selectedTotalQuizzes = (state) => state.quiz.quizzes.totalQuizzes;
export const selectedCurrentAnswers = (state) =>
  state.quiz.quizzes.currentAnswers;
export const selectedActivePage = (state) =>
  state.quiz.quizzes.pagination.activePage;
export const selectedQuizPerPage = (state) =>
  state.quiz.quizzes.pagination.quizPerPage;
export const selectedDisplayedQuizzes = (state) =>
  state.quiz.quizzes.pagination.displayedQuizzes;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.name;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthId = (state) => state.auth.userId;
export const selectAuthData = (state) => state.auth;
export const selectIsModalOpen = (state) => state.auth.isModalOpen;
