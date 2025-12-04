import React, { useEffect, useState } from 'react';
import { getServices } from '../api/publicApi';
import ServiceCard from '../components/ServiceCard.jsx';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices).catch(() => {});
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-4">
      <h1 className="text-3xl font-display font-bold text-slate-900">Layanan Kami</h1>
      <p className="text-slate-700">Explore how we support your organization.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s._id || s.slug} service={s} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
