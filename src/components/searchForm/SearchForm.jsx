import { Formik } from "formik";
import { useState } from "react";
import Select from "react-select";
import "./searchForm.scss";
import { selectGrade } from "./stylesSelects";
import Button from "../button/Button";

import { testsData } from "../../data/tests";

const SearchForm = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

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

  // const makeAllOptions = (tests) => {
  //   const allOptions = tests.map((test) => ({
  //     grade: {
  //       value: test.grade,
  //       label: test.label,
  //     },
  //     subject: {
  //       value: test.grade,
  //       label: test.label,
  //     },
  //   }));

  //   const uniqueGrade = new Set();
  //   const uniqueSubject = new Set();
  //   const allUniqueOptions = {
  //     uniqGradeOptions: [],
  //     uniqSubjectOptions: [],
  //   };

  //   for (let i = 0; i < allOptions?.length; i++) {
  //     let objGrade = allOptions[i].grade;
  //     let grade = objGrade.label;

  //     if (!uniqueGrade.has(grade)) {
  //       uniqueGrade.add(grade);
  //       allUniqueOptions.uniqGradeOptions.push(objGrade);
  //     }

  //     let objSubject = allOptions[i].subject;
  //     let subject = objSubject.value;

  //     if (!uniqueSubject.has(subject)) {
  //       uniqueSubject.add(subject);
  //       allUniqueOptions.uniqSubjectOptions.push(objSubject);
  //     }
  //   }
  //   allUniqueOptions.uniqSubjectOptions.sort((a, b) => a.label - b.label);

  //   return allUniqueOptions;
  // };

  // const options = makeAllOptions(tests);

  // const defaultValue = (options, value) => {
  //   return options
  //     ? options.find((option) => option.value === value) || ""
  //     : "";
  // };

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
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <label>
              <Select
                type="text"
                name="grade"
                value={selectedGrade}
                // value={defaultValue(options.uniqGradeOptions, values.grade)}
                // value={values.grade}
                // options={options.grade}
                styles={selectGrade}
                placeholder="Select grade"
                // options={options.uniqGradeOptions}
                // onChange={({ value }) => setFieldValue("grade", value)}
                // onBlur={handleBlur}
                options={createOptions(options.grade)}
                onChange={(selectedOption) => {
                  handleGradeChange(selectedOption);
                  // handleChange(selectedOption);
                  setFieldValue("grade", selectedOption);
                }}
                onBlur={handleBlur("grade")}
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
                  // value={defaultValue(
                  //   options.uniqSubjectOptions,
                  //   values.subject
                  // )}
                  // options={options.uniqSubjectOptions}
                  // onChange={({ value }) => setFieldValue("subject", value)}
                  // onBlur={handleBlur}
                  options={createOptions(options.subject)}
                  onChange={(selectedOption) => {
                    handleSubjectChange(selectedOption);
                    // handleChange("subject")(selectedOption);
                    setFieldValue("subject", selectedOption);
                  }}
                  onBlur={handleBlur("subject")}
                  isDisabled={!selectedGrade}
                />
                {!values.subject && (
                  <div className="error">
                    {errors.subject && touched.subject && errors.subject}
                  </div>
                )}
              </label>
            )}
            {/* {values.subject && ( */}
            {selectedSubject && (
              <label>
                <Select
                  type="text"
                  name="test"
                  styles={selectGrade}
                  placeholder="Select test"
                  // value={defaultValue(options.test, values.test)}
                  // options={options.test}
                  // onChange={({ value }) => setFieldValue("test", value)}
                  // onBlur={handleBlur}
                  value={selectedTest}
                  options={createOptions(
                    testsData[selectedGrade.value][selectedSubject.value] || []
                  )}
                  onChange={(selectedOption) => {
                    handleTestChange(selectedOption);
                    // handleChange("test")(selectedOption);
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
                disabled={isSubmitting}
                className="btnSubmit"
              />
              <Button
                text={"Cancel"}
                onClick={() => handleClick(resetForm)}
                disabled={isSubmitting}
                className="btnCancel"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
