export function Home() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to from-amber-50 to-orange-100 pt-24 px-6">

                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                            SamDu Oshxonasi 🍽️
                        </h1><br />

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Samarqand Davlat Universiteti oshxonasi talabalar va universitet xodimlari uchun mo‘ljallangan qulay va arzon ovqatlanish maskanidir. Bu yerda har kuni turli xil issiq taomlar, milliy va zamonaviy ovqatlar tayyorlanadi. Oshxona menyusida osh, sho‘rva, manti, somsa kabi an’anaviy taomlar bilan bir qatorda salatlar, ichimliklar va shirinliklar ham mavjud.
                        </p><br />

                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-amber-500 text-white h-10 w-50 rounded-xl shadow-md hover:bg-amber-600 transition">
                                Taomlarni ko‘rish
                            </button>

                            <button className="px-6 py-3 border border-amber-500 h-10 w-50 rounded-xl text-amber-600  hover:bg-amber-100 transition">
                                Batafsil
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
        </>
    )
}