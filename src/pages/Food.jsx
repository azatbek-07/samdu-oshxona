import { Header } from "../components/Header";
export function Food() {
    return (
        <div className="pt-24"> {/* 👈 MUAMMO SHU BILAN HAL BO‘LADI */}
            <Header />

            <section className="px-6 max-w-7xl mx-auto min-h-1/2">
                <div className="grid md:grid-cols-2 gap-10">

                    <div>
                        <img src="/images/osh.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/manti.jpg" alt="" />
                    </div>

                </div>
            </section>

            <section className="px-6 max-w-7xl mx-auto mt-10 min-h-1/2">
                <div className="grid md:grid-cols-2 gap-10 justify-between">

                    <div>
                        <img src="/images/somsa.jpg" alt="" />
                    </div>

                    <div>
                        <img src="/images/shorva1.jpg" alt="" />
                    </div>

                </div>
            </section>
        </div>
    );
}