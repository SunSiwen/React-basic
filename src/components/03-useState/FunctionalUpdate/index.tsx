import { useState } from 'react'

// 2️⃣ 函数式更新：基于前一个状态
export function FunctionalUpdate() {
  const [count, setCount] = useState(0)

  // ❌ 错误示范：连续更新可能出错
  const handleWrongClick = () => {
    setCount(count + 1)  // 读取的是当前的 count
    setCount(count + 1)  // 还是读取的是当前的 count（不是 +1 后的）
    setCount(count + 1)  // 结果只会 +1，而不是 +3
  }

  // ✅ 正确做法：函数式更新
  const handleCorrectClick = () => {
    setCount(prev => prev + 1)  // prev 是最新的状态
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)  // 结果会 +3
  }

  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>2️⃣ 函数式更新</h3>
      <p>当前计数: <strong>{count}</strong></p>
      <button onClick={handleWrongClick} style={{ background: '#ff6b6b', color: 'white' }}>
        ❌ 错误：连续 +3（实际只 +1）
      </button>
      {' '}
      <button onClick={handleCorrectClick} style={{ background: '#51cf66', color: 'white' }}>
        ✅ 正确：连续 +3
      </button>
      {' '}
      <button onClick={() => setCount(0)}>重置</button>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        💡 当新状态依赖旧状态时，使用 <code>{'setCount(prev => prev + 1)'}</code>
      </div>
    </div>
  )
}
