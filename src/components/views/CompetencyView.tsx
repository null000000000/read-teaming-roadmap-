import React, { useState, useEffect } from 'react';
import {
  COMPETENCY_CHECKLIST,
  RED_TEAMER_LEVELS,
  OPERATIONAL_CYCLE_STAGES,
  ENGAGEMENT_TYPES,
  PRIORITY_MAP
} from '../../data/skillTreeData';
import {
  CheckCircle2,
  Circle,
  ShieldAlert,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const CompetencyView: React.FC = () => {
  // Store checked practical competencies in localStorage
  const [checkedGates, setCheckedGates] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('redteam_competency_gates');
      return saved ? new Set(JSON.parse(saved)) : new Set(['chk-1', 'chk-4']);
    } catch {
      return new Set(['chk-1', 'chk-4']);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'redteam_competency_gates',
        JSON.stringify(Array.from(checkedGates))
      );
    } catch (e) {
      console.error(e);
    }
  }, [checkedGates]);

  const toggleGate = (id: string) => {
    setCheckedGates((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetGates = () => {
    setCheckedGates(new Set());
  };

  const completionPercent = Math.round(
    (checkedGates.size / COMPETENCY_CHECKLIST.length) * 100
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Competency Checklist Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-1">
            PART IV — PROFESSIONAL COMPETENCY CHECKLIST
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            قائمة التحقق من الكفاءة العملية والجاهزية
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            اعتبر نفسك تتقدم نحو مستوى Red Teamer متمكن عندما تستطيع إثبات هذه القدرات العشر عملياً ومستقلاً داخل المختبر، وليس بمجرد إنهاء دورة تدريبية أو مشاهدة محتوى.
          </p>
        </div>

        {/* Readiness Meter */}
        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl shrink-0 min-w-[220px]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400">معدل الجاهزية العملية:</span>
            <span className="font-mono text-purple-400 font-bold tabular-nums text-sm">
              {completionPercent}%
            </span>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-purple-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 font-mono tabular-nums">
            <span>{checkedGates.size} من 10 معايير</span>
            <button
              onClick={resetGates}
              className="text-slate-500 hover:text-slate-300 flex items-center gap-1 text-[10px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>إعادة ضبط</span>
            </button>
          </div>
        </div>
      </div>

      {/* 10 Practical Competency Cards */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>بوابات الإثبات العملي (10 بوابات):</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {COMPETENCY_CHECKLIST.map((item, idx) => {
            const isChecked = checkedGates.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleGate(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                  isChecked
                    ? 'bg-purple-950/20 border-purple-500/40 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div
                  className={`mt-0.5 shrink-0 ${
                    isChecked ? 'text-purple-400' : 'text-slate-600'
                  }`}
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase">
                      معيار {idx + 1} · {item.category}
                    </span>
                    {isChecked && (
                      <span className="text-[10px] text-emerald-400 font-mono">
                        تم الإثبات
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      isChecked ? 'text-slate-200' : 'text-slate-300'
                    }`}
                  >
                    {item.textAr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PART V — RED TEAMER LEVELS */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div>
          <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block mb-0.5">
            PART V — OPERATOR PROFICIENCY TIERS
          </span>
          <h2 className="text-lg font-bold text-white">
            مستويات مشغلي الفريق الأحمر والقدرات المتوقعة
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                <th className="py-3 px-4 w-32">المستوى</th>
                <th className="py-3 px-4 w-40">المسمى المهني</th>
                <th className="py-3 px-4">القدرة العملية المتوقعة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {RED_TEAMER_LEVELS.map((lvl) => (
                <tr key={lvl.level} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-rose-400">
                    {lvl.level}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">
                    {lvl.titleAr}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 leading-relaxed">
                    {lvl.expectedCapabilityAr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PART VI — OPERATIONAL CONTEXT & ENGAGEMENT TYPES */}
      <div className="space-y-6 pt-4 border-t border-slate-800">
        <div>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-0.5">
            PART VI — OPERATIONAL LIFECYCLE & ENGAGEMENTS
          </span>
          <h2 className="text-lg font-bold text-white">
            السياق التشغيلي ودورة حياة عمليات Red Team
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            المهارات السابقة تُستخدم بصورة متكاملة عبر دورة عمليات Red Team المنضبطة التالية:
          </p>
        </div>

        {/* 12 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {OPERATIONAL_CYCLE_STAGES.map((s) => (
            <div
              key={s.step}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">
                STEP {s.step < 10 ? `0${s.step}` : s.step}
              </span>
              <h3 className="text-xs font-semibold text-white mb-0.5">
                {s.nameEn}
              </h3>
              <p className="text-[11px] text-slate-400">{s.nameAr}</p>
            </div>
          ))}
        </div>

        {/* Engagement Types Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            أنواع العمليات التي قد يغطيها Red Team Engagement وأولوياتها (18 نوعاً):
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {ENGAGEMENT_TYPES.map((eng, idx) => {
              const pInfo = PRIORITY_MAP[eng.priority];
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-2"
                >
                  <span className="text-xs font-medium text-slate-200 truncate">
                    {eng.name}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 font-semibold ${pInfo.badgeClass}`}
                  >
                    أولوية {eng.priority}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety & Authorization Callout */}
        <div className="p-4 rounded-xl bg-rose-950/25 border border-rose-500/30 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <span className="font-bold text-rose-300 block">
              حدود السلامة والتفويض الصريح (Rules of Engagement):
            </span>
            <p className="text-slate-300 leading-relaxed">
              كل الأنشطة العملية المذكورة تُنفذ فقط داخل مختبر تملكه أو بيئة لديك تصريح صريح وموثق خطياً لاختبارها، وبما يتوافق مع Rules of Engagement. يجب أن تكون محاكاة الوصول إلى البيانات أو الاستمرارية أو تجاوز أدوات الحماية محددة النطاق ومضبوطة المخاطر، مع استخدام بيانات اختبارية متى أمكن.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
