import { useEffect, useState } from 'react'

// 4️⃣ 清理函数（卸载/更新前执行）
export function EffectCleanup() {
  const [isVisible, setIsVisible] = useState(true)
  const [log, setLog] = useState<string[]>([])

  const addLog = (message: string) => {
    console.log(message)
    setLog(prev => [...prev, message])
  }

  return (
    <div style={{ padding: '16px', background: '#e0f2f1', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>4️⃣ 卸载阶段（Cleanup）</h3>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '隐藏' : '显示'}组件
      </button>

      {isVisible && <ComponentWithCleanup onLog={addLog} />}

      <div style={{ marginTop: '12px', background: 'white', padding: '12px', borderRadius: '4px', fontSize: '13px', maxHeight: '120px', overflow: 'auto' }}>
        <strong>执行日志：</strong>
        {log.length === 0 ? (
          <div style={{ color: '#999' }}>暂无日志</div>
        ) : (
          log.map((l, i) => (
            <div key={i}>{l}</div>
          ))
        )}
      </div>

      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 <code>return () =&gt; {...}</code> - 清理函数在组件卸载或依赖更新前执行
      </div>
    </div>
  )
}

// 有清理函数的组件
interface ComponentWithCleanupProps {
  onLog: (message: string) => void
}

function ComponentWithCleanup({ onLog }: ComponentWithCleanupProps) {
  useEffect(() => {
    onLog('📍 组件挂载')

    // 返回清理函数
    return () => {
      onLog('🗑️ 清理函数执行（组件卸载前）')
    }
  }, [onLog])

  return (
    <div style={{ 
      marginTop: '12px', 
      padding: '12px', 
      background: '#c8e6c9', 
      borderRadius: '4px',
      border: '2px solid #4caf50'
    }}>
      <p>✅ 我是一个子组件，看控制台和日志区域</p>
    </div>
  )
}
