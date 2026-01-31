import { ReactNode } from 'react'

interface ListProps {
  children: ReactNode
}

export function List({ children }: ListProps) {
  return (
    <ul style={{
      listStyle: 'none',
      padding: 0
    }}>
      {children}
    </ul>
  )
}
