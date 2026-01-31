import { useState } from 'react'

// 3️⃣ 对象状态管理
export function ObjectState() {
  const [user, setUser] = useState({
    name: '张三',
    age: 25,
    email: 'zhangsan@example.com'
  })

  // 更新单个属性（需要展开运算符保留其他属性）
  const updateName = () => {
    setUser({ ...user, name: '李四' })
  }

  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 })
  }

  const updateEmail = () => {
    setUser({ ...user, email: 'lisi@example.com' })
  }

  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>3️⃣ 对象状态</h3>
      <div style={{ background: 'white', padding: '12px', borderRadius: '4px', marginBottom: '12px' }}>
        <p>姓名: <strong>{user.name}</strong></p>
        <p>年龄: <strong>{user.age}</strong></p>
        <p>邮箱: <strong>{user.email}</strong></p>
      </div>
      <button onClick={updateName}>改名为李四</button>
      {' '}
      <button onClick={increaseAge}>年龄 +1</button>
      {' '}
      <button onClick={updateEmail}>更新邮箱</button>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        💡 更新对象时必须创建新对象：<code>{`{...user, name: '新值'}`}</code>
      </div>
    </div>
  )
}
