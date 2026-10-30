import React, { useState, useEffect } from 'react';
import {
  MindMapCanvas
} from './components/mindmap/MindMapCanvas';
import {
  NodeDetailDrawer
} from './components/mindmap/NodeDetailDrawer';
import {
  DeepExplorerView
} from './components/views/DeepExplorerView';
import {
  RoadmapView
} from './components/views/RoadmapView';
import {
  SkillsMatrixView
} from './components/views/SkillsMatrixView';
import {
  CompetencyView
} from './components/views/CompetencyView';
import {
  EvaluationGuideModal
} from './components/modals/EvaluationGuideModal';
import {
  PositionedNode
} from './components/mindmap/mindMapTreeBuilder';
import {
  BookOpen,
  Share2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CORE_SKILLS } from './data/skillTreeData';

type ActiveViewTab = 'mindmap' | 'explorer' | 'roadmap' | 'matrix' | 'competency';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveViewTab>('mindmap');
  const [selectedNode, setSelectedNode] = useState<PositionedNode | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Mastered subskills tracker saved in localStorage
  const [masteredSubskillIds, setMasteredSubskillIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('redteam_mastered_subskills');
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'redteam_mastered_subskills',
        JSON.stringify(Array.from(masteredSubskillIds))
      );
    } catch (e) {
      console.error(e);
    }
  }, [masteredSubskillIds]);

  const handleToggleMastered = (id: string) => {
    setMasteredSubskillIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalSubskillsCount = CORE_SKILLS.reduce((acc, c) => acc + c.subskills.length, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-rose-200">
      {/* Top Bar Contract (Single Row, 3 Zones separated by gap-8) */}
      <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
        {/* Zone 1: Brand Wordmark (Single text element, whitespace-nowrap) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-md shadow-rose-950">
            RT
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('mindmap');
            }}
            className="text-base font-bold tracking-tight text-white whitespace-nowrap hover:text-rose-400 transition-colors"
          >
            Red Team Skill Tree
          </a>
        </div>

        {/* Zone 2: 4-5 Navigation Links (1-2 word labels, whitespace-nowrap, hover underlines) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('mindmap')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'mindmap'
                ? 'text-rose-400 font-bold border-b-2 border-rose-500'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            الخريطة الذهنية
          </button>
          <button
            onClick={() => setActiveTab('explorer')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'explorer'
                ? 'text-rose-400 font-bold border-b-2 border-rose-500'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            شجرة المهارات
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'roadmap'
                ? 'text-rose-400 font-bold border-b-2 border-rose-500'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            مسار التعلم
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'matrix'
                ? 'text-rose-400 font-bold border-b-2 border-rose-500'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            مصفوفة المهارات
          </button>
          <button
            onClick={() => setActiveTab('competency')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'competency'
                ? 'text-rose-400 font-bold border-b-2 border-rose-500'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            بوابات الكفاءة
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsGuideOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-md shadow-rose-950/40 transition-colors whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>دليل التقييم</span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Tabs Bar (Visible on mobile screens) */}
      <div className="md:hidden flex items-center justify-around bg-slate-900 border-b border-slate-800 text-xs py-2 px-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('mindmap')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            activeTab === 'mindmap' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400'
          }`}
        >
          الخريطة الذهنية
        </button>
        <button
          onClick={() => setActiveTab('explorer')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            activeTab === 'explorer' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400'
          }`}
        >
          شجرة المهارات
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            activeTab === 'roadmap' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400'
          }`}
        >
          مسار التعلم
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            activeTab === 'matrix' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400'
          }`}
        >
          المصفوفة
        </button>
        <button
          onClick={() => setActiveTab('competency')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${
            activeTab === 'competency' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400'
          }`}
        >
          الكفاءات
        </button>
      </div>

      {/* Main View Area */}
      <main className="flex-1 relative">
        {activeTab === 'mindmap' && (
          <MindMapCanvas
            onSelectNode={(node) => setSelectedNode(node)}
            selectedNodeId={selectedNode ? selectedNode.id : null}
            masteredSubskillIds={masteredSubskillIds}
            onToggleMastered={handleToggleMastered}
          />
        )}

        {activeTab === 'explorer' && (
          <DeepExplorerView
            masteredSubskillIds={masteredSubskillIds}
            onToggleMastered={handleToggleMastered}
            onOpenCoreInMindMap={(coreId) => {
              setActiveTab('mindmap');
            }}
          />
        )}

        {activeTab === 'roadmap' && <RoadmapView />}

        {activeTab === 'matrix' && (
          <SkillsMatrixView
            masteredSubskillIds={masteredSubskillIds}
            onToggleMastered={handleToggleMastered}
          />
        )}

        {activeTab === 'competency' && <CompetencyView />}
      </main>

      {/* Node Detail Drawer */}
      <NodeDetailDrawer
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        masteredSubskillIds={masteredSubskillIds}
        onToggleMastered={handleToggleMastered}
      />

      {/* Evaluation Guide Modal */}
      <EvaluationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
