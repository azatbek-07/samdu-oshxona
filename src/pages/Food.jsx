import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const foods = [
    {
        title: "Osh",
        img: "/images/osh.jpg",
        desc: "O‘zbek milliy taomlarining faxri. Guruch, sabzi va go‘sht bilan tayyorlanadi.",
        prices: [
            "Kichik — 18 000 so‘m",
            "O‘rta — 25 000 so‘m",
            "Katta — 32 000 so‘m",
            "Maxsus — 40 000 so‘m",
        ],
    },
    {
        title: "Manti",
        img: "/images/manti.jpg",
        desc: "Bug‘da pishiriladigan yumshoq va shirali taom.",
        prices: ["5 dona — 20 000", "10 dona — 35 000", "15 dona — 50 000"],
    },
    {
        title: "Somsa",
        img: "/images/somsa.jpg",
        desc: "Qarsildoq tandir somsa, ichida go‘sht yoki kartoshka.",
        prices: ["Oddiy — 8 000", "Go‘shtli — 10 000", "Katta — 15 000"],
    },
    {
        title: "Sho‘rva",
        img: "/images/shorva1.jpg",
        desc: "Issiq, foydali va to‘yimli go‘shtli bulon.",
        prices: ["Oddiy — 18 000", "Go‘shtli — 22 000", "Maxsus — 28 000"],
    },
];

export function Food() {
    return (
        <>
            <Header />

            <main className="flex flex-col-reverse md:flex-row justify-around items-center min-h-[140vh] px-4 md:px-10 pt-24 gap-10">
                <section className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-10">
                        Milliy Taomlar
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
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">
                                    <h2 className="text-2xl font-bold text-orange-500">
                                        {food.title}
                                    </h2>

                                    <p className="text-gray-600 mt-2">{food.desc}</p>

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
            <Footer/>
        </>
    );
}