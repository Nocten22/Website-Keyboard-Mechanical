import React from "react";

const TestimonialCard = ({ review }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-500/50">
      {review.image && (
        <img
          src={review.image}
          alt={`${review.name}'s photo`}
          className="w-16 h-12 rounded-lg mb-4 object-cover"
        />
      )}
      <p className="text-sm text-slate-300">"{review.text}"</p>
      <p className="mt-4 text-sm font-semibold text-white">{review.name}</p>
      <p className="text-xs text-slate-400">{review.location}</p>
    </div>
  );
};

export default TestimonialCard;
