import { useEffect, useState } from 'react'

// 陷阱 4️⃣: 内存泄漏 - 忘记移除事件监听器
export function MemoryLeakTrap() {
  const [eventCount, setEventCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleResize = () => {
      setEventCount(prev => prev + 1)
      // 教学演示：故意在 effect 中调用 setState 来记录日志
      // eslint-disable-next-line
      setLogs(prev => [...prev.slice(-4), `📏 窗口大小改变 #${eventCount + 1}`])
    }

    window.addEventListener('resize', handleResize)
    
    // ❌ 陷阱：没有清理函数，监听器永远存在
    // return () => {
    //   window.removeEventListener('resize', handleResize)
    // }
  }, [])

  return (
    <div style={{ padding: '16px', background: '#ffebee', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>❌ 陷阱 4️⃣: 内存泄漏</h3>

      <p>窗口大小改变次数: <strong>{eventCount}</strong></p>
      <p style={{ fontSize: '13px', color: '#666' }}>👆 尝试改变浏览器窗口大小</p>

      <div style={{ background: '#ffcdd2', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#d32f2f' }}>事件日志：</strong>
        {logs.map((log, i) => (
          <div key={i} style={{ marginTop: '4px' }}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        <strong>⚠️ 问题：</strong> 多次挂载/卸载该组件，监听器会越来越多<br/>
        <strong>原因：</strong> 没有在清理函数中移除事件监听器
      </div>
    </div>
  )
}

// ✅ 解决方案: 在清理函数中移除监听器
export function MemoryLeakFixed() {
  const [eventCount, setEventCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const handleResize = () => {
      setEventCount(prev => prev + 1)
      // 教学演示：故意在 effect 中调用 setState 来记录日志
      // eslint-disable-next-line
      setLogs(prev => [...prev.slice(-4), `📏 窗口大小改变 #${eventCount + 1}`])
    }

    window.addEventListener('resize', handleResize)
    
    // ✅ 正确：清理函数中移除监听器
    return () => {
      console.log('🗑️ 移除 resize 监听器')
      window.removeEventListener('resize', handleResize)
    }
  }, [eventCount])

  return (
    <div style={{ padding: '16px', background: '#e8f5e9', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案: 清理监听器</h3>

      <p>窗口大小改变次数: <strong>{eventCount}</strong></p>
      <p style={{ fontSize: '13px', color: '#666' }}>👆 尝试改变浏览器窗口大小</p>

      <div style={{ background: '#c8e6c9', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#2e7d32' }}>事件日志：</strong>
        {logs.map((log, i) => (
          <div key={i} style={{ marginTop: '4px' }}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 解决：</strong> 在清理函数中 removeEventListener<br/>
        <strong>模式：</strong> addEventListener 和 removeEventListener 要成对出现
      </div>
    </div>
  )
}

// 常见需要清理的场景
export function CleanupChecklist() {
  return (
    <div style={{ padding: '16px', background: '#f3e5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>📋 需要清理的场景</h3>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'white',
        marginTop: '12px'
      }}>
        <thead>
          <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>场景</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>需要清理</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>清理方法</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>事件监听</td>
            <td style={{ padding: '12px' }}>✅ 是</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>removeEventListener</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>定时器</td>
            <td style={{ padding: '12px' }}>✅ 是</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>clearTimeout / clearInterval</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>异步请求</td>
            <td style={{ padding: '12px' }}>✅ 是</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>AbortController 或 isMounted</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '12px' }}>订阅（Redux、RxJS等）</td>
            <td style={{ padding: '12px' }}>✅ 是</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>unsubscribe()</td>
          </tr>
          <tr>
            <td style={{ padding: '12px' }}>修改 DOM</td>
            <td style={{ padding: '12px' }}>❌ 否</td>
            <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '12px' }}>React 会自动处理</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
