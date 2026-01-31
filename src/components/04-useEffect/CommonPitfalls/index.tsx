import { useEffect, useState } from 'react'

// 7️⃣ 常见陷阱
export function CommonPitfalls() {
  const [count, setCount] = useState(0)
  const [warnings, setWarnings] = useState<string[]>([])

  const addWarning = (message: string) => {
    setWarnings(prev => [...prev, message])
  }

  // ❌ 陷阱 1: 忘记依赖项（会导致无限循环）
  // useEffect(() => {
  //   setCount(count + 1)  // 每次都更新 count
  // })  // 没有依赖数组或缺少 count，导致无限循环

  // ❌ 陷阱 2: 依赖项不完整
  useEffect(() => {
    // count 被使用了，但没有列在依赖项中
    // 这会导致闭包陷阱，count 永远是初始值
    const handler = () => {
      console.log('❌ 陷阱：count 永远是', count)
    }
    // window.addEventListener('click', handler)
    // return () => window.removeEventListener('click', handler)
  }, [])  // ❌ 缺少 count

  // ✅ 正确做法
  useEffect(() => {
    // 依赖项完整
    const message = `✅ Count 正确地被追踪: ${count}`
    addWarning(message)
  }, [count, addWarning])

  return (
    <div style={{ padding: '16px', background: '#ffebee', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>7️⃣ 常见陷阱</h3>

      <p>当前计数: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <div style={{ marginTop: '12px', background: 'white', padding: '12px', borderRadius: '4px', fontSize: '13px' }}>
        <strong style={{ color: '#d32f2f' }}>⚠️ 常见陷阱：</strong>
        <ul style={{ marginTop: '8px' }}>
          <li><strong>❌ 无限循环：</strong>每次 Effect 中都调用 setState，且没有依赖数组</li>
          <li><strong>❌ 闭包陷阱：</strong>使用了某个值但未列在依赖项中</li>
          <li><strong>❌ 竞态条件：</strong>异步 Effect 没有正确处理取消</li>
          <li><strong>❌ 内存泄漏：</strong>忘记在清理函数中移除监听器</li>
        </ul>
      </div>

      <div style={{ marginTop: '12px', background: '#e8f5e9', padding: '12px', borderRadius: '4px', fontSize: '13px' }}>
        <strong style={{ color: '#2e7d32' }}>✅ 解决方案：</strong>
        <ul style={{ marginTop: '8px' }}>
          <li>使用 ESLint 插件 <code>eslint-plugin-react-hooks</code></li>
          <li>完整列出所有依赖项</li>
          <li>使用 useCallback 稳定函数引用</li>
          <li>在清理函数中移除监听器和定时器</li>
        </ul>
      </div>
    </div>
  )
}
