import React from 'react';
import { X, BookOpen, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PRIORITY_MAP, PriorityLevel, GENERAL_GUIDE_INFO } from '../../data/skillTreeData';

interface EvaluationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvaluationGuideModal: React.FC<EvaluationGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-rose-500" />
            <h2 className="text-base font-bold text-white">
              دليل التقييم وتقدير الساعات (Evaluation Guide)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-xs text-slate-300 leading-relaxed">
          {/* Priority Meaning Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              1. تقييم أهمية المهارة — Priority (A–F)
            </h3>
            <p className="text-slate-400 text-[11px]">
              هذا التقييم يوضح أهمية المهارة في بناء Red Teamer متكامل، وليس صعوبتها أو سرعة تعلمها.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/50">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950 text-slate-400">
                    <th className="py-2.5 px-3 w-16 text-center">التقييم</th>
                    <th className="py-2.5 px-3">المعنى والدلالة التشغيلية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {(['A', 'B', 'C', 'D', 'E', 'F'] as PriorityLevel[]).map((p) => {
                    const info = PRIORITY_MAP[p];
                    return (
                      <tr key={p} className="hover:bg-slate-800/30">
                        <td className="py-2.5 px-3 text-center">
                          <span
                            className={`font-mono font-bold px-2 py-0.5 rounded border text-[11px] ${info.badgeClass}`}
                          >
                            {p}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-200">
                          {info.descAr}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Time Estimation Rules */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>2. تقدير الوقت — Learning & Mastery Practice</span>
            </h3>

            <div className="space-y-2 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div>
                <strong className="text-sky-400 block mb-0.5">Learning:</strong>
                <p className="text-slate-300">{GENERAL_GUIDE_INFO.learningHoursDesc}</p>
              </div>
              <div className="pt-2 border-t border-slate-800/80">
                <strong className="text-amber-400 block mb-0.5">Mastery Practice:</strong>
                <p className="text-slate-300">{GENERAL_GUIDE_INFO.masteryHoursDesc}</p>
              </div>
              <div className="pt-2 border-t border-slate-800/80">
                <strong className="text-rose-400 block mb-0.5">Total to Strong Practical Proficiency:</strong>
                <p className="text-slate-300">{GENERAL_GUIDE_INFO.totalHoursDesc}</p>
              </div>
            </div>
          </div>

          {/* Critical Notes */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              3. ملاحظات حاسمة حول المسار
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800 space-y-2">
              <p>
                • <strong>الساعات المقصودة:</strong> ساعات تركيز فعلية، وليست مدة تقويمية أو ساعات تشغيل فيديوهات.
              </p>
              <p>
                • <strong>تداخل المهارات:</strong> المهارات متداخلة؛ لذلك لا تجمع كل الساعات للحصول على مدة نهائية للمسار. التدريب في Networking مثلاً يخدم AD وC2 وCloud أيضاً.
              </p>
              <p>
                • <strong>معنى كلمة Mastery:</strong> تعني كفاءة عملية مستقلة وقوية في نطاق المهارة، وليست ادعاءً بأن المجال أصبح منتهياً. الإتقان العميق يستمر طوال المسيرة المهنية.
              </p>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-2.5 text-rose-300">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">{GENERAL_GUIDE_INFO.safetyWarning}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            إغلاق الدليل
          </button>
        </div>
      </div>
    </div>
  );
};
