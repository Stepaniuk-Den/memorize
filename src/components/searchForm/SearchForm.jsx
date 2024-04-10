import { Formik } from "formik";
import { useState } from "react";
import Select from "react-select";
import "./searchForm.scss";
import { selectGrade } from "./stylesSelects";
import Button from "../button/Button";

import { testsData } from "../../data/tests";
import { useDispatch } from "react-redux";
import { setCurrentQuizzes, setTotalQuizzes } from "../../redux/quizSlice";

const SearchForm = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  const dispatch = useDispatch();

  const options = {
    grade: [
      { value: "grade8", label: "8th grade" },
      { value: "grade9", label: "9th grade" },
      { value: "grade10", label: "10th grade" },
    ],
    subject: [
      { value: "chemistry", label: "Chemistry" },
      { value: "english", label: "English" },
      { value: "algebra", label: "Algebra" },
    ],
  };

  const handleGradeChange = (selectedOption) => {
    setSelectedGrade(selectedOption);
    setSelectedSubject(null);
    setSelectedTest(null);
  };

  const handleSubjectChange = (selectedOption) => {
    setSelectedSubject(selectedOption);
    setSelectedTest(null);
  };

  const handleTestChange = (selectedOption) => {
    setSelectedTest(selectedOption);
  };

  const createOptions = (options) => {
    return options.map((option) => ({
      value: option.value,
      label: option.label,
    }));
  };
  const handleClick = (resetForm) => {
    setSelectedGrade(null);
    setSelectedSubject(null);
    setSelectedTest(null);
    resetForm();
  };

  return (
    <div className="searchForm">
      <div className="searchForm__title">
        <p>Please</p>
        <p>
          Choose the{" "}
          {!selectedGrade ? "grade" : !selectedSubject ? "subject" : "test"}
        </p>
      </div>
      <Formik
        initialValues={{ grade: "", subject: "", test: {} }}
        validate={(values) => {
          const errors = {};
          if (!values.grade) {
            errors.grade = "Select grade";
          } else if (!values.subject) {
            errors.subject = "Select subject";
          } else if (!values.test) {
            errors.test = "Select test";
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(setCurrentQuizzes(values));
          dispatch(setTotalQuizzes(values.test.value.length));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <label>
              <Select
                type="text"
                name="grade"
                value={selectedGrade}
                styles={selectGrade}
                placeholder="Select grade"
                onBlur={handleBlur}
                options={createOptions(options.grade)}
                onChange={(selectedOption) => {
                  handleGradeChange(selectedOption);
                  setFieldValue("grade", selectedOption);
                }}
              />
              {!values.grade && (
                <div className="error">
                  {errors.grade && touched.grade && errors.grade}
                </div>
              )}
            </label>
            {values.grade && (
              <label>
                <Select
                  type="text"
                  name="subject"
                  value={selectedSubject}
                  styles={selectGrade}
                  placeholder="Select subject"
                  onBlur={handleBlur}
                  options={createOptions(options.subject)}
                  onChange={(selectedOption) => {
                    handleSubjectChange(selectedOption);
                    setFieldValue("subject", selectedOption);
                  }}
                  isDisabled={!selectedGrade}
                />
                {!values.subject && (
                  <div className="error">
                    {errors.subject && touched.subject && errors.subject}
                  </div>
                )}
              </label>
            )}
            {selectedSubject && (
              <label>
                <Select
                  type="text"
                  name="test"
                  styles={selectGrade}
                  placeholder="Select test"
                  value={selectedTest}
                  options={createOptions(
                    testsData[selectedGrade.value][selectedSubject.value] || []
                  )}
                  onChange={(selectedOption) => {
                    handleTestChange(selectedOption);
                    setFieldValue("test", selectedOption);
                  }}
                  onBlur={handleBlur("test")}
                  isDisabled={!selectedSubject}
                />
                {!values.test && (
                  <div className="error">
                    {errors.test && touched.test && errors.test}
                  </div>
                )}
              </label>
            )}
            <div className="buttonContainer">
              <Button
                text={"Submit"}
                type="submit"
                // onClick={handleClick}
                disabled={!selectedTest || isSubmitting}
                className="btnForm btnSubmit"
              />
              <Button
                text={"Cancel"}
                onClick={() => handleClick(resetForm)}
                disabled={!selectedGrade || isSubmitting}
                className="btnForm btnCancel"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
