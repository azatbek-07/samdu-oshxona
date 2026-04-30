export function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20 flex justify-around gap-20 items-center">
            

                {/* LOGO / ABOUT */}
                <div className="max-w-90">
                    <h2 className="text-2xl font-bold text-orange-500 mb-3">
                        SamDu Oshxonasi
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Bizning oshxona — milliy taomlarning eng mazali va sifatli manzili.
                        Har bir taom sevgi bilan tayyorlanadi.
                    </p><br />
                    <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
                        © {new Date().getFullYear()} Milliy Oshxona. Barcha huquqlar himoyalangan.
                    </div>
                </div>

                {/* LINKS */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Sahifalar</h3><br />
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-orange-500 cursor-pointer">Bosh sahifa</li><br />
                        <li className="hover:text-orange-500 cursor-pointer">Menyu</li><br />
                        <li className="hover:text-orange-500 cursor-pointer">Jamoa</li><br />
                        <li className="hover:text-orange-500 cursor-pointer">Aloqa</li><br />
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Aloqa</h3><br />
                    <p className="text-gray-400 text-sm">📍 Samarqand, Uzbekistan</p><br />
                    <p className="text-gray-400 text-sm">📞 +998 90 123 45 67</p><br />
                    <p className="text-gray-400 text-sm">✉️ info@oshxona.uz</p><br />
                </div>
         

            {/* BOTTOM */}

        </footer>
    );
}