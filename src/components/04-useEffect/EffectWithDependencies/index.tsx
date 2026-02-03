import { useEffect, useState } from 'react'

// 3️⃣ 依赖特定状态（更新阶段）
export function EffectWithDependencies() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [log, setLog] = useState<string[]>([])

  // 只在 count 变化时执行
  useEffect(() => {
    const message = `✅ count 变化了，新值: ${count}`
    console.log(message)
    setLog(prev => [...prev.slice(-4), message])
  }, [count])  // 依赖 count

  // 只在 name 变化时执行
  useEffect(() => {
    const message = `✅ name 变化了，新值: ${name}`
    console.log(message)
    setLog(prev => [...prev.slice(-4), message])
  }, [name])  // 依赖 name

  return (
    <div style={{ padding: '16px', background: '#f0f4c3', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>3️⃣ 更新阶段（Update）</h3>
      
      <div style={{ marginBottom: '12px' }}>
        <div style={{ marginBottom: '8px' }}>
          <label>
            Count: {count}
            {' '}
            <button onClick={() => setCount(count + 1)}>+1</button>
          </label>
        </div>
        <div>
          <label>
            Name: 
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="输入名字"
              style={{ padding: '4px', marginLeft: '8px' }}
            />
          </label>
        </div>
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '4px', fontSize: '13px', maxHeight: '100px', overflow: 'auto' }}>
        <strong>执行日志：</strong>
        {log.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 <code>{'useEffect(() => {...}, [count])'}</code> - 只在 count 变化时执行
      </div>
    </div>
  )
}
