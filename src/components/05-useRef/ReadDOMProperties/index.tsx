import { useRef } from 'react'

// 2️⃣ 读取 DOM 属性
export function ReadDOMProperties() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState<string>('未知')
  const [currentTime, setCurrentTime] = useState<string>('0:00')

  const handleGetDuration = () => {
    if (videoRef.current) {
      // 获取视频时长
      const mins = Math.floor(videoRef.current.duration / 60)
      const secs = Math.floor(videoRef.current.duration % 60)
      setDuration(`${mins}:${secs.toString().padStart(2, '0')}`)
    }
  }

  const handleGetCurrentTime = () => {
    if (videoRef.current) {
      const mins = Math.floor(videoRef.current.currentTime / 60)
      const secs = Math.floor(videoRef.current.currentTime % 60)
      setCurrentTime(`${mins}:${secs.toString().padStart(2, '0')}`)
    }
  }

  return (
    <div style={{ padding: '16px', background: '#f3e5f5', borderRadius: '8px', marginBottom: '16px' }}>
      <h3>2️⃣ 读取 DOM 属性</h3>

      {/* 模拟视频元素 */}
      <div style={{
        background: '#000',
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '12px',
        textAlign: 'center',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>📹 视频播放器（模拟）</p>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <p>视频时长: <strong>{duration}</strong></p>
        <p>当前时间: <strong>{currentTime}</strong></p>
      </div>

      <div>
        <button onClick={handleGetDuration}>获取时长</button>
        {' '}
        <button onClick={handleGetCurrentTime}>获取当前时间</button>
      </div>

      <div style={{ marginTop: '12px', padding: '8px', background: '#fff3cd', borderRadius: '4px', fontSize: '13px' }}>
        💡 可以读取 DOM 元素的任何属性（duration、currentTime、scrollTop 等）
      </div>
    </div>
  )
}

// 导入缺失的 useState
import { useState } from 'react'
