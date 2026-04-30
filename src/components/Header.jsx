import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto flex justify-around items-center h-20 px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-800 tracking-wide">
          {t("header.logo_part1")}{" "}
          <span className="text-amber-500">
            {t("header.logo_part2")}
          </span>
        </h1>

        {/* Menu */}
        <div className="flex gap-10 text-lg font-medium text-slate-700">
          <Link className="hover:text-amber-500 transition" to="/">
            {t("header.nav.home")}
          </Link>

          <Link className="hover:text-amber-500 transition" to="/food">
            {t("header.nav.food")}
          </Link>

          <Link className="hover:text-amber-500 transition" to="/team">
            {t("header.nav.team")}
          </Link>
        </div>

        {/* Language */}
        <div className="flex gap-2">
          <button
            onClick={() => changeLang("en")}
            className={`px-3 py-1 rounded-lg hover:bg-amber-100 transition ${
              i18n.language === "en" ? "bg-amber-400 text-white" : ""
            }`}
          >
            EN
          </button>

          <button
            onClick={() => changeLang("ru")}
            className={`px-3 py-1 rounded-lg hover:bg-amber-100 transition ${
              i18n.language === "ru" ? "bg-amber-400 text-white" : ""
            }`}
          >
            RU
          </button>

          <button
            onClick={() => changeLang("uz")}
            className={`px-3 py-1 rounded-lg hover:bg-amber-100 transition ${
              i18n.language === "uz" ? "bg-amber-400 text-white" : ""
            }`}
          >
            UZ
          </button>
        </div>

      </nav>
    </header>
  );
}