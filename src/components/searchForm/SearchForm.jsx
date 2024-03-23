import { Formik } from "formik";
import Select from "react-select";
import "./searchForm.scss";
import { selectGrade } from "./stylesSelects";
import Button from "../button/Button";
// import { useState } from "react";

const SearchForm = () => {
  // const [grade, setGrade] = useState(null);
  // const [subject, setSubject] = useState(null);
  // const [test, setTest] = useState(null);

  const options = {
    grade: [
      { value: "8", label: "8th grade" },
      { value: "9", label: "9th grade" },
      { value: "10", label: "10th grade" },
    ],
    subject: [
      { value: "chemistry", label: "Chemistry" },
      { value: "english", label: "English" },
      { value: "algebra", label: "Algebra" },
    ],
    test: [
      { value: "test 1", label: "Test 1" },
      { value: "test 2", label: "Test 2" },
      { value: "test 3", label: "Test 3" },
    ],
  };

  const handleClick = () => {
    console.log("click");
  };

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div className="searchForm">
      <h1>Please choose the test</h1>
      <Formik
        initialValues={{ grade: "", subject: "", test: "" }}
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
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          // handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label>
              {/* <p>Select Grade</p> */}
              <Select
                type="text"
                name="grade"
                value={defaultValue(options.grade, values.grade)}
                // value={values.grade}
                options={options.grade}
                styles={selectGrade}
                placeholder="Select grade"
                onChange={({ value }) => setFieldValue("grade", value)}
                onBlur={handleBlur}
              />
              {!values.grade && (
                <div className="error">
                  {errors.grade && touched.grade && errors.grade}
                </div>
              )}
            </label>
            {values.grade && (
              <label>
                {/* <p>Select Subject</p> */}
                <Select
                  type="text"
                  name="subject"
                  value={defaultValue(options.subject, values.subject)}
                  options={options.subject}
                  styles={selectGrade}
                  placeholder="Select subject"
                  onChange={({ value }) => setFieldValue("subject", value)}
                  onBlur={handleBlur}
                />
                {!values.subject && (
                  <div className="error">
                    {errors.subject && touched.subject && errors.subject}
                  </div>
                )}
              </label>
            )}
            {values.subject && (
              <label>
                {/* <p>Select Test</p> */}
                <Select
                  type="text"
                  name="test"
                  value={defaultValue(options.test, values.test)}
                  options={options.test}
                  styles={selectGrade}
                  placeholder="Select test"
                  onChange={({ value }) => setFieldValue("test", value)}
                  onBlur={handleBlur}
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
                disabled={isSubmitting}
              />
              <Button
                text={"Cancel"}
                onClick={handleClick}
                disabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
