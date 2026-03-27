import React from 'react';

const SkillBadge = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-soft border border-slate-200 hover:border-accent transition-all">
    <span className="text-2xl">{icon}</span>
    <span className="text-slate-700 font-medium">{label}</span>
  </div>
);

export default SkillBadge;
