import { useState } from 'react'

// 4️⃣ 数组状态管理
export function ArrayState() {
  const [items, setItems] = useState(['苹果', '香蕉', '橙子'])
  const [inputValue, setInputValue] = useState('')

  // 添加项
  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue])  // 展开旧数组，添加新项
      setInputValue('')
    }
  }

  // 删除项
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  // 清空
  const clearAll = () => {
    setItems([])
  }

  return (
    <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>4️⃣ 数组状态</h3>
      <div style={{ marginBottom: '12px' }}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
          placeholder="输入水果名称"
          style={{ padding: '6px', marginRight: '8px' }}
        />
        <button onClick={addItem}>添加</button>
        {' '}
        <button onClick={clearAll}>清空</button>
      </div>
      <ul style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '50px' }}>
        {items.length === 0 ? (
          <li style={{ listStyle: 'none', color: '#999' }}>列表为空</li>
        ) : (
          items.map((item, index) => (
            <li key={index} style={{ padding: '4px 0' }}>
              {item}
              {' '}
              <button 
                onClick={() => removeItem(index)}
                style={{ fontSize: '12px', marginLeft: '8px' }}
              >
                删除
              </button>
            </li>
          ))
        )}
      </ul>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        💡 数组操作：添加 <code>[...items, newItem]</code>，删除 <code>items.filter()</code>
      </div>
    </div>
  )
}
