import { useState, useRef, useEffect } from 'react'

// 解决方案 3：比较数据内容而不是引用
// 使用 useRef + useEffect 实现 watchEffect 的效果
export function UseRefComparison() {
  const [items, setItems] = useState(['苹果', '香蕉', '橙子'])
  const [log, setLog] = useState<string[]>([])
  const prevItemsRef = useRef<string[]>([])

  // 比较内容而不是引用
  useEffect(() => {
    const isChanged = 
      prevItemsRef.current.length !== items.length ||
      prevItemsRef.current.some((item, i) => item !== items[i])

    if (isChanged) {
      const log = `✅ 数组内容改变: [${items.join(', ')}]`
      console.log(log)
      setLog(prev => [...prev, log])
      prevItemsRef.current = items
    }
  }, [items])

  const addItem = () => {
    setItems([...items, `水果${items.length + 1}`])
  }

  const clearLog = () => {
    setLog([])
  }

  return (
    <div style={{ padding: '16px', background: '#f0fff4', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案 3：useRef 比较内容</h3>

      <div style={{ marginBottom: '12px' }}>
        <button onClick={addItem}>添加项目</button>
        {' '}
        <button onClick={clearLog}>清空日志</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <strong>当前数组：</strong>
          <div style={{ background: 'white', padding: '12px', borderRadius: '4px' }}>
            [{items.join(', ')}]
          </div>
        </div>

        <div>
          <strong>监听日志：</strong>
          <div style={{ background: 'white', padding: '12px', borderRadius: '4px', maxHeight: '120px', overflow: 'auto', fontSize: '13px' }}>
            {log.length === 0 ? (
              <div style={{ color: '#999' }}>等待数组改变...</div>
            ) : (
              log.map((item, i) => (
                <div key={i}>{item}</div>
              ))
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>
        💡 通过 useRef 保存前一个值，然后比较内容，避免引用问题
      </div>
    </div>
  )
}
