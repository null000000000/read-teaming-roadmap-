import React, { useState, useMemo } from 'react';
import {
  CORE_SKILLS,
  PRIORITY_MAP,
  PriorityLevel,
  SubSkill,
  CoreSkill
} from '../../data/skillTreeData';
import { Search, Filter, CheckCircle, Download, Layers, ArrowUpDown } from 'lucide-react';

interface SkillsMatrixViewProps {
  masteredSubskillIds: Set<string>;
  onToggleMastered: (id: string) => void;
}

interface FlattenedSkill {
  id: string;
  name: string;
  priority: PriorityLevel;
  coreId: string;
  coreNumber: string;
  coreTitleEn: string;
  coreTitleAr: string;
  coreTotalHours: string;
}

export const SkillsMatrixView: React.FC<SkillsMatrixViewProps> = ({
  masteredSubskillIds,
  onToggleMastered
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<PriorityLevel | null>(null);
  const [selectedCoreFilter, setSelectedCoreFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'mastered' | 'pending'>('all');

  // Flatten all subskills
  const allSubskills: FlattenedSkill[] = useMemo(() => {
    const list: FlattenedSkill[] = [];
    CORE_SKILLS.forEach((core) => {
      core.subskills.forEach((sub) => {
        list.push({
          id: `sub-${core.id}-${sub.id}`,
          name: sub.name,
          priority: sub.priority,
          coreId: core.id,
          coreNumber: core.number,
          coreTitleEn: core.titleEn,
          coreTitleAr: core.titleAr,
          coreTotalHours: core.totalHours
        });
      });
    });
    return list;
  }, []);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    return allSubskills.filter((item) => {
      if (priorityFilter && item.priority !== priorityFilter) return false;
      if (selectedCoreFilter !== 'all' && item.coreId !== selectedCoreFilter) return false;

      const isMastered = masteredSubskillIds.has(item.id);
      if (statusFilter === 'mastered' && !isMastered) return false;
      if (statusFilter === 'pending' && isMastered) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCore =
          item.coreTitleEn.toLowerCase().includes(q) ||
          item.coreTitleAr.toLowerCase().includes(q) ||
          item.coreNumber.toLowerCase().includes(q);
        return matchesName || matchesCore;
      }

      return true;
    });
  }, [allSubskills, priorityFilter, selectedCoreFilter, statusFilter, searchQuery, masteredSubskillIds]);

  const exportCSV = () => {
    const headers = ['Core Number', 'Core Title', 'Skill Name', 'Priority', 'Status'];
    const rows = filteredSkills.map((s) => [
      `"${s.coreNumber}"`,
      `"${s.coreTitleEn}"`,
      `"${s.name}"`,
      `"${s.priority}"`,
      masteredSubskillIds.has(s.id) ? '"Mastered"' : '"In Progress"'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'red_team_skills_matrix.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 shadow-xl">
        <div>
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
            SKILLS MATRIX & INVENTORY
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            جدول ومصفوفة المهارات الشاملة ({allSubskills.length} مهارة)
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            استعرض وفلتر كل مهارة فرعية بشكل مفصّل مع إمكانية تصدير البيانات ومتابعة الإنجاز.
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors shrink-0"
        >
          <Download className="w-4 h-4 text-sky-400" />
          <span>تصدير كملف CSV</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
        {/* Search */}
        <div className="relative md:col-span-2">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث بالاسم أو اسم الـ Core..."
            className="w-full pr-9 pl-3 py-1.5 text-xs bg-slate-800 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-rose-500"
          />
        </div>

        {/* Core Dropdown */}
        <div>
          <select
            value={selectedCoreFilter}
            onChange={(e) => setSelectedCoreFilter(e.target.value)}
            className="w-full px-3 py-1.5 text-xs bg-slate-800 border border-slate-700/80 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
          >
            <option value="all">جميع الـ Cores (15)</option>
            {CORE_SKILLS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.number} — {c.titleEn}
              </option>
            ))}
          </select>
        </div>

        {/* Status Dropdown */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="w-full px-3 py-1.5 text-xs bg-slate-800 border border-slate-700/80 rounded-lg text-slate-100 focus:outline-none focus:border-rose-500"
          >
            <option value="all">جميع الحالات</option>
            <option value="mastered">المتقنة فقط</option>
            <option value="pending">قيد الدراسة</option>
          </select>
        </div>
      </div>

      {/* Priority Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-medium ml-2">فلترة بالأولوية:</span>
        <button
          onClick={() => setPriorityFilter(null)}
          className={`px-3 py-1 rounded-md transition-colors ${
            priorityFilter === null ? 'bg-rose-500 text-white' : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          الكل
        </button>
        {(['A', 'B', 'C', 'D'] as PriorityLevel[]).map((p) => {
          const info = PRIORITY_MAP[p];
          return (
            <button
              key={p}
              onClick={() => setPriorityFilter(priorityFilter === p ? null : p)}
              className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 border ${
                priorityFilter === p
                  ? 'bg-slate-800 border-slate-600 text-white'
                  : 'border-transparent text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: info.color }} />
              <span>{p} ({info.labelEn})</span>
            </button>
          );
        })}
        <span className="mr-auto text-slate-400 font-mono">
          تم العثور على {filteredSkills.length} مهارة
        </span>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
              <th className="py-3 px-4 w-12 text-center">الحالة</th>
              <th className="py-3 px-4">اسم المهارة</th>
              <th className="py-3 px-4">الركيزة الأساسية (Core)</th>
              <th className="py-3 px-4 text-center w-28">الأولوية</th>
              <th className="py-3 px-4 text-left">إجمالي ساعات الـ Core</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredSkills.map((item, idx) => {
              const isDone = masteredSubskillIds.has(item.id);
              const priInfo = PRIORITY_MAP[item.priority];

              return (
                <tr
                  key={item.id}
                  onClick={() => onToggleMastered(item.id)}
                  className={`cursor-pointer transition-colors ${
                    isDone
                      ? 'bg-emerald-950/10 hover:bg-emerald-950/20'
                      : 'hover:bg-slate-800/40'
                  }`}
                >
                  <td className="py-3 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => {}}
                      className="w-4 h-4 rounded border-slate-700 text-rose-500 focus:ring-rose-500 bg-slate-900 cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium">
                    <span className={isDone ? 'text-emerald-300' : 'text-slate-100'}>
                      {item.name}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-300">
                    <span className="font-mono text-rose-400 ml-1">{item.coreNumber}</span>
                    <span className="text-slate-400">· {item.coreTitleEn}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${priInfo.badgeClass}`}
                    >
                      {item.priority} — {priInfo.labelEn}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-left font-mono text-slate-400 tabular-nums">
                    {item.coreTotalHours}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
