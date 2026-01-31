import { useEffect, useState } from 'react'

// 陷阱 2️⃣: 对象作为依赖项
export function ObjectDependencyTrap() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  // ❌ 陷阱：对象每次都是新引用，导致无限循环
  const config = { threshold: 10 }  // 每次渲染都是新对象

  useEffect(() => {
    const log = `执行 Effect（对象依赖）- 当前 count: ${count}`
    console.log('⚠️', log)
    setLogs(prev => [...prev.slice(-4), log])
  }, [config])  // ❌ config 每次都是新引用！

  return (
    <div style={{ padding: '16px', background: '#ffebee', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>❌ 陷阱 2️⃣: 对象作为依赖项</h3>

      <p>计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <div style={{ background: '#ffcdd2', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#d32f2f' }}>执行日志：</strong>
        {logs.map((log, i) => (
          <div key={i} style={{ marginTop: '4px' }}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        <strong>⚠️ 问题：</strong> 每次点击 +1 都会执行 Effect，形成无限循环<br/>
        <strong>原因：</strong> config 是在 render 中创建的，每次都是新对象，引用不同，所以依赖项总是改变
      </div>
    </div>
  )
}

// ✅ 解决方案 1: useCallback 稳定函数引用
import { useCallback } from 'react'

export function ObjectDependencyFixed1() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  // ✅ 使用 useMemo 稳定对象引用
  import type { useMemo } from 'react'
  
  // 这里简化处理，将 config 定义在组件外
  const config = { threshold: 10 }

  useEffect(() => {
    const log = `执行 Effect - 当前 count: ${count}`
    console.log('✅', log)
    setLogs(prev => [...prev.slice(-4), log])
  }, [count])  // ✅ 依赖 count 而不是 config

  return (
    <div style={{ padding: '16px', background: '#e8f5e9', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案 1: 依赖具体值而非对象</h3>

      <p>计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <div style={{ background: '#c8e6c9', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#2e7d32' }}>执行日志：</strong>
        {logs.map((log, i) => (
          <div key={i} style={{ marginTop: '4px' }}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 解决：</strong> 只依赖 count，不依赖对象<br/>
        <strong>或者：</strong> 把对象定义在组件外面，这样就不会每次都重新创建
      </div>
    </div>
  )
}

// ✅ 解决方案 2: useMemo 包装对象
export function ObjectDependencyFixed2() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([])
  const { useMemo } = require('react')

  // ✅ 使用 useMemo 缓存对象
  const config = useMemo(() => {
    return { threshold: 10 }
  }, [])  // 空依赖 = 只创建一次

  useEffect(() => {
    const log = `执行 Effect - 当前 count: ${count}, threshold: ${config.threshold}`
    console.log('✅', log)
    setLogs(prev => [...prev.slice(-4), log])
  }, [config, count])

  return (
    <div style={{ padding: '16px', background: '#e8f5e9', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案 2: useMemo 缓存对象</h3>

      <p>计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <div style={{ background: '#c8e6c9', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto', marginTop: '12px' }}>
        <strong style={{ color: '#2e7d32' }}>执行日志：</strong>
        {logs.map((log, i) => (
          <div key={i} style={{ marginTop: '4px' }}>{log}</div>
        ))}
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 解决：</strong> useMemo 缓存对象，只创建一次，所以依赖项稳定
      </div>
    </div>
  )
}
