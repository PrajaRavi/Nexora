
export interface comp1T{
  initials:string
  ,index:number
}
export interface workspaceCompT{
  index:number,
  item:string
}

import type { ElementType } from "react";

export interface FeatureItem {
  icon: ElementType;
  title: string;
  description: string;
  color: string;
}
export interface TaskItem {
  title: string;
  team: string;
  status: string;
  color: string;
}
export interface FeatureCompT{
  feature:FeatureItem
}