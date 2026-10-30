import React, { useState } from 'react';
import { ROADMAP_PHASES } from '../../data/skillTreeData';
import { Target, CheckCircle, ArrowDown, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  // Store completed phase gates in state
  const [completedPhases, setCompletedPhases] = useState<Set<string>>(() => new Set(['phase-0']));

  const togglePhaseGate = (phaseId: string) => {
    setCompletedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) next.delete(phaseId);
      else next.add(phaseId);
      return next;
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Roadmap Intro */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
          PART III — LEARNING ORDER & ROADMAP
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          مسار التعلم التراكمي لمحاكي الخصوم
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
          ترتيب مقترح للتعلم يبدأ من الأساسيات حتى مستوى الباحث والخبير. يمكن دراسة بعض المهارات بالتوازي، لكن القاعدة الذهبية تنص على:
          <strong className="text-emerald-400"> لا تنتقل إلى مرحلة متقدمة قبل امتلاك أساس عملي كافٍ واجتياز بوابة الانتقال في المرحلة السابقة.</strong>
        </p>
      </div>

      {/* Sequential Phases Timeline */}
      <div className="relative border-r-2 border-slate-800 space-y-8 pr-6 sm:pr-8 mr-2 sm:mr-4">
        {ROADMAP_PHASES.map((phase, idx) => {
          const isGateAchieved = completedPhases.has(phase.id);

          return (
            <div key={phase.id} className="relative group">
              {/* Timeline Node Badge */}
              <div
                className={`absolute -right-[35px] sm:-right-[43px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                  isGateAchieved
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-900/40'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                {phase.phaseNumber}
              </div>

              {/* Phase Card */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg space-y-4 hover:border-slate-700 transition-all">
                {/* Phase Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold block">
                      Phase {phase.phaseNumber}
                    </span>
                    <h2 className="text-lg font-bold text-white font-sans mt-0.5">
                      {phase.titleEn}
                    </h2>
                    <p className="text-xs text-slate-400">{phase.titleAr}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>{phase.duration}</span>
                  </div>
                </div>

                {/* Skills In This Phase */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    المحاور والمهارات الأساسية في هذه المرحلة:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {phase.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transition Gate (بوابة الانتقال) */}
                <div
                  onClick={() => togglePhaseGate(phase.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    isGateAchieved
                      ? 'bg-emerald-950/25 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                        isGateAchieved
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block mb-0.5 text-white">
                        بوابة الانتقال للمرحلة التالية (Transition Gate):
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {phase.transitionGateAr}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 border ${
                        isGateAchieved
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{isGateAchieved ? 'تم اجتياز البوابة' : 'تحديد كمجتاز'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
