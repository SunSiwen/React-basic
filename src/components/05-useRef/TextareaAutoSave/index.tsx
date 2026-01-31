import { useRef, useState } from 'react'

// 6️⃣ 实际应用：文本框自动保存
export function TextareaAutoSave() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const saveCountRef = useRef(0)
  const [saveCount, setSaveCount] = useState(0)

  const handleAutoSave = () => {
    if (textareaRef.current) {
      const content = textareaRef.current.value
      saveCountRef.current += 1
      setSaveCount(saveCountRef.current)
      
      // 模拟保存
      console.log(`✅ 自动保存 #${saveCountRef.current}:`, content)
      
      // 显示提示
      const originalBg = textareaRef.current.style.background
      textareaRef.current.style.background = '#c8e6c9'
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.background = originalBg
        }
      }, 500)
    }
  }

  const handleClear = () => {
    if (textareaRef.current) {
      textareaRef.current.value = ''
      saveCountRef.current = 0
      setSaveCount(0)
    }
  }

  return (
    <div style={{ padding: '16px', background: '#e0f2f1', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>6️⃣ 实际应用：文本框自动保存</h3>

      <textarea
        ref={textareaRef}
        placeholder="输入内容，点击下面的按钮自动保存..."
        style={{
          width: '100%',
          height: '120px',
          padding: '12px',
          borderRadius: '4px',
          border: '2px solid #00897b',
          fontFamily: 'monospace',
          boxSizing: 'border-box'
        }}
      />

      <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
        <button onClick={handleAutoSave}>💾 保存</button>
        <button onClick={handleClear}>🗑️ 清空</button>
        <span style={{ padding: '8px', color: '#666', fontSize: '13px' }}>
          已保存 <strong>{saveCount}</strong> 次
        </span>
      </div>

      <div style={{ marginTop: '12px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 使用 ref 跟踪保存次数，不需要额外的 state
      </div>
    </div>
  )
}
