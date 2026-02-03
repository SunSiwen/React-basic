import { useEffect, useState } from 'react'

// 1️⃣ 基础用法：组件挂载时执行（[]依赖）
export function EffectOnMount() {
  const [message, setMessage] = useState('')

  // 只在组件挂载时执行一次
  useEffect(() => {
    console.log('🔵 组件挂载了')
    setMessage('✅ 组件已挂载，执行了初始化代码')
  }, [])  // 空依赖数组 = 只执行一次

  return (
    <div style={{ padding: '16px', background: '#e3f2fd', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>1️⃣ 挂载阶段（Mount）</h3>
      <p>{message}</p>
      <p style={{ fontSize: '13px', color: '#666' }}>
        打开控制台，刷新页面，你会看到 "组件挂载了" 只打印一次
      </p>
      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 <code>{'useEffect(() => {...}, [])'}</code> - 只在挂载时执行
      </div>
    </div>
  )
}
