import { useState } from 'react'

// 5️⃣ 多个状态管理
export function MultipleStates() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [isStudent, setIsStudent] = useState(false)
  const [city, setCity] = useState('北京')

  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>5️⃣ 多个独立状态</h3>
      <div style={{ background: 'white', padding: '12px', borderRadius: '4px', marginBottom: '12px' }}>
        <div style={{ marginBottom: '8px' }}>
          <label>姓名: </label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="输入姓名"
            style={{ padding: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '8px' }}>
          <label>年龄: </label>
          <input 
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={{ padding: '4px', width: '100px' }}
          />
        </div>
        <div style={{ marginBottom: '8px' }}>
          <label>
            <input 
              type="checkbox"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
            />
            {' '}是否学生
          </label>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <label>城市: </label>
          <select value={city} onChange={(e) => setCity(e.target.value)} style={{ padding: '4px' }}>
            <option value="北京">北京</option>
            <option value="上海">上海</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
          </select>
        </div>
      </div>
      <div style={{ background: '#e3f2fd', padding: '12px', borderRadius: '4px' }}>
        <strong>当前信息：</strong>
        <p>姓名: {name || '未填写'}</p>
        <p>年龄: {age} 岁</p>
        <p>身份: {isStudent ? '学生' : '非学生'}</p>
        <p>城市: {city}</p>
      </div>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        💡 相关的状态可以合并成对象，不相关的可以分开管理
      </div>
    </div>
  )
}
