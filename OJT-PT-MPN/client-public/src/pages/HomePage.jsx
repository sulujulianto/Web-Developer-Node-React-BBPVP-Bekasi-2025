import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getProfile,
  getServices,
  getTrainings,
  getTestimonials,
  getPartners
} from '../api/publicApi';
import ServiceCard from '../components/ServiceCard.jsx';
import TrainingCard from '../components/TrainingCard.jsx';

const HomePage = () => {
  const [profile, setProfile] = useState(null);
  const [services, setServices] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const [p, s, t, ts, pr] = await Promise.all([
          getProfile(),
          getServices(),
          getTrainings(),
          getTestimonials(),
          getPartners()
        ]);
        setProfile(p);
        setServices(s.slice(0, 3));
        setTrainings(t.slice(0, 3));
        setTestimonials(ts.slice(0, 4));
        setPartners(pr.slice(0, 8));
      } catch (err) {
        setProfile({ name: 'PT MPN', description: 'Training & Human Capital Development' });
      }
    };
    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-primary/10 text-primary font-semibold text-xs uppercase tracking-[0.2em]">
            Capacity. Culture. Capability.
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight text-slate-900">
            Build resilient teams with intentional learning experiences.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            {profile?.description ||
              'We design relevant, practical programs to strengthen competencies and culture for performance.'}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/trainings"
              className="px-5 py-3 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:-translate-y-1 transition"
            >
              Lihat Pelatihan
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 border border-primary/30 text-primary rounded-full font-semibold hover:bg-white hover:shadow-md transition"
            >
              Konsultasi
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
          <div className="relative bg-white border border-slate-100 rounded-3xl shadow-2xl shadow-primary/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why PT MPN</p>
                <h3 className="text-2xl font-display font-bold mt-1">Learning with outcomes</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Trusted</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ['60+', 'Tailored modules'],
                ['15+', 'Industries served'],
                ['4.8/5', 'Participant rating'],
                ['100%', 'Local facilitator network']
              ].map(([stat, label]) => (
                <div key={label} className="p-3 rounded-xl bg-sand text-slate-800">
                  <div className="text-2xl font-display font-semibold">{stat}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We blend field experience, competency assessments, and active learning to ensure real workplace impact.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-display font-semibold text-slate-900">Layanan Unggulan</h2>
          <Link to="/services" className="text-primary font-semibold text-sm hover:underline">
            Lihat semua →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s._id || s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-display font-semibold text-slate-900">Program Pelatihan</h2>
          <Link to="/trainings" className="text-primary font-semibold text-sm hover:underline">
            Lihat semua →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {trainings.map((t) => (
            <TrainingCard key={t._id || t.slug} training={t} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-display font-semibold text-slate-900">Testimoni</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div key={t._id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-sm text-slate-600 italic">“{t.message}”</p>
              <p className="mt-3 font-semibold text-slate-900">{t.name}</p>
              {t.company && <p className="text-xs text-slate-500">{t.company}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-display font-semibold text-slate-900">Partner</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p._id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-center">
              <div className="font-semibold text-slate-900">{p.name}</div>
              {p.websiteUrl && (
                <a className="text-sm text-primary underline" href={p.websiteUrl} target="_blank" rel="noreferrer">
                  Visit
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
