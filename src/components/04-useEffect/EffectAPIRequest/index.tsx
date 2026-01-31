import { useEffect, useState } from 'react'

// 5️⃣ 真实场景：API 请求
export function EffectAPIRequest() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // 模拟 API 请求
    const fetchUser = async () => {
      setLoading(true)
      setError('')
      
      try {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // 模拟用户数据
        const mockUsers: Record<number, any> = {
          1: { id: 1, name: '张三', email: 'zhangsan@example.com' },
          2: { id: 2, name: '李四', email: 'lisi@example.com' },
          3: { id: 3, name: '王五', email: 'wangwu@example.com' }
        }
        
        setUser(mockUsers[userId] || null)
      } catch (err) {
        setError('加载失败')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId])  // 只在 userId 变化时重新请求

  return (
    <div style={{ padding: '16px', background: '#fce4ec', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>5️⃣ 真实场景：API 请求</h3>

      <div style={{ marginBottom: '12px' }}>
        <label>
          选择用户：
          {[1, 2, 3].map(id => (
            <button 
              key={id}
              onClick={() => setUserId(id)}
              style={{
                marginLeft: '8px',
                fontWeight: userId === id ? 'bold' : 'normal',
                background: userId === id ? '#e91e63' : '#f5f5f5',
                color: userId === id ? 'white' : 'black',
                padding: '6px 12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              用户 {id}
            </button>
          ))}
        </label>
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '100px' }}>
        {loading && <p>⏳ 加载中...</p>}
        {error && <p style={{ color: 'red' }}>❌ {error}</p>}
        {user && (
          <div>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>姓名:</strong> {user.name}</p>
            <p><strong>邮箱:</strong> {user.email}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 只在 userId 变化时重新发送请求，避免不必要的 API 调用
      </div>
    </div>
  )
}
