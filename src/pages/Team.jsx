import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const chefs = [
  {
    name: "Usta Karim",
    role: "Bosh oshpaz (Osh ustasi)",
    img: "/images/chef1.jpg",
    desc: "20 yillik tajribaga ega, an’anaviy o‘zbek oshining ustasi.",
  },
  {
    name: "Madina opa",
    role: "Manti ustasi",
    img: "/images/chef2.jpg",
    desc: "Eng yumshoq va shirali mantilar tayyorlaydi.",
  },
  {
    name: "Rustam aka",
    role: "Somsa pishiruvchi",
    img: "/images/chef3.jpg",
    desc: "Tandir somsaning maxsus retsepti egasi.",
  },
  {
    name: "Zarina",
    role: "Sho‘rva oshpazi",
    img: "/images/chef4.jpg",
    desc: "Har xil foydali va mazali sho‘rvalar tayyorlaydi.",
  },
];

export function Team() {
  return (
    <>
      <Header />

      <main className="flex flex-col-reverse md:flex-row justify-around items-center min-h-screen px-4 md:px-10 pt-24 gap-10">
        <section className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-center mb-4 text-orange-500">
            Bizning Oshxona Jamoamiz
          </h1><br />
          <p className="text-center text-gray-600 mb-12">
            Har bir taom ortida professional oshpazlar mehnati turadi
          </p><br />

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
                    src={chef.img}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
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
      <Footer/>
    </>
  );
}