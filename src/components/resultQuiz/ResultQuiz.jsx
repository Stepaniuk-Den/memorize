import "./resultQuiz.scss";

const ResultQuiz = () => {
  return (
    <div className="resultQuiz">
      <h2>Congratulations !!</h2>
      <div className="resultQUiz__data">
        <div className="resultQUiz__data--rating"></div>
        <div className="resultQUiz__data--wrongAnswers"></div>
      </div>
    </div>
  );
};

export default ResultQuiz;
