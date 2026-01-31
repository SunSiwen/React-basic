import { useState } from 'react'

// 6️⃣ 惰性初始化（性能优化）
function expensiveCalculation() {
  console.log('🔥 执行了昂贵的计算...')
  // 模拟复杂计算
  let result = 0
  for (let i = 0; i < 100000000; i++) {
    result += i
  }
  return Math.floor(Math.random() * 100)
}

export function LazyInitialization() {
  // ❌ 每次渲染都会执行计算（即使不需要）
  // const [count, setCount] = useState(expensiveCalculation())

  // ✅ 惰性初始化：只在首次渲染时执行
  const [count, setCount] = useState(() => {
    console.log('✅ 惰性初始化：只执行一次')
    return expensiveCalculation()
  })

  const [renderCount, setRenderCount] = useState(0)

  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>6️⃣ 惰性初始化（性能优化）</h3>
      <p>初始值: <strong>{count}</strong></p>
      <p>渲染次数: <strong>{renderCount}</strong></p>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        触发重新渲染
      </button>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        💡 打开控制台，点击按钮观察：惰性初始化函数只执行一次
      </div>
      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        <code>useState(() =&gt; expensiveCalculation())</code> 比 <code>useState(expensiveCalculation())</code> 更高效
      </div>
    </div>
  )
}
