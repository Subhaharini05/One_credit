import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-2">{subtitle}</p>}
  </div>
);

export default SectionTitle;
