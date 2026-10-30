import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Search,
  Filter,
  Layers,
  Download,
  Info,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { MindMapNode } from './types';
import { buildInitialMindMapTree, layoutMindMap, PositionedNode, LinkPath } from './mindMapTreeBuilder';
import { PRIORITY_MAP, PriorityLevel } from '../../data/skillTreeData';

interface MindMapCanvasProps {
  onSelectNode: (node: PositionedNode) => void;
  selectedNodeId: string | null;
  masteredSubskillIds: Set<string>;
  onToggleMastered: (id: string) => void;
}

export const MindMapCanvas: React.FC<MindMapCanvasProps> = ({
  onSelectNode,
  selectedNodeId,
  masteredSubskillIds,
  onToggleMastered
}) => {
  // State for expanded node IDs (Default: Expand Main Groups + Core 01, Core 02, Core 03 for immediate rich view)
  const [expandedNodeIds, setExpandedNodeIds] = useState<Set<string>>(() => {
    return new Set<string>([
      'group-cores',
      'core-01',
      'core-02',
      'group-specs',
      'group-roadmap',
      'group-operations',
      'group-competencies'
    ]);
  });

  // Pan & Zoom transform state
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.85 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; startY: number; transX: number; transY: number }>({
    startX: 0,
    startY: 0,
    transX: 0,
    transY: 0
  });

  // Filtering & Search
  const [priorityFilter, setPriorityFilter] = useState<PriorityLevel | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Build tree and calculate coordinates
  const rootNode = useMemo(() => {
    return buildInitialMindMapTree(expandedNodeIds);
  }, [expandedNodeIds]);

  const { nodes, links, bounds } = useMemo(() => {
    return layoutMindMap(rootNode, priorityFilter, searchQuery);
  }, [rootNode, priorityFilter, searchQuery]);

  // Center canvas on first load
  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setTransform({
        x: clientWidth / 2,
        y: clientHeight / 2,
        scale: 0.82
      });
    }
  }, []);

  // Node toggle expand / collapse handler
  const handleToggleExpand = useCallback((nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNodeIds((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);

  const handleExpandAll = () => {
    const allIds = new Set<string>([
      'group-cores',
      'group-specs',
      'group-roadmap',
      'group-operations',
      'group-competencies',
      'subgroup-lifecycle',
      'subgroup-engagements',
      'subgroup-levels',
      'subgroup-checklist'
    ]);
    nodes.forEach((n) => {
      if (n.type === 'core' || n.type === 'specialization' || n.type === 'roadmap_phase') {
        allIds.add(n.id);
      }
    });
    setExpandedNodeIds(allIds);
  };

  const handleCollapseToCores = () => {
    setExpandedNodeIds(
      new Set([
        'group-cores',
        'group-specs',
        'group-roadmap',
        'group-operations',
        'group-competencies'
      ])
    );
  };

  const handleCollapseAll = () => {
    setExpandedNodeIds(new Set());
  };

  const handleFitScreen = () => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    const treeW = bounds.maxX - bounds.minX;
    const treeH = bounds.maxY - bounds.minY;

    const scaleX = (clientWidth - 100) / treeW;
    const scaleY = (clientHeight - 100) / treeH;
    const scale = Math.min(Math.max(Math.min(scaleX, scaleY), 0.35), 1.2);

    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;

    setTransform({
      x: clientWidth / 2 - centerX * scale,
      y: clientHeight / 2 - centerY * scale,
      scale
    });
  };

  const handleResetZoom = () => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    setTransform({
      x: clientWidth / 2,
      y: clientHeight / 2,
      scale: 1
    });
  };

  // Mouse drag handlers for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only primary button
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      transX: transform.x,
      transY: transform.y
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    setTransform((prev) => ({
      ...prev,
      x: dragStartRef.current.transX + dx,
      y: dragStartRef.current.transY + dy
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
    const newScale = Math.min(Math.max(transform.scale * zoomFactor, 0.25), 2.2);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      setTransform((prev) => ({
        x: mouseX - (mouseX - prev.x) * (newScale / prev.scale),
        y: mouseY - (mouseY - prev.y) * (newScale / prev.scale),
        scale: newScale
      }));
    }
  };

  // Export SVG as file
  const handleExportSvg = () => {
    if (!svgRef.current) return;
    const svgContent = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Red_Team_Skill_Tree_MindMap.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Check if a node matches search
  const isSearchMatch = (node: PositionedNode) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      node.title.toLowerCase().includes(q) ||
      (node.subtitle && node.subtitle.toLowerCase().includes(q))
    );
  };

  const searchMatchCount = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    return nodes.filter(isSearchMatch).length;
  }, [nodes, searchQuery]);

  return (
    <div className="relative w-full h-[calc(100vh-4.25rem)] bg-slate-950 overflow-hidden select-none">
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Left cluster: Search and Priority Filters */}
        <div className="flex items-center gap-2 pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-xl shadow-xl">
          {/* Search box */}
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في شجرة المهارات (مثال: Active Directory, C2, EDR)..."
              className="w-64 sm:w-80 pr-9 pl-3 py-1.5 text-xs bg-slate-800/80 border border-slate-700/60 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
            />
            {searchQuery && (
              <span className="absolute left-2 text-[10px] text-rose-400 font-mono">
                {searchMatchCount} نتيجة
              </span>
            )}
          </div>

          <div className="h-5 w-px bg-slate-800 mx-1" />

          {/* Priority filter buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPriorityFilter(null)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                priorityFilter === null
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              الكل
            </button>
            {(['A', 'B', 'C', 'D'] as PriorityLevel[]).map((p) => {
              const info = PRIORITY_MAP[p];
              const isActive = priorityFilter === p;
              return (
                <button
                  key={p}
                  onClick={() => setPriorityFilter(isActive ? null : p)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1 border ${
                    isActive
                      ? 'bg-slate-800 border-slate-600 text-white ring-1 ring-rose-500/50'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: info.color }}
                  />
                  <span>{p}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right cluster: Tree Expansion & Zoom Actions */}
        <div className="flex items-center gap-2 pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-xl shadow-xl">
          {/* Quick expansion modes */}
          <div className="flex items-center gap-1 text-xs text-slate-300">
            <button
              onClick={handleExpandAll}
              className="px-2.5 py-1 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              title="توسيع كل العقد في الخريطة"
            >
              توسيع الكل
            </button>
            <button
              onClick={handleCollapseToCores}
              className="px-2.5 py-1 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              title="طي إلى المجموعات والـ Cores فقط"
            >
              المجموعات فقط
            </button>
            <button
              onClick={handleCollapseAll}
              className="px-2.5 py-1 rounded-md hover:bg-slate-800 hover:text-white transition-colors text-slate-400"
              title="طي الكل إلى الجذر"
            >
              طي الكل
            </button>
          </div>

          <div className="h-5 w-px bg-slate-800 mx-1" />

          {/* Zoom controls */}
          <div className="flex items-center gap-1 text-slate-300">
            <button
              onClick={() => setTransform((t) => ({ ...t, scale: Math.min(t.scale * 1.15, 2.2) }))}
              className="p-1.5 rounded-md hover:bg-slate-800 hover:text-white"
              title="تكبير (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTransform((t) => ({ ...t, scale: Math.max(t.scale * 0.85, 0.25) }))}
              className="p-1.5 rounded-md hover:bg-slate-800 hover:text-white"
              title="تصغير (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleFitScreen}
              className="p-1.5 rounded-md hover:bg-slate-800 hover:text-white"
              title="ملاءمة الشاشة (Fit View)"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-md hover:bg-slate-800 hover:text-white"
              title="إعادة التمركز (100%)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handleExportSvg}
              className="p-1.5 rounded-md hover:bg-slate-800 hover:text-rose-400 text-slate-400"
              title="تصدير الخريطة الذهنية بصيغة SVG"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        <div
          className="absolute inset-0 origin-top-left transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`
          }}
        >
          {/* SVG Connector Bezier Links */}
          <svg
            ref={svgRef}
            className="absolute overflow-visible pointer-events-none"
            style={{
              left: 0,
              top: 0,
              width: '1px',
              height: '1px'
            }}
          >
            <defs>
              <linearGradient id="link-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {links.map((link) => {
              const dx = Math.abs(link.targetX - link.sourceX) * 0.5;
              const pathD = `M ${link.sourceX} ${link.sourceY} C ${
                link.sourceX + (link.targetX > link.sourceX ? dx : -dx)
              } ${link.sourceY}, ${
                link.targetX + (link.targetX > link.sourceX ? -dx : dx)
              } ${link.targetY}, ${link.targetX} ${link.targetY}`;

              const isConnectedToSelected =
                selectedNodeId &&
                (link.sourceId === selectedNodeId || link.targetId === selectedNodeId);

              return (
                <path
                  key={link.id}
                  d={pathD}
                  fill="none"
                  stroke={isConnectedToSelected ? '#F43F5E' : link.color}
                  strokeWidth={isConnectedToSelected ? 2.5 : 1.5}
                  strokeOpacity={isConnectedToSelected ? 0.95 : 0.45}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* Render All Node Elements */}
          {nodes.map((node) => {
            const isSelected = selectedNodeId === node.id;
            const matchesSearch = isSearchMatch(node);
            const isSubskill = node.type === 'subskill';
            const isMastered = isSubskill && masteredSubskillIds.has(node.id);
            const hasChildren = node.children && node.children.length > 0;
            const canExpand =
              node.type === 'group' ||
              node.type === 'core' ||
              node.type === 'specialization' ||
              node.type === 'roadmap_phase';

            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                style={{
                  position: 'absolute',
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  width: `${node.width}px`,
                  height: `${node.height}px`
                }}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl transition-all cursor-pointer ${
                  node.type === 'root'
                    ? 'bg-rose-950/80 border-2 border-rose-500 shadow-2xl shadow-rose-900/30'
                    : node.type === 'group'
                    ? 'bg-slate-900/90 border border-slate-700 hover:border-slate-500 shadow-lg'
                    : node.type === 'core'
                    ? 'bg-slate-900/90 border border-slate-800 hover:border-slate-600 shadow-md'
                    : 'bg-slate-900/70 border border-slate-800/80 hover:border-slate-700'
                } ${
                  isSelected
                    ? 'ring-2 ring-rose-500 border-rose-500 shadow-xl'
                    : ''
                } ${
                  matchesSearch
                    ? 'ring-2 ring-amber-400 bg-amber-500/10 animate-pulse'
                    : ''
                } ${isMastered ? 'bg-emerald-950/30 border-emerald-500/40' : ''}`}
              >
                {/* Left Side Content & Icon */}
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  {/* Mastered toggle for subskills */}
                  {isSubskill ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleMastered(node.id);
                      }}
                      className={`shrink-0 transition-colors ${
                        isMastered ? 'text-emerald-400' : 'text-slate-600 hover:text-slate-400'
                      }`}
                      title={isMastered ? 'تم إتقان المهارة' : 'حدد كمهارة متقنة'}
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  ) : node.type === 'root' ? (
                    <div className="p-1 rounded bg-rose-500/20 text-rose-400 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  ) : (
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: node.color || '#64748B' }}
                    />
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p
                        className={`font-semibold text-xs truncate ${
                          node.type === 'root'
                            ? 'text-white text-sm'
                            : isMastered
                            ? 'text-emerald-300'
                            : 'text-slate-200'
                        }`}
                        title={node.title}
                      >
                        {node.title}
                      </p>
                      {node.priority && (
                        <span
                          className={`text-[10px] font-mono px-1 py-0.2 rounded border shrink-0 ${
                            PRIORITY_MAP[node.priority].badgeClass
                          }`}
                        >
                          {node.priority}
                        </span>
                      )}
                    </div>
                    {node.subtitle && (
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {node.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Side Expand / Collapse Toggle if node has children */}
                {canExpand && (
                  <button
                    onClick={(e) => handleToggleExpand(node.id, e)}
                    className="shrink-0 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
                    title={node.isExpanded ? 'طي الفرع' : 'توسيع الفرع'}
                  >
                    {node.side === 'right' ? (
                      node.isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )
                    ) : node.isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronLeft className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Status / Legend Bar */}
      <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-wrap items-center justify-between text-xs text-slate-400 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 shadow-md">
          <span className="text-[11px] text-slate-300 font-medium">مستويات الأولوية:</span>
          {(['A', 'B', 'C', 'D', 'E', 'F'] as PriorityLevel[]).map((p) => {
            const item = PRIORITY_MAP[p];
            return (
              <div key={p} className="flex items-center gap-1.5 text-[11px]">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-slate-300">{p}</span>
                <span className="text-slate-400 text-[10px] hidden lg:inline">({item.labelEn})</span>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-auto flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 shadow-md">
          <span className="text-[11px] text-slate-400">
            اسحب للتنقل · عجلات الماوس للتكبير والتصغير · انقر على أي عقدة للاطلاع على تفاصيلها
          </span>
          <span className="text-[11px] text-rose-400 font-mono">
            {Math.round(transform.scale * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};
