import { CSSProperties, HTMLAttributes } from 'react'

/**
 * @title Tag
 */
export interface TagProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * @zh 设置标签背景颜色
   * @en The background color of Tag
   */
  color?: Colors
}

type Colors = 'red' | 'orange' | 'green' | 'blue'
