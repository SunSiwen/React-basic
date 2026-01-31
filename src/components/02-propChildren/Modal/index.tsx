import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

export function Modal({ children, header, footer }: ModalProps) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '0',
      marginBottom: '16px',
      color: '#333'
    }}>
      {header && (
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #eee',
          fontWeight: 'bold'
        }}>
          {header}
        </div>
      )}
      <div style={{ padding: '16px' }}>
        {children}
      </div>
      {footer && (
        <div style={{
          padding: '16px',
          borderTop: '1px solid #eee',
          textAlign: 'right'
        }}>
          {footer}
        </div>
      )}
    </div>
  )
}
