import { useRef } from 'react'

// 1️⃣ 基础：访问 DOM 元素 - 获取输入框焦点
export function AccessDOMFocus() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    // 通过 ref.current 访问 DOM 元素
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.style.borderColor = '#667eea'
    }
  }

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  return (
    <div style={{ padding: '16px', background: '#e3f2fd', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>1️⃣ 访问 DOM：获取焦点</h3>
      
      <input
        ref={inputRef}
        type="text"
        placeholder="点击按钮获得焦点"
        style={{ 
          padding: '8px',
          borderRadius: '4px',
          border: '2px solid #ccc',
          transition: 'border-color 0.3s'
        }}
      />
      
      <div style={{ marginTop: '12px' }}>
        <button onClick={handleFocus}>🎯 获得焦点</button>
        {' '}
        <button onClick={handleClear}>🗑️ 清空内容</button>
      </div>

      <div style={{ marginTop: '12px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 <code>ref.current</code> 返回真实的 DOM 元素，可以调用原生方法
      </div>
    </div>
  )
}
