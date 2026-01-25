import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-600/10 to-slate-950"></div>
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⌨️</span>
          <div>
            <p className="text-lg font-semibold">MechaKey</p>
            <p className="text-xs text-slate-400">Mechanical Keyboard Studio</p>
          </div>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#produk"
            className="text-sm text-slate-200 hover:text-white transition"
          >
            Produk
          </a>
          <a
            href="#koleksi"
            className="text-sm text-slate-200 hover:text-white transition"
          >
            Koleksi
          </a>
          <a
            href="#testimoni"
            className="text-sm text-slate-200 hover:text-white transition"
          >
            Testimoni
          </a>
          <button className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
            Masuk
          </button>
        </div>
        <button className="md:hidden rounded-full border border-white/20 px-3 py-2 text-xs">
          Menu
        </button>
      </nav>

      <section className="relative z-10 grid gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:items-center md:px-16">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-200">
            Premium Mechanical Keyboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Bangun setup impian dengan keyboard mechanical yang nyaman dan
            estetik.
          </h1>
          <p className="mt-4 text-slate-300">
            Eksplorasi koleksi keyboard curated dengan sound profile creamy,
            tactile, hingga thocky. Dapatkan pengalaman mengetik terbaik untuk
            kerja dan gaming.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400 transition">
              Belanja Sekarang
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Konsultasi Build
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
            <div>
              <p className="text-2xl font-semibold text-white">1200+</p>
              <p>Pengguna puas</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">4.9/5</p>
              <p>Rata-rata rating</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <img
              src="https://static.wixstatic.com/media/2ea113_7f579151288243569602c08ce6e88ffc~mv2.png/v1/crop/x_739,y_425,w_2420,h_1142/fill/w_821,h_388,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ZRM-61-GR-2%20(4K).png"
              alt="Keyboard mechanical"
              className="h-72 w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-300">Material</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Aluminium CNC
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-slate-300">Stabilizer</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Screw-in Lubed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
