import React from "react";

const ProductFilter = ({
  layouts,
  activeLayout,
  setActiveLayout,
  query,
  setQuery,
}) => {
  return (
    <div className="px-6 py-12 md:px-16" id="produk">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Kategori
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Temukan layout favoritmu
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {layouts.map((layout) => (
            <button
              key={layout}
              onClick={() => setActiveLayout(layout)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeLayout === layout
                  ? "border-indigo-500 bg-indigo-500 text-white"
                  : "border-white/20 text-slate-300 hover:border-white/50 hover:text-white"
              }`}
            >
              {layout}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari keyboard favoritmu..."
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
        <span className="text-slate-400">🔍</span>
      </div>
    </div>
  );
};

export default ProductFilter;
