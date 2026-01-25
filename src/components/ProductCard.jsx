import React from "react";
import { formatPrice } from "../data/products";

const ProductCard = ({ product }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-indigo-500/50">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            {product.layout}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-300">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <span
              key={color}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {color}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">Mulai dari</p>
            <p className="text-lg font-semibold text-white">
              {formatPrice(product.price)}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-amber-300">⭐</span>
            <span className="text-xs text-amber-300">{product.rating}</span>
          </div>
        </div>
        <button className="mt-5 w-full rounded-full bg-indigo-500/90 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition">
          Tambah ke keranjang
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
