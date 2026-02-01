import React, { useState, useMemo } from "react";
import Header from "./components/header.jsx";
import ProductFilter from "./components/ProductFilter";
import ProductCard from "./components/ProductCard";
import TestimonialCard from "./components/TestimonialCard";
import { products, perks, reviews, formatPrice } from "./data/products";

function App() {
  const [activeLayout, setActiveLayout] = useState("Semua");
  const [query, setQuery] = useState("");

  const layouts = useMemo(
    () => ["Semua", ...new Set(products.map((p) => p.layout))],
    [],
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchLayout =
        activeLayout === "Semua" || product.layout === activeLayout;
      const matchQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase());
      return matchLayout && matchQuery;
    });
  }, [activeLayout, query]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <ProductFilter
        layouts={layouts}
        activeLayout={activeLayout}
        setActiveLayout={setActiveLayout}
        query={query}
        setQuery={setQuery}
      />

      <section className="px-6 pb-16 md:px-16" id="koleksi">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400">
              Tidak ada produk yang ditemukan. Coba kata kunci lain.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="px-6 pb-16 md:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-500/50"
            >
              <div className="text-3xl">{perk.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{perk.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{perk.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16" id="testimoni">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-200">
                Testimoni
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Mereka jatuh cinta dengan typing feel.
              </h2>
            </div>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Lihat semua ulasan
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-950 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">
                Dapatkan info drop terbaru
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Subscribe untuk update stok, promo, dan tips memilih switch.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <input
                type="email"
                placeholder="Alamat email"
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none md:w-72"
              />
              <button className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition">
                Langganan
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400 md:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">MechaKey</p>
            <p className="mt-2">Crafted for creators & gamers.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#produk" className="hover:text-white transition">
              Produk
            </a>
            <a href="#koleksi" className="hover:text-white transition">
              Koleksi
            </a>
            <a href="#testimoni" className="hover:text-white transition">
              Testimoni
            </a>
            <a href="#" className="hover:text-white transition">
              Bantuan
            </a>
          </div>
          <p>© 2024 MechaKey. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
