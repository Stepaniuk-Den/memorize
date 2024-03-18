export const selectedCurrent = (state) => state.quiz.quizzes.current;
export const selectedTotalQuizzes = (state) => state.quiz.quizzes.totalQuizzes;
export const selectedCurrentAnswers = (state) =>
  state.quiz.quizzes.currentAnswers;
export const selectedActivePage = (state) =>
  state.quiz.quizzes.pagination.activePage;
export const selectedQuizPerPage = (state) =>
  state.quiz.quizzes.pagination.quizPerPage;
export const selectedDisplayedQuizzes = (state) =>
  state.quiz.quizzes.pagination.displayedQuizzes;
