import { useEffect, useRef, useState } from 'react'

// 4️⃣ 跟踪前一个值
export function TrackPreviousValue() {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef<number | undefined>(undefined)
  const [prevCount, setPrevCount] = useState<number | undefined>(undefined)

  // 在每次渲染后更新前一个值（使用 useLayoutEffect 在浏览器绘制前执行）
  useEffect(() => {
    setPrevCount(prevCountRef.current)
    prevCountRef.current = count
  }, [count])

  return (
    <div style={{ padding: '16px', background: '#fff3e0', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>4️⃣ 跟踪前一个值</h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '12px',
        marginBottom: '12px'
      }}>
        <div style={{ background: 'white', padding: '12px', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>前一个值</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#f57c00' }}>
            {prevCount === undefined ? '-' : prevCount}
          </p>
        </div>
        <div style={{ background: 'white', padding: '12px', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>当前值</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2196f3' }}>
            {count}
          </p>
        </div>
        <div style={{ background: 'white', padding: '12px', borderRadius: '4px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>变化量</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50' }}>
            {prevCount !== undefined ? count - prevCount : 0}
          </p>
        </div>
      </div>

      <button onClick={() => setCount(count + 1)}>+1</button>
      {' '}
      <button onClick={() => setCount(count - 1)}>-1</button>
      {' '}
      <button onClick={() => setCount(0)}>重置</button>

      <div style={{ marginTop: '12px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 ref 在组件重新渲染时保持不变，可以用来记录前一个值
      </div>
    </div>
  )
}
