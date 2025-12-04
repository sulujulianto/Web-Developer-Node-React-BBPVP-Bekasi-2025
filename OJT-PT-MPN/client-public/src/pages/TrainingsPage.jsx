import React, { useEffect, useState } from 'react';
import { getTrainings } from '../api/publicApi';
import TrainingCard from '../components/TrainingCard.jsx';

const TrainingsPage = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    getTrainings().then(setTrainings).catch(() => {});
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <h1 className="text-3xl font-display font-bold text-slate-900">Program Pelatihan</h1>
      <p className="text-slate-700">Programs ready for your teams.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {trainings.map((t) => (
          <TrainingCard key={t._id || t.slug} training={t} />
        ))}
      </div>
    </div>
  );
};

export default TrainingsPage;
