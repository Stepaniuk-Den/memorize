import { Formik } from "formik";
import "./createQuiz.scss";
import Button from "../button/Button";

const CreateQuiz = () => {
  return (
    <div className="createQuiz">
      <Formik
        initialValues={{ title: "", question: "", answer: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          // errors,
          // touched,
          handleBlur,
          handleChange,
          handleSubmit,
          // setFieldValue,
          // isSubmitting,
          // resetForm,
        }) => (
          <form onSubmit={handleSubmit} className="createQuiz__form">
            <label htmlFor="title" className="createQuiz__form--title">
              <p>Enter theme</p>
              <input
                type="text"
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="createQuiz__form--input"
              />
            </label>
            <label htmlFor="question" className="createQuiz__form--question">
              <p>Enter question</p>
              <input
                type="text"
                name="question"
                id="question"
                className="createQuiz__form--input"
              />
            </label>
            <label htmlFor="answer" className="createQuiz__form--answer">
              <p>Enter answer</p>
              <input
                type="text"
                name="answer"
                id="answer"
                className="createQuiz__form--input"
              />
            </label>
            <div className="createQuiz__form--btnContainer">
              <Button text={"Prev"} className="btnForm btnPrev" />
              <Button text={"Next"} className="btnForm btnNext" />
              <Button
                text={"Submit"}
                type="submit"
                className="btnForm btnSubmit"
              />
              <Button text={"Cancel"} className="btnForm btnCancel" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateQuiz;
