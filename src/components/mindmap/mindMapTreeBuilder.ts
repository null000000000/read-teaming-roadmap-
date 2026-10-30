import {
  CORE_SKILLS,
  SUPPORTING_SPECIALIZATIONS,
  ROADMAP_PHASES,
  OPERATIONAL_CYCLE_STAGES,
  ENGAGEMENT_TYPES,
  RED_TEAMER_LEVELS,
  COMPETENCY_CHECKLIST,
  PRIORITY_MAP
} from '../../data/skillTreeData';
import { MindMapNode } from './types';

export function buildInitialMindMapTree(expandedNodeIds: Set<string>): MindMapNode {
  // 1. Right side: Core Skills (15 Cores)
  const isCoresGroupExpanded = expandedNodeIds.has('group-cores');

  const coreChildren: MindMapNode[] = CORE_SKILLS.map((core) => {
    const isCoreExpanded = expandedNodeIds.has(core.id);
    const subskillChildren: MindMapNode[] = isCoreExpanded
      ? core.subskills.map((sub) => ({
          id: `sub-${core.id}-${sub.id}`,
          type: 'subskill',
          title: sub.name,
          priority: sub.priority,
          side: 'right',
          parentId: core.id,
          color: PRIORITY_MAP[sub.priority].color,
          meta: { subskill: sub, parentCore: core }
        }))
      : [];

    return {
      id: core.id,
      type: 'core',
      title: `${core.number} — ${core.titleEn}`,
      subtitle: `${core.titleAr} · ${core.totalHours}`,
      priority: core.priority,
      hours: core.totalHours,
      side: 'right',
      parentId: 'group-cores',
      color: core.colorScheme.primary,
      isExpanded: isCoreExpanded,
      children: subskillChildren,
      meta: { core }
    };
  });

  const coresGroup: MindMapNode = {
    id: 'group-cores',
    type: 'group',
    title: 'PART I — CORE SKILLS TREE',
    subtitle: '15 مهارة أساسية تشكل الهيكل الرئيسي للمشغل',
    priority: 'A',
    side: 'right',
    parentId: 'root',
    color: '#F43F5E',
    isExpanded: isCoresGroupExpanded,
    children: isCoresGroupExpanded ? coreChildren : []
  };

  // 2. Left side: Supporting Specializations (Part II)
  const isSpecsGroupExpanded = expandedNodeIds.has('group-specs');
  const specChildren: MindMapNode[] = SUPPORTING_SPECIALIZATIONS.map((spec) => {
    const isSpecExpanded = expandedNodeIds.has(spec.id);
    const subtopics: MindMapNode[] = isSpecExpanded
      ? spec.subtopics.map((st, idx) => ({
          id: `st-${spec.id}-${idx}`,
          type: 'spec_subtopic',
          title: st,
          priority: spec.priority,
          side: 'left',
          parentId: spec.id,
          color: PRIORITY_MAP[spec.priority].color,
          meta: { specTitle: spec.title, subtopic: st }
        }))
      : [];

    return {
      id: spec.id,
      type: 'specialization',
      title: spec.title,
      subtitle: `${spec.subtopics.length} محاور تخصصية`,
      priority: spec.priority,
      side: 'left',
      parentId: 'group-specs',
      color: PRIORITY_MAP[spec.priority].color,
      isExpanded: isSpecExpanded,
      children: subtopics,
      meta: { spec }
    };
  });

  const specsGroup: MindMapNode = {
    id: 'group-specs',
    type: 'group',
    title: 'PART II — SUPPORTING SPECIALIZATIONS',
    subtitle: '12 تخصصاً فرعياً ومتقدماً يرفع كفاءة المشغل',
    priority: 'C',
    side: 'left',
    parentId: 'root',
    color: '#0EA5E9',
    isExpanded: isSpecsGroupExpanded,
    children: isSpecsGroupExpanded ? specChildren : []
  };

  // 3. Left side: Roadmap (Part III)
  const isRoadmapGroupExpanded = expandedNodeIds.has('group-roadmap');
  const roadmapChildren: MindMapNode[] = ROADMAP_PHASES.map((phase) => {
    const isPhaseExpanded = expandedNodeIds.has(phase.id);
    const phaseSkills: MindMapNode[] = isPhaseExpanded
      ? phase.skills.map((sk, idx) => ({
          id: `psk-${phase.id}-${idx}`,
          type: 'phase_skill',
          title: sk,
          side: 'left',
          parentId: phase.id,
          color: '#10B981',
          meta: { phase, skill: sk }
        }))
      : [];

    return {
      id: phase.id,
      type: 'roadmap_phase',
      title: `Phase ${phase.phaseNumber} — ${phase.titleEn}`,
      subtitle: `${phase.titleAr} (${phase.duration})`,
      side: 'left',
      parentId: 'group-roadmap',
      color: '#10B981',
      isExpanded: isPhaseExpanded,
      children: phaseSkills,
      meta: { phase }
    };
  });

  const roadmapGroup: MindMapNode = {
    id: 'group-roadmap',
    type: 'group',
    title: 'PART III — LEARNING ROADMAP',
    subtitle: '6 مراحل تصاعدية مع بوابات انتقال ومعايير تحقق',
    side: 'left',
    parentId: 'root',
    color: '#10B981',
    isExpanded: isRoadmapGroupExpanded,
    children: isRoadmapGroupExpanded ? roadmapChildren : []
  };

  // 4. Left side: Operational Context (Part VI)
  const isOpsGroupExpanded = expandedNodeIds.has('group-operations');
  const opsChildren: MindMapNode[] = [
    {
      id: 'subgroup-lifecycle',
      type: 'group',
      title: 'Operational Lifecycle (12 Steps)',
      subtitle: 'دورة حياة عمليات المحاكاة من التخطيط إلى الإحاطة',
      side: 'left',
      parentId: 'group-operations',
      color: '#F59E0B',
      isExpanded: expandedNodeIds.has('subgroup-lifecycle'),
      children: expandedNodeIds.has('subgroup-lifecycle')
        ? OPERATIONAL_CYCLE_STAGES.map((s) => ({
            id: `ops-step-${s.step}`,
            type: 'operational_cycle',
            title: `${s.step}. ${s.nameEn}`,
            subtitle: s.nameAr,
            side: 'left',
            parentId: 'subgroup-lifecycle',
            color: '#F59E0B',
            meta: { step: s }
          }))
        : []
    },
    {
      id: 'subgroup-engagements',
      type: 'group',
      title: 'Engagement Types (18 Types)',
      subtitle: 'أنواع العمليات والمحاكاة مع تقييم أولوياتها',
      side: 'left',
      parentId: 'group-operations',
      color: '#F43F5E',
      isExpanded: expandedNodeIds.has('subgroup-engagements'),
      children: expandedNodeIds.has('subgroup-engagements')
        ? ENGAGEMENT_TYPES.map((e, idx) => ({
            id: `eng-${idx}`,
            type: 'engagement_type',
            title: e.name,
            priority: e.priority,
            side: 'left',
            parentId: 'subgroup-engagements',
            color: PRIORITY_MAP[e.priority].color,
            meta: { engagement: e }
          }))
        : []
    }
  ];

  const opsGroup: MindMapNode = {
    id: 'group-operations',
    type: 'group',
    title: 'PART VI — OPERATIONAL CONTEXT',
    subtitle: 'الدورة التشغيلية وأنواع العمليات وحدود التفويض',
    side: 'left',
    parentId: 'root',
    color: '#F59E0B',
    isExpanded: isOpsGroupExpanded,
    children: isOpsGroupExpanded ? opsChildren : []
  };

  // 5. Left side: Competencies & Levels (Part IV & V)
  const isCompetencyGroupExpanded = expandedNodeIds.has('group-competencies');
  const compChildren: MindMapNode[] = [
    {
      id: 'subgroup-levels',
      type: 'group',
      title: 'Red Teamer Levels (5 Levels)',
      subtitle: 'تدرج مستويات المحاكي من Junior حتى Expert',
      side: 'left',
      parentId: 'group-competencies',
      color: '#A855F7',
      isExpanded: expandedNodeIds.has('subgroup-levels'),
      children: expandedNodeIds.has('subgroup-levels')
        ? RED_TEAMER_LEVELS.map((lvl) => ({
            id: `lvl-${lvl.level}`,
            type: 'level',
            title: `${lvl.level} — ${lvl.titleAr}`,
            subtitle: lvl.expectedCapabilityAr,
            side: 'left',
            parentId: 'subgroup-levels',
            color: '#A855F7',
            meta: { level: lvl }
          }))
        : []
    },
    {
      id: 'subgroup-checklist',
      type: 'group',
      title: 'Competency Checklist (10 Gates)',
      subtitle: 'قائمة التحقق من الكفاءة العملية المستقلة',
      side: 'left',
      parentId: 'group-competencies',
      color: '#38BDF8',
      isExpanded: expandedNodeIds.has('subgroup-checklist'),
      children: expandedNodeIds.has('subgroup-checklist')
        ? COMPETENCY_CHECKLIST.map((chk) => ({
            id: chk.id,
            type: 'competency',
            title: chk.category,
            subtitle: chk.textAr,
            side: 'left',
            parentId: 'subgroup-checklist',
            color: '#38BDF8',
            meta: { checklistItem: chk }
          }))
        : []
    }
  ];

  const competencyGroup: MindMapNode = {
    id: 'group-competencies',
    type: 'group',
    title: 'PART IV & V — READINESS & LEVELS',
    subtitle: 'مستويات Red Teamer وقائمة بوابات الكفاءة العملية',
    side: 'left',
    parentId: 'root',
    color: '#A855F7',
    isExpanded: isCompetencyGroupExpanded,
    children: isCompetencyGroupExpanded ? compChildren : []
  };

  // Root Node
  const rootNode: MindMapNode = {
    id: 'root',
    type: 'root',
    title: 'Red Team Operator Skill Tree',
    subtitle: 'خريطة مهارات الفريق الأحمر ومحاكاة الخصوم الشاملة',
    side: 'center',
    color: '#E11D48',
    isExpanded: true,
    children: [
      coresGroup,
      specsGroup,
      roadmapGroup,
      opsGroup,
      competencyGroup
    ]
  };

  return rootNode;
}

