import { ReactNode } from 'react'

interface ListItemProps {
  children: ReactNode
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li style={{
      padding: '8px',
      borderBottom: '1px solid #eee'
    }}>
      • {children}
    </li>
  )
}
