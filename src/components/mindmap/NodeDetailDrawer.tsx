import React from 'react';
import {
  X,
  Clock,
  Award,
  BookOpen,
  Target,
  ShieldAlert,
  CheckCircle,
  Sparkles,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PositionedNode } from './mindMapTreeBuilder';
import { CoreSkill, PRIORITY_MAP, PriorityLevel, SubSkill } from '../../data/skillTreeData';

interface NodeDetailDrawerProps {
  node: PositionedNode | null;
  onClose: () => void;
  masteredSubskillIds: Set<string>;
  onToggleMastered: (id: string) => void;
  onNavigateToCore?: (coreId: string) => void;
}

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  onClose,
  masteredSubskillIds,
  onToggleMastered,
  onNavigateToCore
}) => {
  if (!node) return null;

  const core: CoreSkill | undefined = node.meta?.core || node.meta?.parentCore;
  const subskill: SubSkill | undefined = node.meta?.subskill;
  const spec = node.meta?.spec;
  const phase = node.meta?.phase;
  const level = node.meta?.level;
  const checklistItem = node.meta?.checklistItem;
  const engagement = node.meta?.engagement;
  const opsStep = node.meta?.step;

  const priorityInfo = node.priority ? PRIORITY_MAP[node.priority] : null;

  return (
    <div className="fixed inset-y-0 left-0 w-full sm:w-[480px] bg-slate-900 border-r border-slate-800 shadow-2xl z-50 flex flex-col text-slate-100 overflow-hidden animate-in slide-in-from-left duration-200">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/60">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              {node.type === 'core'
                ? 'مهارة أساسية (Core Skill)'
                : node.type === 'subskill'
                ? 'مهارة فرعية تخصصية (Subskill)'
                : node.type === 'specialization'
                ? 'تخصص مساند (Specialization)'
                : node.type === 'roadmap_phase'
                ? 'مرحلة في مسار التعلم'
                : node.type === 'level'
                ? 'مستوى المشغل (Operator Level)'
                : node.type === 'competency'
                ? 'بوابة كفاءة عملية'
                : 'عقدة في الخريطة'}
            </span>

            {priorityInfo && (
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded border font-semibold ${priorityInfo.badgeClass}`}
              >
                {priorityInfo.labelAr}
              </span>
            )}
          </div>

          <h2 className="text-lg font-bold text-white leading-tight">
            {node.title}
          </h2>
          {node.subtitle && (
            <p className="text-xs text-slate-400 mt-1">{node.subtitle}</p>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="إغلاق اللوحة"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Body - Scrollable */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Core Skill Full View */}
        {core && (
          <>
            {/* Hours Cards Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block mb-1">التعلم الأساسي</span>
                <span className="text-sm font-bold text-sky-400 font-mono tabular-nums">
                  {core.learningHours}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[10px] text-slate-400 block mb-1">الممارسة والإتقان</span>
                <span className="text-sm font-bold text-amber-400 font-mono tabular-nums">
                  {core.masteryHours}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-rose-500/20">
                <span className="text-[10px] text-rose-300 block mb-1">الإجمالي التقديري</span>
                <span className="text-sm font-bold text-rose-400 font-mono tabular-nums">
                  {core.totalHours}
                </span>
              </div>
            </div>

            {/* Required Outcome (النتيجة المطلوبة) */}
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-2">
                <Target className="w-4 h-4" />
                <span>النتيجة المطلوبة والمعيار العملي:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {core.outcomeAr}
              </p>
            </div>

            {/* Recommended Learning Phase */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
              <span className="text-slate-400">المرحلة المقترحة في المسار:</span>
              <span className="font-semibold text-emerald-400">{core.phaseSuggestion}</span>
            </div>

            {/* Subskills List with Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-rose-500" />
                  <span>المهارات الفرعية التابعة ({core.subskills.length})</span>
                </h3>
                <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                  {core.subskills.filter((s) => masteredSubskillIds.has(`sub-${core.id}-${s.id}`)).length} / {core.subskills.length} مكتمل
                </span>
              </div>

              <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1">
                {core.subskills.map((sub, idx) => {
                  const subNodeId = `sub-${core.id}-${sub.id}`;
                  const isDone = masteredSubskillIds.has(subNodeId);
                  const subPri = PRIORITY_MAP[sub.priority];

                  return (
                    <div
                      key={sub.id}
                      onClick={() => onToggleMastered(subNodeId)}
                      className={`flex items-center justify-between p-2.5 rounded-lg border transition-all cursor-pointer ${
                        isDone
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                          : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => {}}
                          className="w-4 h-4 rounded border-slate-700 text-rose-500 focus:ring-rose-500 focus:ring-offset-slate-900 bg-slate-900"
                        />
                        <span className="text-xs font-medium truncate font-sans">
                          {idx + 1}. {sub.name}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 font-semibold ${subPri.badgeClass}`}
                      >
                        {sub.priority}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Specialization View */}
        {spec && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">عن التخصص:</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                هذه تخصصات إضافية ترفع مستوى Red Teamer وتفتح مجالات عمليات متقدمة. يتم اختيارها بناءً على نوع المؤسسة وطبيعة بيئة التشغيل.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                المحاور التخصصية الفرعية:
              </h3>
              <div className="space-y-1.5">
                {spec.subtopics.map((st: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Phase View */}
        {phase && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/30 flex items-center justify-between">
              <span className="text-xs text-slate-400">المدة الإرشادية المقدرة:</span>
              <span className="text-xs font-bold text-emerald-400">{phase.duration}</span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
                <Target className="w-4 h-4" />
                <span>بوابة الانتقال للمرحلة التالية:</span>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                {phase.transitionGateAr}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                المهارات المشمولة في هذه المرحلة:
              </h3>
              <div className="space-y-1.5">
                {phase.skills.map((sk: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{sk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Operator Level View */}
        {level && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
              <span className="text-xs font-semibold text-purple-400 block mb-2">
                القدرة المتوقعة لمستوى {level.level}:
              </span>
              <p className="text-xs text-purple-200/90 leading-relaxed">
                {level.expectedCapabilityAr}
              </p>
            </div>
          </div>
        )}

        {/* Checklist Item View */}
        {checklistItem && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30">
              <span className="text-xs font-semibold text-sky-400 block mb-2">
                نص معيار الكفاءة:
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {checklistItem.textAr}
              </p>
            </div>
          </div>
        )}

        {/* Operational Context Step View */}
        {opsStep && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
              <span className="text-xs font-semibold text-amber-400 block mb-1">
                الخطوة {opsStep.step} في دورة العمليات:
              </span>
              <p className="text-sm font-bold text-white mb-2">{opsStep.nameEn}</p>
              <p className="text-xs text-amber-200/90">{opsStep.nameAr}</p>
            </div>
          </div>
        )}

        {/* Priority Evaluation Meaning Box */}
        {priorityInfo && (
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 text-xs">
            <span className="text-[11px] text-slate-400 block mb-1">
              دلالة الأولوية ({node.priority}):
            </span>
            <p className="text-slate-300">{priorityInfo.descAr}</p>
          </div>
        )}

        {/* Safety & RoE Notice */}
        <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-2.5 text-xs text-rose-300/80">
          <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            تنبيه الأمان وقواعد الاشتباك: تُنفذ الأنشطة العملية حصراً داخل مختبر مصرح به أو بيئة معتمدة خطياً وفق Rules of Engagement.
          </p>
        </div>
      </div>
    </div>
  );
};
