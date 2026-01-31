import { useEffect, useState } from 'react'

// 8️⃣ 实用技巧：防抖和去重
export function PracticalTechniques() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    // 如果搜索词为空，清空结果
    if (!searchTerm.trim()) {
      setResults([])
      return
    }

    // 设置延迟定时器（防抖）
    const timer = setTimeout(() => {
      setIsSearching(true)
      console.log('🔍 搜索:', searchTerm)

      // 模拟 API 请求
      setTimeout(() => {
        // 模拟搜索结果
        const mockData = ['苹果', '香蕉', '橙子', '葡萄', '西瓜']
        const filtered = mockData.filter(item => 
          item.includes(searchTerm)
        )
        setResults(filtered)
        setIsSearching(false)
      }, 600)
    }, 500)  // 500ms 防抖延迟

    // 清理函数：取消上一个未完成的请求
    return () => {
      clearTimeout(timer)
    }
  }, [searchTerm])

  return (
    <div style={{ padding: '16px', background: '#f3e5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>8️⃣ 实用技巧：防抖（Debounce）</h3>

      <div style={{ marginBottom: '12px' }}>
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索水果（自动防抖）"
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '4px', minHeight: '100px' }}>
        {isSearching && <p>⏳ 搜索中...</p>}
        {!isSearching && results.length === 0 && (
          <p style={{ color: '#999' }}>
            {searchTerm ? '未找到匹配项' : '输入搜索词'}
          </p>
        )}
        {results.length > 0 && (
          <ul>
            {results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '8px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 在 Effect 中使用 setTimeout + 清理函数实现防抖，避免过多的 API 请求
      </div>
    </div>
  )
}
