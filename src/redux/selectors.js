export const selectedCurrent = (state) => state.quiz.quizzes.current;
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
