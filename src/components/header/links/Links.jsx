import PropTypes from "prop-types";

const Links = ({ lang, handleCallBack }) => {
  const items = [
    { en: "Homepage", ua: "Головна" },
    { en: "Go to test", ua: "" },
    { en: "Contact", ua: "" },
    { en: "About Me", ua: "" },
  ];

  return (
    <div className="links">
      {items.map((item) => (
        <a
          href={`/${item.en}`}
          key={item.en}
          onClick={() => handleCallBack(false)}
        >
          {lang === "en" && item.en}
          {lang === "ua" && item.ua}
        </a>
      ))}
    </div>
  );
};

Links.propTypes = {
  handleCallBack: PropTypes.func.isRequired,
  lang: PropTypes.string,
};
export default Links;
