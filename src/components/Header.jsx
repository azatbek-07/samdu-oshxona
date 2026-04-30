import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md border-b border-slate-200">
                <nav className="max-w-7xl mx-auto flex justify-around items-center h-20 px-6">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-slate-800 tracking-wide">
                        SamDu <span className="text-amber-500">Oshxonasi</span>
                    </h1>

                    {/* Menu */}
                    <div className="flex gap-10 text-lg font-medium text-slate-700">
                        <Link className="hover:text-amber-500 transition" to="/">Asosiy</Link>
                        <Link className="hover:text-amber-500 transition" to="/food">Taomlar</Link>
                        <Link className="hover:text-amber-500 transition" to="/team">Jamoa</Link>
                    </div>

                    {/* Language */}
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded-lg hover:bg-amber-100 transition">EN</button>
                        <button className="px-3 py-1 rounded-lg hover:bg-amber-100 transition">RU</button>
                        <button className="px-3 py-1 rounded-lg bg-amber-400 text-white">UZ</button>
                    </div>

                </nav>
            </header>

        </>
    )
}