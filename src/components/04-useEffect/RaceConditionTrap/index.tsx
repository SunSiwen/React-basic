import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

// 陷阱 3️⃣: 竞态条件（Race Condition）
export function RaceConditionTrap() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState<User | null>(null)
  const [requestLogs, setRequestLogs] = useState<string[]>([])

  useEffect(() => {
    // 教学演示：故意在 effect 中调用 setState 来记录日志
    // eslint-disable-next-line
    setRequestLogs(prev => [...prev, `📤 请求用户 ${userId}`])

    // 模拟 API 请求
    setTimeout(() => {
      const mockUsers: Record<number, User> = {
        1: { id: 1, name: '张三' },
        2: { id: 2, name: '李四' },
        3: { id: 3, name: '王五' }
      }
      
      // ❌ 陷阱：如果用户快速切换，后发送的请求可能会覆盖先发送的结果
      console.log('📥 收到用户', userId)
      setUser(mockUsers[userId])
      setRequestLogs(prev => [...prev, `📥 收到用户 ${userId}`])
    }, 1000)

    // ❌ 问题：没有取消上一个请求
    // return () => clearTimeout(timer)
  }, [userId])

  return (
    <div style={{ padding: '16px', background: '#ffebee', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>❌ 陷阱 3️⃣: 竞态条件</h3>

      <div style={{ marginBottom: '12px' }}>
        <p>快速点击按钮，观察日志：</p>
        {[1, 2, 3].map(id => (
          <button 
            key={id}
            onClick={() => setUserId(id)}
            style={{ marginRight: '8px', padding: '6px 12px' }}
          >
            用户 {id}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <strong>当前用户：</strong>
          <div style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '60px' }}>
            {user ? `${user.name} (ID: ${user.id})` : '加载中...'}
          </div>
        </div>

        <div>
          <strong>请求日志：</strong>
          <div style={{ background: '#ffcdd2', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto' }}>
            {requestLogs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        <strong>⚠️ 问题：</strong> 快速点击不同用户，可能显示错误的用户信息<br/>
        <strong>原因：</strong> 没有取消前一个请求，后发送的请求可能被先发送的"覆盖"
      </div>
    </div>
  )
}

// ✅ 解决方案: 取消前一个请求
export function RaceConditionFixed() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState<User | null>(null)
  const [requestLogs, setRequestLogs] = useState<string[]>([])

  useEffect(() => {
    // 教学演示：故意在 effect 中调用 setState 来记录日志
    // eslint-disable-next-line
    setRequestLogs(prev => [...prev.slice(-5), `📤 请求用户 ${userId}`])
    
    let isMounted = true  // ✅ 标记组件是否仍在挂载

    const timer = setTimeout(() => {
      if (!isMounted) return  // ✅ 如果组件卸载，不执行
      
      const mockUsers: Record<number, User> = {
        1: { id: 1, name: '张三' },
        2: { id: 2, name: '李四' },
        3: { id: 3, name: '王五' }
      }
      
      console.log('📥 收到用户', userId)
      setUser(mockUsers[userId])
      setRequestLogs(prev => [...prev, `📥 收到用户 ${userId}`])
    }, 1000)

    // ✅ 清理函数
    return () => {
      clearTimeout(timer)
      isMounted = false  // ✅ 标记为卸载
    }
  }, [userId])

  return (
    <div style={{ padding: '16px', background: '#e8f5e9', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案: 取消前一个请求</h3>

      <div style={{ marginBottom: '12px' }}>
        <p>快速点击按钮，观察日志：</p>
        {[1, 2, 3].map(id => (
          <button 
            key={id}
            onClick={() => setUserId(id)}
            style={{ marginRight: '8px', padding: '6px 12px' }}
          >
            用户 {id}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <strong>当前用户：</strong>
          <div style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '60px' }}>
            {user ? `${user.name} (ID: ${user.id})` : '加载中...'}
          </div>
        </div>

        <div>
          <strong>请求日志：</strong>
          <div style={{ background: '#c8e6c9', padding: '12px', borderRadius: '4px', fontSize: '12px', maxHeight: '100px', overflow: 'auto' }}>
            {requestLogs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '12px', padding: '12px', background: '#c8e6c9', borderRadius: '4px', fontSize: '13px' }}>
        <strong>✅ 解决：</strong> 使用 isMounted 标记，在返回值中清理<br/>
        <strong>模式：</strong> 这被称为"竞态条件保护"，确保只处理最新的请求
      </div>
    </div>
  )
}
