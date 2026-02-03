import { useEffect, useState } from 'react'

// 陷阱 1️⃣: 闭包陷阱 - 忘记依赖项
export function ClosureTrap() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  // ❌ 陷阱：count 被使用但没有作为依赖
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleClick = () => {
      // count 永远是 0（闭包陷阱）
      console.log('❌ 陷阱：count =', count)
      // 教学演示：故意在 effect 中调用 setState 来记录日志
      // eslint-disable-next-line
      setLogs(prev => [...prev.slice(-4), `❌ 陷阱：count = ${count}`])
    }

    window.addEventListener('click', handleClick)
    
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])  // ❌ 缺少 count

  return (
    <div style={{ padding: '16px', background: '#ffebee', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>❌ 陷阱 1️⃣: 闭包陷阱</h3>

      <p>计数: <strong style={{ fontSize: '18px' }}>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p style={{ fontSize: '13px', color: '#666' }}>
        👆 增加计数，然后点击页面任意位置，观察控制台和下面的日志
      </p>

      <div style={{ background: '#ffcdd2', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#d32f2f' }}>问题日志：</strong>
        {logs.length === 0 ? (
          <div style={{ color: '#999', marginTop: '8px' }}>点击页面查看</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} style={{ marginTop: '4px' }}>{log}</div>
          ))
        )}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        <strong>⚠️ 问题：</strong> count 增加到 5，但点击页面时日志仍显示 count = 0<br/>
        <strong>原因：</strong> Effect 中的 handleClick 被创建时，count = 0，这个值被"冻结"了
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 解决方案：</strong> 将 count 添加到依赖数组
      </div>
    </div>
  )
}

// ✅ 正确做法 - 完整的依赖项
export function ClosureTrapFixed() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  // ✅ 正确：count 作为依赖项
  useEffect(() => {
    const handleClick = () => {
      console.log('✅ 正确：count =', count)
      // 教学演示：故意在 effect 中调用 setState 来记录日志
      // eslint-disable-next-line
      setLogs(prev => [...prev.slice(-4), `✅ 正确：count = ${count}`])
    }

    window.addEventListener('click', handleClick)
    
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [count])  // ✅ 添加 count 依赖

  return (
    <div style={{ padding: '16px', background: '#e8f5e9', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 正确做法：完整依赖项</h3>

      <p>计数: <strong style={{ fontSize: '18px' }}>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p style={{ fontSize: '13px', color: '#666' }}>
        👆 增加计数，然后点击页面任意位置，观察控制台和下面的日志
      </p>

      <div style={{ background: '#c8e6c9', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#2e7d32' }}>正确日志：</strong>
        {logs.length === 0 ? (
          <div style={{ color: '#999', marginTop: '8px' }}>点击页面查看</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} style={{ marginTop: '4px' }}>{log}</div>
          ))
        )}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 结果：</strong> count 增加到 5，点击页面时日志正确显示 count = 5<br/>
        <strong>原因：</strong> count 在依赖项中，所以 Effect 会重新运行，handleClick 获得最新的 count
      </div>
    </div>
  )
}
