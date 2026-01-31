import { useState, useCallback } from 'react'

// 解决方案：自定义 Hook - useArray
// 这样可以对外暴露稳定的回调函数
export function useArray<T>(initialArray: T[]) {
  const [array, setArray] = useState(initialArray)

  // 这些方法的引用永远不变
  const push = useCallback((item: T) => {
    setArray(prev => [...prev, item])
  }, [])

  const remove = useCallback((index: number) => {
    setArray(prev => prev.filter((_, i) => i !== index))
  }, [])

  const clear = useCallback(() => {
    setArray([])
  }, [])

  const reset = useCallback((newArray: T[]) => {
    setArray(newArray)
  }, [])

  return { array, push, remove, clear, reset }
}

// 使用自定义 Hook 的示例
export function UseArrayHookExample() {
  const { array, push, remove, clear } = useArray(['苹果', '香蕉', '橙子'])
  const [inputValue, setInputValue] = useState('')
  const [operationLog, setOperationLog] = useState<string[]>([])

  const handleAdd = () => {
    if (inputValue.trim()) {
      push(inputValue)
      setOperationLog([...operationLog, `➕ 添加: ${inputValue}`])
      setInputValue('')
    }
  }

  const handleRemove = (index: number) => {
    remove(index)
    setOperationLog([...operationLog, `❌ 删除: ${array[index]}`])
  }

  const handleClear = () => {
    clear()
    setOperationLog([...operationLog, '🗑️ 清空列表'])
  }

  return (
    <div style={{ padding: '16px', background: '#e3f2fd', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>✅ 解决方案 1：自定义 Hook - useArray</h3>
      
      <div style={{ marginBottom: '12px' }}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="输入水果名称"
          style={{ padding: '6px', marginRight: '8px' }}
        />
        <button onClick={handleAdd}>添加</button>
        {' '}
        <button onClick={handleClear}>清空</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <strong>当前列表：</strong>
          <ul style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '100px' }}>
            {array.length === 0 ? (
              <li style={{ listStyle: 'none', color: '#999' }}>列表为空</li>
            ) : (
              array.map((item, index) => (
                <li key={index}>
                  {item}
                  {' '}
                  <button onClick={() => handleRemove(index)} style={{ fontSize: '12px' }}>
                    删除
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        <div>
          <strong>操作日志：</strong>
          <div style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '100px', overflow: 'auto', maxHeight: '150px', fontSize: '13px' }}>
            {operationLog.length === 0 ? (
              <div style={{ color: '#999' }}>暂无操作</div>
            ) : (
              operationLog.map((log, i) => (
                <div key={i}>{log}</div>
              ))
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>
        💡 push、remove、clear 等方法的引用永远稳定，可以放心作为依赖项
      </div>
    </div>
  )
}
