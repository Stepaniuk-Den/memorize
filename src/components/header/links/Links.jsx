import PropTypes from "prop-types";

const Links = ({ lang, handleCallBack }) => {
  const items = [
    { en: "Homepage", ua: "Головна" },
    { en: "Go to test", ua: "", link: "current" },
    { en: "Create Quiz", ua: "", link: "create" },
    { en: "About Me", ua: "", link: "current" },
  ];

  return (
    <div className="links">
      {items.map((item) => (
        <a
          href={`/${item.link}`}
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
