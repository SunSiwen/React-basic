import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const styles = {
    primary: { background: '#646cff', color: 'white' },
    secondary: { background: '#f0f0f0', color: '#333' }
  }

  return (
    <button 
      onClick={onClick}
      style={{
        ...styles[variant],
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '8px'
      }}
    >
      {children}
    </button>
  )
}
