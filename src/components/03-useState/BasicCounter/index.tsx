import { useState } from 'react'

// 1️⃣ 基础用法：简单的计数器
export function BasicCounter() {
  // useState 返回 [状态值, 更新函数]
  const [count, setCount] = useState(0)  // 初始值为 0

  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>1️⃣ 基础计数器</h3>
      <p>当前计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {' '}
      <button onClick={() => setCount(count - 1)}>-1</button>
      {' '}
      <button onClick={() => setCount(0)}>重置</button>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        💡 每次点击按钮，状态更新，组件重新渲染
      </div>
    </div>
  )
}
