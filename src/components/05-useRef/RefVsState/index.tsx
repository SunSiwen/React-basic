import { useRef, useState } from 'react'

// 5️⃣ useRef 不会触发重新渲染
export function RefVsState() {
  const [stateRenderCount, setStateRenderCount] = useState(0)
  const refCountRef = useRef(0)
  const [displayStateCount, setDisplayStateCount] = useState(0)
  const [displayRefCount, setDisplayRefCount] = useState(0)

  const handleStateClick = () => {
    setStateRenderCount(stateRenderCount + 1)
    setDisplayStateCount(stateRenderCount + 1)
  }

  const handleRefClick = () => {
    refCountRef.current += 1
    // 不会触发重新渲染！所以界面不会更新
  }

  const handleRefDisplay = () => {
    // 只有通过 setState 才能显示最新的 ref 值
    setDisplayRefCount(refCountRef.current)
  }

  return (
    <div style={{ padding: '16px', background: '#fce4ec', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>5️⃣ useRef 不会触发重新渲染</h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '16px'
      }}>
        {/* State 版本 */}
        <div style={{ background: '#e3f2fd', padding: '12px', borderRadius: '4px' }}>
          <strong style={{ color: '#1976d2' }}>使用 useState</strong>
          <p style={{ marginTop: '12px', fontSize: '24px', fontWeight: 'bold' }}>
            {displayStateCount}
          </p>
          <button onClick={handleStateClick} style={{ width: '100%', padding: '8px' }}>
            点击（会重新渲染）
          </button>
        </div>

        {/* Ref 版本 */}
        <div style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px' }}>
          <strong style={{ color: '#7b1fa2' }}>使用 useRef</strong>
          <p style={{ marginTop: '12px', fontSize: '24px', fontWeight: 'bold' }}>
            {displayRefCount}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button onClick={handleRefClick} style={{ padding: '8px' }}>
              点击（不重新渲染）
            </button>
            <button onClick={handleRefDisplay} style={{ padding: '8px' }}>
              显示值
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '12px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        <strong>对比：</strong>
        <ul style={{ margin: '8px 0 0 0' }}>
          <li>❌ useState: 点击立即更新并重新渲染</li>
          <li>✅ useRef: 修改后需要手动触发重新渲染才能看到</li>
        </ul>
      </div>
    </div>
  )
}
