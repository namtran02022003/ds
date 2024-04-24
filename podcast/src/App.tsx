import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  return (
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
  );
}
