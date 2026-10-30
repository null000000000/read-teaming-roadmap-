import { PriorityLevel } from '../../data/skillTreeData';

export type MindMapNodeType =
  | 'root'
  | 'group'
  | 'core'
  | 'subskill'
  | 'specialization'
  | 'spec_subtopic'
  | 'roadmap_phase'
  | 'phase_skill'
  | 'operational_cycle'
  | 'engagement_type'
  | 'level'
  | 'competency';

export interface MindMapNode {
  id: string;
  type: MindMapNodeType;
  title: string;
  subtitle?: string;
  priority?: PriorityLevel;
  hours?: string;
  parentId?: string;
  children?: MindMapNode[];
  isExpanded?: boolean;
  side: 'left' | 'right' | 'center';
  color?: string;
  // Layout coordinates (calculated)
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  // Raw data reference for drawer
  meta?: any;
}
