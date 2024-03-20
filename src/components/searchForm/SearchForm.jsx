import { Formik } from "formik";
import Select from "react-select";
import "./searchForm.scss";

const SearchForm = () => {
  const options = {
    class: [{ 8: "8 class" }, { 9: "9 class" }, { 10: "10 class" }],
  };
  return (
    <div className="searchForm">
      <Formik
        initialValues={{ class: "", subject: "", test: "" }}
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
          // errors,
          // touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Select
              type="text"
              name={values.class}
              value={values.class}
              options={options.class}
              // styles={styledSelectBrand}
              placeholder="Enter the text"
              onChange={handleChange}
              // onChange={({ value }) => setFieldValue("make", value)}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
