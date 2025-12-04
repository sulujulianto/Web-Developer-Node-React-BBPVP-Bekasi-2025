import React from 'react';

const TrainingList = ({ items, onEdit, onDelete }) => {
  if (!items.length) {
    return <div className="text-slate-600 text-sm">No trainings yet. Add one to get started.</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item._id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{item.category || 'Program'}</p>
              <h4 className="text-lg font-display font-semibold text-slate-900">{item.title}</h4>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(item)}
                className="px-3 py-2 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item._id)}
                className="px-3 py-2 rounded-lg border border-red-200 text-red-600 text-sm font-semibold hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{item.summary || item.description}</p>
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span>{item.location || 'Hybrid'}</span>
            {item.price !== undefined && <span className="font-semibold text-primary">Rp {Number(item.price).toLocaleString('id-ID')}</span>}
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{item.published ? 'Published' : 'Draft'}</span>
            <span>{new Date(item.createdAt || Date.now()).toLocaleDateString('id-ID')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainingList;
