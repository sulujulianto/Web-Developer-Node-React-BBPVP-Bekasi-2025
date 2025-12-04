import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainingBySlug } from '../api/publicApi';

const TrainingDetailPage = () => {
  const { slug } = useParams();
  const [training, setTraining] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrainingBySlug(slug)
      .then(setTraining)
      .catch(() => setError('Training not found'));
  }, [slug]);

  if (error) return <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-red-600">{error}</div>;
  if (!training) return <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{training.level || 'Program'}</p>
      <h1 className="text-3xl font-display font-bold text-slate-900">{training.title}</h1>
      <p className="text-slate-700">{training.shortDescription || training.description}</p>
      {training.price !== undefined && (
        <p className="font-semibold text-primary text-lg">Investment: Rp {Number(training.price).toLocaleString('id-ID')}</p>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-display font-semibold">Details</h3>
        <p className="text-slate-700 whitespace-pre-line">{training.description}</p>
      </div>
    </div>
  );
};

export default TrainingDetailPage;