/**
 * Calculates (x, y) coordinates for all nodes in a balanced Mind Map layout.
 * Returns flattened array of positioned nodes and SVG link paths.
 */
export interface PositionedNode extends MindMapNode {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LinkPath {
  id: string;
  sourceId: string;
  targetId: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  color: string;
}

export function layoutMindMap(
  root: MindMapNode,
  filterPriority?: string | null,
  searchQuery?: string
): { nodes: PositionedNode[]; links: LinkPath[]; bounds: { minX: number; maxX: number; minY: number; maxY: number } } {
  const positionedNodes: PositionedNode[] = [];
  const links: LinkPath[] = [];

  // Root dimensions
  const rootWidth = 280;
  const rootHeight = 84;
  const rootX = -rootWidth / 2;
  const rootY = -rootHeight / 2;

  const rootPositioned: PositionedNode = {
    ...root,
    x: rootX,
    y: rootY,
    width: rootWidth,
    height: rootHeight
  };
  positionedNodes.push(rootPositioned);

  // Separate children by side
  const rightChildren = root.children?.filter((c) => c.side === 'right') || [];
  const leftChildren = root.children?.filter((c) => c.side === 'left') || [];

  // Layout Right Subtree (Core Skills)
  layoutSide(rightChildren, 1, 0, rootPositioned, positionedNodes, links, filterPriority, searchQuery);

  // Layout Left Subtree (Specializations, Roadmap, Operations, Levels)
  layoutSide(leftChildren, -1, 0, rootPositioned, positionedNodes, links, filterPriority, searchQuery);

  // Calculate overall bounding box
  let minX = -400;
  let maxX = 400;
  let minY = -300;
  let maxY = 300;

  positionedNodes.forEach((node) => {
    minX = Math.min(minX, node.x - 50);
    maxX = Math.max(maxX, node.x + node.width + 50);
    minY = Math.min(minY, node.y - 50);
    maxY = Math.max(maxY, node.y + node.height + 50);
  });

  return { nodes: positionedNodes, links, bounds: { minX, maxX, minY, maxY } };
}

/**
 * Calculates tree column positions recursively for either right (direction = 1) or left (direction = -1)
 */
function layoutSide(
  topNodes: MindMapNode[],
  direction: 1 | -1,
  depth: number,
  rootPos: PositionedNode,
  outNodes: PositionedNode[],
  outLinks: LinkPath[],
  filterPriority?: string | null,
  searchQuery?: string
) {
  // Compute required height of each subtree
  function getSubtreeHeight(node: MindMapNode): number {
    const isFilteredOut = filterPriority && node.priority && node.priority !== filterPriority;
    if (isFilteredOut) return 0;

    const baseH = node.type === 'subskill' || node.type === 'spec_subtopic' || node.type === 'phase_skill' ? 42 : 68;
    const gap = 16;

    if (!node.children || node.children.length === 0) {
      return baseH + gap;
    }

    const childrenH = node.children.reduce((acc, child) => acc + getSubtreeHeight(child), 0);
    return Math.max(baseH + gap, childrenH);
  }

  const totalHeight = topNodes.reduce((acc, n) => acc + getSubtreeHeight(n), 0);
  let currentY = -totalHeight / 2;

  function positionNodeRecursive(
    node: MindMapNode,
    parentPos: { x: number; y: number; width: number; height: number; id: string },
    currentDepth: number,
    startY: number
  ): number {
    const isFilteredOut = filterPriority && node.priority && node.priority !== filterPriority;
    if (isFilteredOut) return 0;

    const subtreeH = getSubtreeHeight(node);
    const nodeH = node.type === 'subskill' || node.type === 'spec_subtopic' || node.type === 'phase_skill' ? 38 : 62;
    const nodeW = getNodeWidth(node.type);

    // Compute X position
    const colGap = currentDepth === 1 ? 160 : currentDepth === 2 ? 180 : 160;
    const nodeX =
      direction === 1
        ? parentPos.x + parentPos.width + colGap
        : parentPos.x - colGap - nodeW;

    // Node Y is centered in its allocated subtree height
    const nodeY = startY + (subtreeH - nodeH) / 2;

    const positioned: PositionedNode = {
      ...node,
      x: nodeX,
      y: nodeY,
      width: nodeW,
      height: nodeH
    };

    outNodes.push(positioned);

    // Create Link from parent to this node
    const sourceX = direction === 1 ? parentPos.x + parentPos.width : parentPos.x;
    const sourceY = parentPos.y + parentPos.height / 2;
    const targetX = direction === 1 ? nodeX : nodeX + nodeW;
    const targetY = nodeY + nodeH / 2;

    outLinks.push({
      id: `link-${parentPos.id}-${node.id}`,
      sourceId: parentPos.id,
      targetId: node.id,
      sourceX,
      sourceY,
      targetX,
      targetY,
      color: node.color || '#64748B'
    });

    // Position children recursively
    if (node.children && node.children.length > 0) {
      let childY = startY;
      node.children.forEach((child) => {
        const childH = positionNodeRecursive(child, positioned, currentDepth + 1, childY);
        childY += childH;
      });
    }

    return subtreeH;
  }

  topNodes.forEach((n) => {
    const h = positionNodeRecursive(n, rootPos, 1, currentY);
    currentY += h;
  });
}

function getNodeWidth(type: string): number {
  switch (type) {
    case 'group':
      return 290;
    case 'core':
      return 280;
    case 'subskill':
      return 240;
    case 'specialization':
      return 230;
    case 'spec_subtopic':
      return 200;
    case 'roadmap_phase':
      return 260;
    case 'phase_skill':
      return 210;
    case 'operational_cycle':
      return 250;
    case 'engagement_type':
      return 240;
    case 'level':
      return 250;
    case 'competency':
      return 250;
    default:
      return 220;
  }
}
