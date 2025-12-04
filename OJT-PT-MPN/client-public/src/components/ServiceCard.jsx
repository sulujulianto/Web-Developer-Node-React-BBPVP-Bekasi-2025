import React from 'react';

const ServiceCard = ({ service }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:-translate-y-1 transition">
    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{service.slug}</p>
    <h3 className="text-lg font-display font-semibold text-slate-900 mt-1">{service.title}</h3>
    <p className="text-sm text-slate-600 mt-2 line-clamp-3">{service.shortDescription || service.description}</p>
  </div>
);

export default ServiceCard;
