import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";

export function Food() {
    const { t } = useTranslation();

    const foods = t("food.items", { returnObjects: true });

    return (
        <>
            <Header />

            <main className="flex flex-col-reverse md:flex-row justify-around items-center min-h-[140vh] px-4 md:px-10 pt-24 gap-10">

                <section className="max-w-6xl mx-auto">

                    <h1 className="text-3xl font-bold text-center mb-10">
                        {t("food.title")}
                    </h1><br />

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {foods.map((food, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                            >

                                {/* IMAGE */}
                                <div className="h-56 w-full overflow-hidden">
                                    <img
                                        src={food.img}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                        alt={food.title}
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">

                                    <h2 className="text-2xl font-bold text-orange-500">
                                        {food.title}
                                    </h2>

                                    <p className="text-gray-600 mt-2">
                                        {food.desc}
                                    </p>

                                    <div className="mt-4 space-y-1 text-gray-700">
                                        {food.prices.map((p, idx) => (
                                            <p key={idx}>{p}</p>
                                        ))}
                                    </div>

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