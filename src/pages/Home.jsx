import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to from-amber-50 to-orange-100 pt-24 px-6">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              {t("home.title")}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              {t("home.description")}
            </p>

            <div className="flex gap-4">

              <Link to="/food">
                <button className="px-6 py-3 bg-amber-500 text-white h-10 w-50 rounded-xl shadow-md hover:bg-amber-600 transition">
                  {t("home.btn_food")}
                </button>
              </Link>

              <button className="px-6 py-3 border border-amber-500 h-10 w-50 rounded-xl text-amber-600 hover:bg-amber-100 transition">
                {t("home.btn_more")}
              </button>

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-amber-300 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/images/kitchen.webp"
              alt="kitchen"
              className="relative rounded-3xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}