import React from 'react';
import { Link } from 'react-router-dom';

const TrainingCard = ({ training }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:-translate-y-1 transition">
    <div className="flex items-center justify-between text-xs text-slate-500">
      <span className="uppercase tracking-[0.2em] text-primary font-semibold">{training.level || 'Program'}</span>
      {training.price !== undefined && (
        <span className="font-semibold text-primary">Rp {Number(training.price).toLocaleString('id-ID')}</span>
      )}
    </div>
    <h3 className="text-lg font-display font-semibold text-slate-900 mt-2">{training.title}</h3>
    <p className="text-sm text-slate-600 mt-2 line-clamp-3">{training.shortDescription || training.description}</p>
    <div className="mt-4">
      <Link to={`/trainings/${training.slug}`} className="text-primary font-semibold text-sm hover:underline">
        View details →
      </Link>
    </div>
  </div>
);

export default TrainingCard;
