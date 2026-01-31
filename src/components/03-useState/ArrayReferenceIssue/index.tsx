import { useState, useEffect, useCallback } from 'react'

// 问题演示：数组引用变化导致的问题
export function ArrayReferenceIssue() {
  const [items, setItems] = useState(['苹果', '香蕉'])
  const [renderCount, setRenderCount] = useState(0)

  // ❌ 问题：items 每次都是新引用，这个 useEffect 会不断执行
  // useEffect(() => {
  //   console.log('📢 数组变化了，执行某个操作...')
  // }, [items])  // items 是新引用，每次都会触发

  // ✅ 解决方案 1：useCallback 包装回调函数
  const handleArrayChange = useCallback((newItems: string[]) => {
    console.log('✅ 数组真的变化了，执行操作')
  }, [])

  useEffect(() => {
    handleArrayChange(items)
  }, [items, handleArrayChange])  // 回调函数引用稳定

  const addItem = () => {
    setItems([...items, `水果${items.length + 1}`])
  }

  return (
    <div style={{ padding: '16px', background: '#fff3cd', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>❌ 问题演示：数组引用变化</h3>
      <p>数组内容: {items.join(', ')}</p>
      <p>渲染次数: {renderCount}</p>
      <button onClick={addItem}>添加项目</button>
      {' '}
      <button onClick={() => setRenderCount(renderCount + 1)}>触发重新渲染</button>
      <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>
        🔍 打开控制台观察：每次数组更新，都会打印"数组真的变化了"
      </div>
    </div>
  )
}
