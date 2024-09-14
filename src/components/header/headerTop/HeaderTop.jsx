
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import style from "./style.module.css";

const HeaderTop = () => {
  const [t, i18n] = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Row>
        <Col lg={8} className={style.languageBlog}>
          <ul className={style.languageList}>
            <li className={style.languageItem}>
              <button type="button"
                className={style.languageButton}
                onClick={() => changeLanguage("en")}
              >
                Рус
              </button>
            </li>
            <li className={style.languageItem}>
              <button type="button"
                className={style.languageButton}
                onClick={() => changeLanguage("hay")}
              >
                Հայ
              </button>
            </li>
            <li className={style.languageItem}>
              <button type="button"
                className={style.languageButton}
                onClick={() => changeLanguage("ru")}
              >
                Eng
              </button>
            </li>
          </ul>
        </Col>
        <Col lg={4} className={style.searchBlog}>
          <button className={style.searchButton}>
            {t("Search")} <CiSearch />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderTop;
