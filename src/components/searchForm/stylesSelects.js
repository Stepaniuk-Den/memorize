export const selectGrade = {
  option: (styles) => {
    return {
      ...styles,
      background: "#FFF",

      outline: "none",
      height: "2rem",

      fontSize: "1rem",
      fontWeight: "500",
      color: "rgba(18, 20, 23, 0.50)",

      cursor: "pointer",
      "&:hover": {
        color: "#3470ff",
        fontWeight: "500",
      },
      textAlign: "left",
    };
  },

  control: (styles) => ({
    ...styles,
    cursor: "pointer",
    border: "1px solid rgba(18, 20, 23, 0.2)",
    borderRadius: "0.75rem",
    boxShadow: "none",
    backgroundColor: "#FFF",
    width: "15rem",
    height: "2.5rem",
    padding: 0,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  singleValue: (styles, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 250ms";

    return {
      ...styles,
      opacity,
      transition,
      color: "#3470ff",
      paddingLeft: 16,
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1",
    };
  },

  menu: (styles) => {
    return {
      ...styles,
      background: "#FFF",
      borderRadius: "0.75rem",
      display: "inline-block",
      overflow: "hidden",
      width: "15rem",
      marginLeft: "auto",
      marginRight: "auto",
      top: 40,
      border: "none",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.2)",
    };
  },

  menuList: (styles) => ({
    ...styles,
    "::-webkit-scrollbar": {},
  }),

  placeholder: () => {
    return {
      position: "absolute",
      left: 16,
      color: "#707070",
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1",
    };
  },

  valueContainer: (styles) => ({ ...styles, padding: "0", margin: "0" }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),

  indicators: () => {
    return {
      cursor: "pointer",
    };
  },

  dropdownIndicator: (styles, state) => {
    return {
      ...styles,
      transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      size: "1.25rem",
      color: "#707070",
      "&:hover": {
        color: "#3470ff",
      },
    };
  },

  input: (styles) => {
    return {
      ...styles,
      margin: "0",
      color: "#707070",
      width: "100%",
      paddingLeft: 10,
    };
  },
};
