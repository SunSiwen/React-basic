import { useState, useEffect, useMemo, useRef } from 'react'

// 解决方案 2：使用 useMemo 缓存数组
export function UseMemoSolution() {
  const [items, setItems] = useState(['苹果', '香蕉'])
  const [filter, setFilter] = useState('')
  const effectCountRef = useRef(0)
  const [effectCount, setEffectCount] = useState(0)

  // ✅ 使用 useMemo 缓存过滤结果
  // 只有当 items 或 filter 真的变化时，才会创建新数组
  const filteredItems = useMemo(() => {
    console.log('🔄 重新计算过滤结果')
    return items.filter(item => item.includes(filter))
  }, [items, filter])

  // 现在可以安心使用 filteredItems 作为依赖项
  useEffect(() => {
    console.log('✅ 过滤结果确实变化了:', filteredItems)
    effectCountRef.current += 1
    // 在下一帧更新 UI，避免级联渲染
    setTimeout(() => {
      setEffectCount(effectCountRef.current)
    }, 0)
  }, [filteredItems])

  const addItem = () => {
    setItems([...items, `水果${items.length + 1}`])
  }

  return (
    <div style={{ padding: '16px', background: '#f0f4ff', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案 2：useMemo 缓存数组</h3>

      <div style={{ marginBottom: '12px' }}>
        <label>
          过滤: 
          <input 
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="输入过滤词"
            style={{ padding: '4px', marginLeft: '8px' }}
          />
        </label>
        {' '}
        <button onClick={addItem}>添加项目</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <strong>完整列表：</strong>
          <ul style={{ background: 'white', padding: '12px', borderRadius: '4px' }}>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong>过滤结果：</strong>
          <ul style={{ background: 'white', padding: '12px', borderRadius: '4px' }}>
            {filteredItems.length === 0 ? (
              <li style={{ listStyle: 'none', color: '#999' }}>无匹配项</li>
            ) : (
              filteredItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            )}
          </ul>
        </div>
      </div>

      <p style={{ marginTop: '12px', color: '#666', fontSize: '13px' }}>
        useEffect 执行次数: <strong>{effectCount}</strong> 次
      </p>

      <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>
        💡 只有当过滤结果真的改变时，useEffect 才会执行（打开控制台观察）
      </div>
    </div>
  )
}
