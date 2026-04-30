import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";

export function Team() {
    const { t } = useTranslation();

    const chefs = t("team.chefs", { returnObjects: true });

    return (
        <>
            <Header />

            <main className="flex flex-col-reverse md:flex-row justify-around items-center min-h-screen px-4 md:px-10 pt-24 gap-10">

                <section className="max-w-6xl mx-auto">

                    {/* TITLE */}
                    <h1 className="text-4xl font-bold text-center mb-4 text-orange-500">
                        {t("team.title")}
                    </h1>

                    <p className="text-center text-gray-600 mb-12">
                        {t("team.subtitle")}
                    </p>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                        {chefs.map((chef, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
                            >

                                {/* IMAGE */}
                                <div className="h-56 w-full">
                                    <img
                                        src={`/images/chef${i + 1}.jpg`}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                        alt={chef.name}
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-4 text-center">

                                    <h2 className="text-xl font-bold text-gray-800">
                                        {chef.name}
                                    </h2>

                                    <p className="text-orange-500 font-medium text-sm mt-1">
                                        {chef.role}
                                    </p>

                                    <p className="text-gray-500 text-sm mt-3">
                                        {chef.desc}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}