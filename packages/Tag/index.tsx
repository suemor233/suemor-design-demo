import clsx from 'clsx'
import { forwardRef } from 'react'
import './style'
import { TagProps } from './interface'

const Tag: React.ForwardRefRenderFunction<HTMLDivElement, TagProps> = (
  props,
  ref,
) => {
  const { className, style, children, color, ...rest } = props

  return (
    <div
      ref={ref}
      style={style}
      {...rest}
      className={clsx(className,'s-tag', `s-tag-${color}`)}
    >
      {children}
    </div>
  )
}

const TagComponent = forwardRef<unknown, TagProps>(Tag)

TagComponent.displayName = 'Tag'

export default TagComponent
export { TagProps }
