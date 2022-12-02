import { describe, expect, it, vi } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import { Tag, TagProps } from '../..'

const defineColor: Array<Pick<TagProps, 'color'> & { expected: string }> = [
  { color: 'red', expected: 's-tag-red' },
  { color: 'orange', expected: 's-tag-orange' },
  { color: 'green', expected: 's-tag-green' },
  { color: 'blue', expected: 's-tag-blue' },
]

const mountTag = (props: TagProps) => {
  return render(<Tag {...props}>Hello</Tag>)
}

describe('tag Click', () => {
  const handleCallback = vi.fn()
  const tag = mountTag({ onClick: handleCallback })
  it('tag click event excuted correctly', () => {
    fireEvent.click(tag.container.firstChild as HTMLDivElement)
    expect(handleCallback).toHaveBeenCalled()
  })
})

describe.each(defineColor)('Tag color test', ({ color, expected }) => {
  it('tag color', () => {
    const tag = mountTag({ color })
    const element = tag.container.firstChild as HTMLDivElement
    expect(element.classList.contains(expected)).toBeTruthy()
  })
})
