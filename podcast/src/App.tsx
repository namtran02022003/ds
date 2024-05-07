import { useTranslation } from "react-i18next";
import Layouts from "./layouts/index";
import { Outlet } from "react-router-dom";
import "./App.css";
export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <Layouts>
      <>
        <div>
          App
          {t("title")}
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            click
          </button>
        </div>
        <Outlet />
      </>
    </Layouts>
  );
}
