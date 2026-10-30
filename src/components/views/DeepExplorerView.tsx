import React, { useState } from 'react';
import {
  CORE_SKILLS,
  PRIORITY_MAP,
  PriorityLevel,
  CoreSkill
} from '../../data/skillTreeData';
import {
  Clock,
  Target,
  CheckCircle,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

interface DeepExplorerViewProps {
  masteredSubskillIds: Set<string>;
  onToggleMastered: (id: string) => void;
  onOpenCoreInMindMap?: (coreId: string) => void;
}

export const DeepExplorerView: React.FC<DeepExplorerViewProps> = ({
  masteredSubskillIds,
  onToggleMastered,
  onOpenCoreInMindMap
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<PriorityLevel | null>(null);
  const [expandedCoreIds, setExpandedCoreIds] = useState<Set<string>>(
    () => new Set(['core-01', 'core-02'])
  );

  const toggleCore = (id: string) => {
    setExpandedCoreIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedCoreIds(new Set(CORE_SKILLS.map((c) => c.id)));
  };

  const collapseAll = () => {
    setExpandedCoreIds(new Set());
  };

  // Filter cores and subskills
  const filteredCores = CORE_SKILLS.filter((core) => {
    const matchesPriority = priorityFilter ? core.priority === priorityFilter : true;
    if (!searchQuery.trim()) return matchesPriority;

    const q = searchQuery.toLowerCase();
    const matchesCoreName =
      core.titleEn.toLowerCase().includes(q) ||
      core.titleAr.toLowerCase().includes(q) ||
      core.number.toLowerCase().includes(q) ||
      core.outcomeAr.toLowerCase().includes(q);

    const matchesAnySubskill = core.subskills.some((s) =>
      s.name.toLowerCase().includes(q)
    );

    return matchesPriority && (matchesCoreName || matchesAnySubskill);
  });

  // Calculate overall stats
  const totalSubskills = CORE_SKILLS.reduce((acc, c) => acc + c.subskills.length, 0);
  const masteredCount = Array.from(masteredSubskillIds).filter((id) =>
    id.startsWith('sub-')
  ).length;
  const progressPercent = Math.round((masteredCount / totalSubskills) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Overview Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block mb-1">
            PART I — CORE SKILLS TREE EXPLORER
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            شجرة المهارات الأساسية المتكاملة (15 CORE)
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            كل CORE يمثل ركيزة جوهرية في بناء مشغل Red Team متكامل، من فهم الشبكات والأنظمة إلى هندسة الاستغلال وتفادي أنظمة الكشف وإدارة العمليات.
          </p>
        </div>

        {/* Progress Metric */}
        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl shrink-0 min-w-[200px]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400">إجمالي المهارات المنجزة:</span>
            <span className="font-mono text-emerald-400 font-bold tabular-nums">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 font-mono tabular-nums">
            <span>{masteredCount} متقنة</span>
            <span>من أصل {totalSubskills} مهارة</span>
          </div>
        </div>
      </div>

      {/* Filter and Action Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث في الـ Cores والمهارات الفرعية..."
            className="w-full pr-9 pl-3 py-1.5 text-xs bg-slate-850 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-rose-500"
          />
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setPriorityFilter(null)}
            className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap ${
              priorityFilter === null
                ? 'bg-rose-500 text-white'
                : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            جميع الأولويات
          </button>
          {(['A', 'B', 'C', 'D'] as PriorityLevel[]).map((p) => {
            const info = PRIORITY_MAP[p];
            return (
              <button
                key={p}
                onClick={() => setPriorityFilter(priorityFilter === p ? null : p)}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap flex items-center gap-1 border ${
                  priorityFilter === p
                    ? 'bg-slate-800 border-slate-600 text-white'
                    : 'border-transparent text-slate-400 hover:bg-slate-800'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: info.color }} />
                <span>أولوية {p}</span>
              </button>
            );
          })}
        </div>

        {/* Expand / Collapse buttons */}
        <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-r border-slate-800 pt-2 sm:pt-0 sm:pr-3">
          <button
            onClick={expandAll}
            className="text-xs text-slate-300 hover:text-white px-2 py-1 rounded hover:bg-slate-800"
          >
            توسيع الكل
          </button>
          <button
            onClick={collapseAll}
            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800"
          >
            طي الكل
          </button>
        </div>
      </div>

      {/* Cores List */}
      <div className="space-y-4">
        {filteredCores.map((core) => {
          const isExpanded = expandedCoreIds.has(core.id);
          const priorityInfo = PRIORITY_MAP[core.priority];
          const completedInThisCore = core.subskills.filter((s) =>
            masteredSubskillIds.has(`sub-${core.id}-${s.id}`)
          ).length;

          return (
            <div
              key={core.id}
              className={`rounded-2xl border transition-all ${
                isExpanded
                  ? 'bg-slate-900/90 border-slate-700 shadow-xl'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Core Header Card */}
              <div
                onClick={() => toggleCore(core.id)}
                className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 border"
                    style={{
                      backgroundColor: `${core.colorScheme.primary}15`,
                      color: core.colorScheme.primary,
                      borderColor: `${core.colorScheme.primary}40`
                    }}
                  >
                    {core.number.replace('CORE ', '')}
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold text-rose-400">
                        {core.number}
                      </span>
                      <h2 className="text-base font-bold text-white font-sans">
                        {core.titleEn}
                      </h2>
                      <span className="text-xs text-slate-400 font-medium">
                        ({core.titleAr})
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${priorityInfo.badgeClass}`}
                      >
                        {priorityInfo.labelAr}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {core.outcomeAr}
                    </p>
                  </div>
                </div>

                {/* Right side stats & toggle */}
                <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                  <div className="text-left font-mono text-xs">
                    <span className="text-slate-400 block text-[10px]">الإجمالي المقدر</span>
                    <span className="font-bold text-rose-400 tabular-nums">
                      {core.totalHours}
                    </span>
                  </div>

                  <div className="text-left font-mono text-xs">
                    <span className="text-slate-400 block text-[10px]">المكتمل</span>
                    <span className="font-bold text-emerald-400 tabular-nums">
                      {completedInThisCore} / {core.subskills.length}
                    </span>
                  </div>

                  <div className="p-1 rounded-lg bg-slate-800 text-slate-300">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Core Expanded Content */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 space-y-5">
                  {/* Hours Breakdown Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">ساعات التعلم النظري والموجّه:</span>
                      <span className="text-xs font-mono font-bold text-sky-400 tabular-nums">
                        {core.learningHours}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">ساعات التطبيق والممارسة:</span>
                      <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                        {core.masteryHours}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">المرحلة في مسار التعلم:</span>
                      <span className="text-xs font-bold text-emerald-400">
                        {core.phaseSuggestion}
                      </span>
                    </div>
                  </div>

                  {/* Subskills Interactive Grid */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-rose-500" />
                      <span>قائمة المهارات الفرعية التفصيلية ({core.subskills.length}):</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {core.subskills.map((sub, idx) => {
                        const subNodeId = `sub-${core.id}-${sub.id}`;
                        const isDone = masteredSubskillIds.has(subNodeId);
                        const subPri = PRIORITY_MAP[sub.priority];

                        return (
                          <div
                            key={sub.id}
                            onClick={() => onToggleMastered(subNodeId)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                              isDone
                                ? 'bg-emerald-950/20 border-emerald-500/30'
                                : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => {}}
                                className="w-4 h-4 rounded border-slate-700 text-rose-500 focus:ring-rose-500 bg-slate-900"
                              />
                              <span
                                className={`text-xs font-medium truncate ${
                                  isDone ? 'text-emerald-200 line-through opacity-80' : 'text-slate-200'
                                }`}
                                title={sub.name}
                              >
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
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
