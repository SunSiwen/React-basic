import { useEffect, useState } from 'react'

// 2️⃣ 每次渲染都执行（无依赖）
export function EffectNoCleanup() {
  const [count, setCount] = useState(0)
  const [renderLog, setRenderLog] = useState<string[]>([])

  // 没有依赖数组 = 每次渲染都执行（通常不推荐）
  useEffect(() => {
    const log = `🔄 渲染了，当前 count: ${count}`
    console.log(log)
    setRenderLog(prev => [...prev.slice(-4), log])  // 只保留最后5条
  })  // 注意：没有依赖数组

  return (
    <div style={{ padding: '16px', background: '#f3e5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>2️⃣ 每次渲染都执行</h3>
      <p>当前计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      
      <div style={{ marginTop: '12px', background: 'white', padding: '12px', borderRadius: '4px', fontSize: '13px', maxHeight: '100px', overflow: 'auto' }}>
        <strong>执行日志：</strong>
        {renderLog.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '8px', padding: '8px', background: '#ffebee', borderRadius: '4px', fontSize: '13px' }}>
        ⚠️ <code>{'useEffect(() => {...})'}</code> - 每次渲染都执行，通常会导致性能问题
      </div>
    </div>
  )
}
