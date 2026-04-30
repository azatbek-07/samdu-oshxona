import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white mt-20 flex justify-around gap-20 items-center px-10 py-10">

      {/* LOGO / ABOUT */}
      <div className="max-w-90">
        <h2 className="text-2xl font-bold text-orange-500 mb-3">
          {t("footer.title")}
        </h2><br />

        <p className="text-gray-400 text-sm">
          {t("footer.description")}
        </p><br />

        <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm mt-5">
          © {new Date().getFullYear()} {t("footer.title")}. {t("footer.rights")}
        </div>
      </div>

      {/* LINKS */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          {t("footer.pages_title")}
        </h3><br />

        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="hover:text-orange-500 cursor-pointer">
            {t("footer.pages.home")}
          </li><br />

          <li className="hover:text-orange-500 cursor-pointer">
            {t("footer.pages.menu")}
          </li><br />

          <li className="hover:text-orange-500 cursor-pointer">
            {t("footer.pages.team")}
          </li><br />

          <li className="hover:text-orange-500 cursor-pointer">
            {t("footer.pages.contact")}
          </li><br />
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          {t("footer.contact_title")}
        </h3><br />

        <p className="text-gray-400 text-sm">
          {t("footer.address")}
        </p><br />

        <p className="text-gray-400 text-sm">
          {t("footer.phone")}
        </p><br />

        <p className="text-gray-400 text-sm">
          {t("footer.email")}
        </p>
      </div>

    </footer>
  );
}