import { Pagination, Stack } from "@mui/material";
import "./muiPagination.scss";
import style from "./muiStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivePage,
  setDisplayedQuizzes,
  setQuizPerPage,
} from "../../redux/quizSlice";
import {
  selectedActivePage,
  selectedCardHeight,
  selectedCurrent,
  selectedHomePageHeight,
  selectedQuizPerPage,
  selectedTotalQuizzes,
} from "../../redux/selectors";
import { useEffect, useMemo } from "react";

const MuiPagination = () => {
  const dispatch = useDispatch();

  const useActivePage = useSelector(selectedActivePage);
  const useQuizPerPage = useSelector(selectedQuizPerPage);
  const useCurrent = useSelector(selectedCurrent);
  const useTotalQuizzes = useSelector(selectedTotalQuizzes);
  const useCardHeight = useSelector(selectedCardHeight);
  const useHomePageHeight = useSelector(selectedHomePageHeight);

  const handleChange = (event, value) => {
    dispatch(setActivePage(value));
  };

  const countPage = Math.ceil(useTotalQuizzes / useQuizPerPage);
  const startIndex = (useActivePage - 1) * useQuizPerPage;
  const endIndex = startIndex + useQuizPerPage;
  const endOfPage = !(
    useTotalQuizzes / useQuizPerPage < useActivePage && useTotalQuizzes
  )
    ? useActivePage * useQuizPerPage
    : useTotalQuizzes;

  const displayedQuizzes = useMemo(() => {
    return useCurrent.slice(startIndex, endIndex);
  }, [useCurrent, startIndex, endIndex]);

  useEffect(() => {
    if (!useTotalQuizzes) return;
    dispatch(setDisplayedQuizzes(displayedQuizzes));
  }, [displayedQuizzes, dispatch, useTotalQuizzes]);

  useEffect(() => {
    if (!useHomePageHeight) return;
    const quizPerPage = (useHomePageHeight - 230 - 32) / useCardHeight;
    console.log(quizPerPage);
    dispatch(setQuizPerPage(quizPerPage));
  }, [useQuizPerPage, dispatch, useHomePageHeight, useCardHeight]);

  return (
    <div className="muiPagination">
      <p>
        Showing quizzes <span>{startIndex + 1}</span> to{" "}
        <span>{endOfPage}</span> of <span>{useCurrent.length}</span>
      </p>
      <Stack>
        <Pagination
          count={countPage}
          page={useActivePage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          sx={style}
          siblingCount={0}
        />
      </Stack>
    </div>
  );
};

export default MuiPagination;
