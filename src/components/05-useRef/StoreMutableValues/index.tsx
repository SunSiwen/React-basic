import { useRef, useState } from 'react'

// 3️⃣ 存储可变值 - 计时器 ID
export function StoreMutableValues() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleStart = () => {
    if (isRunning) return
    
    setIsRunning(true)
    // 保存定时器 ID，以便后续清理
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
  }

  const handleStop = () => {
    setIsRunning(false)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const handleReset = () => {
    handleStop()
    setSeconds(0)
  }

  return (
    <div style={{ padding: '16px', background: '#e8f5e9', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>3️⃣ 存储可变值：计时器 ID</h3>

      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#2e7d32'
      }}>
        {seconds}s
      </div>

      <div>
        <button onClick={handleStart} disabled={isRunning}>⏱️ 开始</button>
        {' '}
        <button onClick={handleStop} disabled={!isRunning}>⏹️ 暂停</button>
        {' '}
        <button onClick={handleReset}>🔄 重置</button>
      </div>

      <div style={{ marginTop: '12px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 <code>timerRef.current</code> 存储定时器 ID，不会导致重新渲染
      </div>
    </div>
  )
}
