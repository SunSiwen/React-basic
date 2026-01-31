import { useEffect, useState } from 'react'

// 6️⃣ 多个 Effects（单一职责原则）
export function MultipleEffects() {
  const [count, setCount] = useState(0)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    console.log(message)
    setLogs(prev => [...prev.slice(-5), message])
  }

  // Effect 1: 监听计数
  useEffect(() => {
    addLog(`📊 计数更新: ${count}`)
  }, [count])

  // Effect 2: 监听网络状态
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      addLog('🌐 网络已连接')
    }

    const handleOffline = () => {
      setIsOnline(false)
      addLog('📴 网络已断开')
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // 清理函数
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      addLog('🗑️ 网络监听器已移除')
    }
  }, [])  // 只在挂载/卸载时执行

  // Effect 3: 页面标题
  useEffect(() => {
    document.title = `计数: ${count}`
    addLog('📝 页面标题已更新')
  }, [count])

  return (
    <div style={{ padding: '16px', background: '#fff9c4', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>6️⃣ 多个 Effects（单一职责）</h3>

      <div style={{ marginBottom: '12px' }}>
        <p>计数: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        {' '}
        <span style={{ marginLeft: '12px' }}>
          网络状态: <strong style={{ color: isOnline ? 'green' : 'red' }}>
            {isOnline ? '🌐 在线' : '📴 离线'}
          </strong>
        </span>
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '4px', fontSize: '13px', maxHeight: '120px', overflow: 'auto' }}>
        <strong>执行日志：</strong>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 每个 Effect 处理一个职责，更容易理解和维护
      </div>
    </div>
  )
}
