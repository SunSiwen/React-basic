import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
}

export function Card({ children, title }: CardProps) {
  return (
    <div style={{
      border: '2px solid #646cff',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px'
    }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </div>
  )
}
