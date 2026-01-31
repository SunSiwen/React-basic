import { useEffect, useState } from 'react'

// 1️⃣ 三种依赖项形式对比
export function DependencyArrayTypes() {
  return (
    <div style={{ padding: '16px', background: '#e8eaf6', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>1️⃣ 三种依赖项形式</h3>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'white',
        marginTop: '12px'
      }}>
        <thead>
          <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>形式</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>代码</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>执行时机</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>用途</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>❌ 无依赖</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>useEffect(() =&gt; {...})</td>
            <td style={{ padding: '12px' }}>每次渲染都执行</td>
            <td style={{ padding: '12px', color: '#d32f2f' }}>⚠️ 通常有问题</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>✅ 空数组</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>useEffect(() =&gt; {...}, [])</td>
            <td style={{ padding: '12px' }}>只在挂载时执行一次</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>初始化、一次性请求</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>✅ 有依赖项</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>useEffect(() =&gt; {...}, [dep])</td>
            <td style={{ padding: '12px' }}>依赖项改变时执行</td>
            <td style={{ padding: '12px', color: '#388e3c' }}>响应特定变化</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '12px', padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 <strong>规则：</strong> 依赖项数组中必须列出所有在 Effect 中使用的外部值
      </div>
    </div>
  )
}

// 演示：无依赖 vs 空依赖
export function NoDependencyVsEmpty() {
  const [count, setCount] = useState(0)
  const [effectLogsNone, setEffectLogsNone] = useState<string[]>([])
  const [effectLogsEmpty, setEffectLogsEmpty] = useState<string[]>([])

  // ❌ 无依赖 - 每次都执行
  useEffect(() => {
    const log = `执行（无依赖） - render #${effectLogsNone.length + 1}`
    console.log('❌', log)
    setEffectLogsNone(prev => [...prev.slice(-4), log])
  })

  // ✅ 空依赖 - 只执行一次
  useEffect(() => {
    const log = `执行（空依赖） - 只执行一次`
    console.log('✅', log)
    setEffectLogsEmpty([log])
  }, [])

  return (
    <div style={{ padding: '16px', background: '#fff3e0', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>📊 无依赖 vs 空依赖</h3>
      
      <p>计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p style={{ fontSize: '13px', color: '#666' }}>👆 点击按钮增加计数，观察下面两个日志的差异</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
        <div>
          <strong style={{ color: '#d32f2f' }}>❌ 无依赖数组</strong>
          <div style={{ background: '#ffcdd2', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '8px' }}>
            {effectLogsNone.length === 0 ? (
              <div style={{ color: '#999' }}>等待执行...</div>
            ) : (
              effectLogsNone.map((log, i) => (
                <div key={i}>{log}</div>
              ))
            )}
          </div>
        </div>

        <div>
          <strong style={{ color: '#388e3c' }}>✅ 空依赖数组</strong>
          <div style={{ background: '#c8e6c9', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '8px' }}>
            {effectLogsEmpty.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        📝 打开控制台，每次点击 +1 都会看到 "❌" 日志重复，但 "✅" 日志只打印一次
      </div>
    </div>
  )
}
