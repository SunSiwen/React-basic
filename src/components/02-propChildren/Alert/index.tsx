import { ReactNode } from 'react'

interface AlertProps {
  children: ReactNode
  type?: 'info' | 'warning' | 'error'
}

export function Alert({ children, type = 'info' }: AlertProps) {
  const colors = {
    info: '#3498db',
    warning: '#f39c12',
    error: '#e74c3c'
  }

  return (
    <div style={{
      background: colors[type] + '20',
      border: `1px solid ${colors[type]}`,
      borderRadius: '4px',
      padding: '12px',
      marginBottom: '12px'
    }}>
      <strong>{type.toUpperCase()}: </strong>
      {children}
    </div>
  )
}
